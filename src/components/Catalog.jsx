import React from "react"

import List from "./List"
import DividingTitle from "./DividingTitle"

export default function Catalog() {

    return (
        <>
            <DividingTitle text="Catalog" />
            <div className="catalog">
                <div className="container">
                    <div className="catalog__content">
                        <List />   
                    </div>
                </div>
            </div>
        </>
    )
}