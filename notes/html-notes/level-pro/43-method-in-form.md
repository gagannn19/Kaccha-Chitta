# Method in Form

The `method` attribute decides how form data is sent to the server.

``` html
<form action="/login" method="POST">
  <button type="submit">Login</button>
</form>
```

## GET and POST

Different forms use `GET` or `POST` depending on what they need to do.

### GET

-   Used to request or retrieve data from the server.
-   Form data is commonly visible in the URL.
-   Often used for search forms.

**Example: Search form**

``` html
<form action="/search" method="GET">
  <input type="text" name="query" placeholder="Search">
  <button type="submit">Search</button>
</form>
```

If you search for `JavaScript`, the URL may look like
`/search?query=JavaScript`.

### POST

-   Used to send data to the server, often to create or save something.
-   Form data is sent in the request body instead of the URL.
-   Often used for signup, registration, and contact forms.

**Example: Registration form**

``` html
<form action="/register" method="POST">
  <input type="text" name="name" placeholder="Your name">
  <button type="submit">Register</button>
</form>
```

When the user clicks **Register**, the browser sends the name to the
server. The server can then save it in the database.

**Remember:** - **GET** = Request data from the server. - **POST** =
Send data to the server, often to create or save data.

The server usually sends a response for both methods. Also, `POST` does
not automatically make data secure; use HTTPS to protect data during
transmission.

------------------------------------------------------------------------

[← Action in Form](42-action-in-form.md) · [Level Pro](README.md) ·
[Home](../README.md) · [Form Element: Input →](44-form-element-input.md)
