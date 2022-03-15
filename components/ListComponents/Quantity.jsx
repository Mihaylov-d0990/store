import { useDispatch, useSelector } from "react-redux"

import actions from "../../store/actions"

export default function Quantity({ id, quantity }) {
    const dispatch = useDispatch()
    const list = useSelector(state => state.list.list)

    // Increase quantity of item in state

    const addThing = () => {
        let newList = list.map(item => {
            if (item.id === id) {
                return {...item, quantity: item.quantity + 1}
            } else {
                return item
            }
        })
        dispatch({type: actions.UPDATE_LIST, payload: newList})
    }

    // Decrease quantity of item in state

    const removeThing = () => {
        let newList = list.map(item => {
            if (item.id === id && item.quantity > 1) {
                return {...item, quantity: item.quantity - 1}
            } else {
                return item
            }
        })
        dispatch({type: actions.UPDATE_LIST, payload: newList})
    }

    return (
        <div className="list__quantity quantity">
            <button onClick={addThing} className="quantity__button">+</button>
            <div className="quantity__value">{quantity}</div>
            <button onClick={removeThing} className="quantity__button">-</button>
        </div>
    )
}