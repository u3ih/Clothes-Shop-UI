const cart = [];

const ACTIONCART = {
    ADDCART: "ADDCART",
    DELCART: "DELCART"
}

const handleCart = (state = cart, action) => {
    const product = action.payload;
    console.log(action.type);

    switch (action.type) {
        case ACTIONCART.ADDCART:

            const exist = state.find((x) => x.id === product.id);
            console.log(exist);
            if (exist) {
                // Increase the quntity
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

        case ACTIONCART.DELCART:
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            }
            break;

        default:
            return state;
            break
    }
}

export default handleCart;