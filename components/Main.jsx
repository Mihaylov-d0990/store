import Intro from "./Intro"
import React from "react"

import List from "./List"
import DividingTitle from "./DividingTitle"

export default function Main() {

    return (
        <>
            <Intro />
            <DividingTitle text="Favourites" />
            <div className="favourites">
                <div className="container">
                    <List />
                </div>
            </div>
        </>
    )
}