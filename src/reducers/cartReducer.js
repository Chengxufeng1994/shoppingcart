import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUBTRACT_QUANTITY,
    ADD_SHIPPING,
    SUBTRACT_SHIPPING
} from '../actions/types'

const initalState = {
    items: [
        {
            id: 1,
            title: "pair of black booties",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",
            price: 110,
            image: Item1,
        },
        {
            id: 2,
            title: "leaf photography during daytime",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",
            price: 120,
            image: Item2,
        },
        {
            id: 3,
            title: "rectangular white case on gray surface",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",
            price: 130,
            image: Item3,
        },
        {
            id: 4,
            title: "person using MacBook pro",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",
            price: 140,
            image: Item4,
        },
        {
            id: 5,
            title: "black backpack hanging on brown tree branch",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",
            price: 150,
            image: Item5,
        },
        {
            id: 6,
            title: "turned-on post-2018 iPhone",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",
            price: 160,
            image: Item6,
        },
    ]
    ,
    addedItems: [],
    total: 0
}

const cartReducer = (state = initalState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existedItem = state.addedItems.find(item => action.id === item.id)
        if (existedItem) {
            addedItem.quantity += 1
            return {
                ...state, total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemToRemove.prie * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUBTRACT_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let newItems = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: newItems,
                total: newTotal
            }

        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    }
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }
    if (action.type === SUBTRACT_SHIPPING) {
        return {
            ...state,
            total: state.total - 6
        }
    }
    return state;
}

export default cartReducer;