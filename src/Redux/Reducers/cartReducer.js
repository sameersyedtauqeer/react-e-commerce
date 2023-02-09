const cart = [];

const handleCart = (state = cart, action) => {
    // const product = action.payload

    switch (action.type) {
        case 'ADD_ITEM':
            // check if the peoduct is alreafy axist 

            // const exist = state.find((x) => x.id === product.id);
            // if (exist) {
            //     // increase the quantity 
            //     return state.map((x) =>
            //         x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            // } else {
            //     const product = action.payload;
            //     return [
            //         ...state, { ...product, qty: 1 }
            //     ]

            // }

            // const product = action.payload;
            return [
                ...state, { ...action.payload, qty: 1 }
            ]

        // state.cart = state.cart.push(product);
        // state.push(product);



        case "DELETE_ITEM":
            // const exist1 = state.find((x) => x.id === product.id);
            // if (exist1.qty === 1) {
            //     return state.filter((x) => x.id !== exist1.id);

            // } else {
            //     return state.map((x) =>
            //         x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            // }

            return state.filter((item) => item.id !== action.payload);

        default:
            return state;
            break
    }

}

export default handleCart