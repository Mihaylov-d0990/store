import Head from "../components/Head"
import Foot from "../components/Foot"
import Intro from "../components/Intro"
import List from "../components/List"
import DividingTitle from "../components/DividingTitle"

export default function Main() {

    return (
        <>
            <Head />
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