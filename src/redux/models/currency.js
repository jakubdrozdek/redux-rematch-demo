export default {
  state: {
    currencies: [
      { name: "pln", label: "PLN", rate: 1.0 },
      { name: "usd", label: "USD", rate: 0.27284 },
      { name: "gbp", label: "GBP", rate: 0.20874 }
    ],
    selected: "pln"
  },
  reducers: {
    select(state, currencyName) {
      return {
        ...state,
        selected: currencyName
      };
    }
  },
  selectors: slice => ({
    getSelectedCurrency() {
      console.log("[INIT] getSelectedCurrency");
      return slice(state => {
        console.log("[CALL] getSelectedCurrency", { state });
        return state.currencies.find(
          currency => currency.name === state.selected
        );
      });
    }
  })
};
