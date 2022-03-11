import Header from "../components/Header"
import Foot from "../components/Foot"
import Intro from "../components/Intro"
import List from "../components/List"
import DividingTitle from "../components/DividingTitle"

export default function Main() {

    return (
        <>
            <Header />
            <Intro />
            <DividingTitle text="Favourites" />
            <div className="favourites">
                <div className="container">
                    <List />
                </div>
            </div>
            <Foot />
        </>
    )
}