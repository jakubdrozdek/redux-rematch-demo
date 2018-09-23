// redux/store.js
import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import createSelectPlugin from "@rematch/select";

import * as models from "./models";

const loadingPlugin = createLoadingPlugin({
  // plugin config
});

const selectPlugin = createSelectPlugin({
  // plugin config
});

const store = init({
  models,
  plugins: [loadingPlugin, selectPlugin]
});

export const { select, dispatch } = store;
export default store;
