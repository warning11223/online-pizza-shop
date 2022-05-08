const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((accum, item) => accum + item.price, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const items = Object.values(newItems).map((obj) => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice,
            }
        }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        case 'CART_ITEM_REMOVE':
            const itemsClone = {
                ...state.items
            };
            const currentTotalPrice = itemsClone[action.payload].totalPrice;
            const currentTotalCount = itemsClone[action.payload].items.length;

            delete itemsClone[action.payload];

            return {
                ...state,
                items: itemsClone,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        case 'PLUS_CART_ITEM':
            const currentPizzaItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: currentPizzaItems,
                        totalPrice: getTotalPrice(currentPizzaItems),
                    }
                }
            }
        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;

            const currentItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: currentItems,
                        totalPrice: getTotalPrice(currentItems),
                    }
                }
            }
        }
        default:
            return state;
    }
}

export default cart;