import React from "react"
import { useSelector } from "react-redux"

import ListItem from "./ListComponents/ListItem"

export default function List() {

    const list = useSelector(state => state.list.list) 

    return (
        <div className="list">
            {list.map(item => {
                return <ListItem item={item} key={item.id}/>
            })}  
        </div>
    )
}