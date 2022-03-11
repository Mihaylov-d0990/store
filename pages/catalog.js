import Header from "../components/Header"
import Foot from "../components/Foot"
import List from "../components/List"
import DividingTitle from "../components/DividingTitle"

export default function Main() {

    return (
        <>
            <Header />
            <DividingTitle text="Catalog" />
            <div className="catalog">
                <div className="container">
                    <div className="catalog__content">
                        <List />   
                    </div>
                </div>
            </div>
            <Foot />
        </>
    )
}