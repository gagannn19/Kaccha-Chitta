// Vercel function: read/save notes/<collection>/change-notes.md in the GitHub repo,
// so change notes can be edited on the live site. Nothing else is writable.
//
// Needs a Vercel environment variable GITHUB_TOKEN: a fine-grained GitHub token
// with "Contents: Read and write" on this repo only.

const crypto = require('node:crypto');

const PASSWORD_HASH = 'b03ddf3ca2e714a6548e7495e2a03f5e824eaac9837cd7f159c67b90fb4b7342';
const REPO = process.env.GITHUB_REPO || 'gagannn19/Kaccha-Chitta';
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const COLLECTION = /^[a-z0-9][a-z0-9._-]{0,80}$/i;
const MAX_SIZE = 200 * 1024;

const sha256 = (s) => crypto.createHash('sha256').update(String(s)).digest('hex');

function passwordOk(given) {
  const a = Buffer.from(sha256(given));
  const b = Buffer.from(PASSWORD_HASH);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (!passwordOk(req.headers['x-password'] || '')) return res.status(401).send('Wrong password');

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(503).send('Saving is not set up yet: add GITHUB_TOKEN in Vercel');

  const collection = String(req.query.c || '');
  if (!COLLECTION.test(collection) || collection.includes('..')) return res.status(400).send('Bad collection name');

  const file = `notes/${collection}/change-notes.md`;
  const url = `https://api.github.com/repos/${REPO}/contents/${file.split('/').map(encodeURIComponent).join('/')}`;
  const gh = (method, body) => fetch(method === 'GET' ? `${url}?ref=${encodeURIComponent(BRANCH)}` : url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'kaccha-chittha',
    },
    body: body && JSON.stringify(body),
  });

  try {
    if (req.method === 'GET') {
      const r = await gh('GET');
      if (r.status === 404) return res.status(200).json({ content: '', sha: null });
      if (!r.ok) return res.status(502).send(`GitHub said ${r.status}`);
      const j = await r.json();
      return res.status(200).json({ content: Buffer.from(j.content, 'base64').toString('utf8'), sha: j.sha });
    }

    if (req.method === 'PUT') {
      const { content, sha } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
      if (typeof content !== 'string' || Buffer.byteLength(content) > MAX_SIZE) return res.status(400).send('Bad content');
      const r = await gh('PUT', {
        message: `Update ${collection} change notes from website [skip deploy]`,
        content: Buffer.from(content, 'utf8').toString('base64'),
        sha: sha || undefined,
        branch: BRANCH,
      });
      if (r.status === 409 || r.status === 422) return res.status(409).send('This file changed somewhere else. Reload the page and try again.');
      if (!r.ok) return res.status(502).send(`GitHub said ${r.status}`);
      const j = await r.json();
      return res.status(200).json({ sha: j.content.sha });
    }

    res.setHeader('Allow', 'GET, PUT');
    return res.status(405).send('Method not allowed');
  } catch (err) {
    return res.status(500).send(err.message || 'Error');
  }
};
