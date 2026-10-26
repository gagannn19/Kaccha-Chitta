# Single Threaded

*One main worker for your JS code*

- Node runs your JS on **one thread** (one main worker).
- So how does it handle **1000 users** at once?
- Because it **never waits** for slow tasks (file, database, network).

**Restaurant example 🍽️ :**

- **Blocking** waiter : takes an order, stands in the kitchen till the food is ready. Other tables wait.
- **Node** waiter : takes an order, gives it to the kitchen, goes to the next table. Serves food when it's ready.

---
[← Practice Set 3](../level-03-core-modules/07-practice-set-3.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Blocking vs Non-Blocking →](../level-04-how-node-js-works/02-blocking-vs-non-blocking.md)
