import React from "react"

import List from "./List"

export default function Catalog() {

    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <div className="catalog__title title">Catalog</div>
                    <List />   
                </div>
            </div>
        </div>
    )
}