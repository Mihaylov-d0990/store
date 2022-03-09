import Intro from "./Intro"
import React from "react"

import List from "./List"

export default function Main() {

    return (
        <>
            <Intro />
            <div className="dividing"></div>
            <div className="favourites">
                <div className="container">
                    <List />
                </div>
            </div>
        </>
    )
}