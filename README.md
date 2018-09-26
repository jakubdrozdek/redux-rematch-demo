This repository contains 3 branches prepared for my presentation about Rematch library.

# pure-redux
Contains a simple counter application. It shows how to configure Redux, and write simple reducers and actions (also with async thunks).

# rematch
Contains a simple counter application. It is the `pure-redux` repo's counterpart, but instead of using pure Redux, I used Rematch here. It shows how the same functionality might be achieved using Rematch, and how to use `@rematch/loading` plugin).

# rematch-demo
Contains code from `rematch` branch, extended with a simple shopping cart page and some styling. It shows how to configure Rematch plugins and how to use them (both `@rematch/loading` and `@rematch/select`), and also how to handle expensive calculations effectively with memoization.
