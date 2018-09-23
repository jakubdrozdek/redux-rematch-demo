let productId = 1;

export default {
  state: {
    products: []
  },
  reducers: {
    add(state, newProduct) {
      const productWithId = {
        ...newProduct,
        id: productId++
      };

      return {
        ...state,
        products: [...state.products, productWithId]
      };
    },
    remove(state, id) {
      return {
        ...state,
        products: state.products.filter(product => product.id !== id)
      };
    }
  },
  selectors: (slice, createSelector) => ({
    totalInPln() {
      console.log("[INIT] totalInPln");
      return slice(state => {
        console.log("[CALL] totalInPln", { state });
        return state.products.reduce(
          (acc, product) => acc + product.price * product.qty,
          0.0
        );
      });
    },
    totalInSelectedCurrency(models) {
      console.log("[INIT] totalInSelectedCurrency");
      return createSelector(
        this.totalInPln,
        models.currency.getSelectedCurrency,
        (total, currency) => {
          console.log("[CALL] totalInSelectedCurrency", { total, currency });
          return total * currency.rate;
        }
      );
    },
    productsInSelectedCurrency(models) {
      console.log("[INIT] productsInSelectedCurrency");
      return createSelector(
        slice,
        models.currency.getSelectedCurrency,
        (state, currency) => {
          console.log("[CALL] productsInSelectedCurrency", { state, currency });
          return state.products.map(product => ({
            ...product,
            price: product.price * currency.rate
          }));
        }
      );
    }
  })
};
