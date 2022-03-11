import Wrapper from "../components/Wrapper"
import Intro from "../components/Intro"
import List from "../components/List"
import DividingTitle from "../components/DividingTitle"

export default function Main() {

    return (
        <Wrapper>
            <Intro />
            <DividingTitle text="Favourites" />
            <div className="favourites">
                <div className="container">
                    <List />
                </div>
            </div>
        </Wrapper>
    )
}