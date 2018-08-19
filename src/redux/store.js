// redux/store.js
import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";

import * as models from "./models";

const loading = createLoadingPlugin({
  // plugin config
});

const store = init({
  models,
  plugins: [loading]
});

export default store;