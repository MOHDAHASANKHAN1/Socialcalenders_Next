
const initialstate = {
    Products: [],
    Quantity: 0,
    Totalprice: 0
};

const Cart = (state = initialstate, action) => {
    const Check = state.Products.find(item => item.productpath === action.payload.productpath);
    switch (action.type) {
        case "ADD":
            if (!Check) {
                state.Products.push(action.payload);
                state.Totalprice += action.payload.oprice;
                return { ...state, Quantity: state.Quantity + action.payload.quantity, Products: state.Products };
            } else {
                Check.quantity += action.payload.quantity;
                Check.uprice = (Check.oprice * Check.quantity);
                state.Totalprice = state.Totalprice + Check.oprice;
                return { ...state, Quantity: state.Quantity + action.payload.quantity, Products: state.Products };
            }
        case "REMOVE":
            state.Quantity -= Check.quantity;
            state.Totalprice = state.Totalprice - Check.uprice;
            var index = state.Products.findIndex(function (o) {
                return o.productpath === action.payload.productpath;
            })
            if (index !== -1) state.Products.splice(index, 1);
            return { ...state, Quantity: state.Quantity, Products: state.Products };
        case "ADDQTS":
            state.Quantity += action.payload.quantity;
            Check.quantity += action.payload.quantity;
            Check.uprice = (Check.oprice * Check.quantity);
            state.Totalprice = state.Totalprice + Check.oprice;
            return { ...state, Quantity: state.Quantity, Products: state.Products };
        case "REMOVEQTS":
            if (Check.quantity > 1) {
                state.Quantity -= action.payload.quantity;
                Check.quantity -= action.payload.quantity;
                Check.uprice = (Check.uprice - Check.oprice);
                state.Totalprice = state.Totalprice - Check.oprice;
                return { ...state, Quantity: state.Quantity, Products: state.Products };
            } else {
                return { ...state, Quantity: state.Quantity, Products: state.Products };
            }
        default:
            return state
    }
}

export { Cart };