import { useDispatch, useSelector } from "react-redux"

import actions from "../../store/actions"

export default function Quantity({ id, quantity }) {
    const dispatch = useDispatch()
    const list = useSelector(state => state.list.list)

    // Closure

    const updateList = (operation) => {
        if (operation) {
            return () => {
                let newList = list.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
                dispatch({type: actions.UPDATE_LIST, payload: newList})
            }
        } else {
            return () => {
                let newList = list.map(item => {
                    if (item.id === id && item.quantity > 1) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
                dispatch({type: actions.UPDATE_LIST, payload: newList})
            }
        }
    }

    // Increase quantity of item in state

    const addThing = updateList(true)

    // Decrease quantity of item in state

    const removeThing = updateList(false)

    return (
        <div className="list__quantity quantity">
            <button onClick={addThing} className="quantity__button">+</button>
            <div className="quantity__value">{quantity}</div>
            <button onClick={removeThing} className="quantity__button">-</button>
        </div>
    )
}