import Wrapper from "../components/Wrapper"
import List from "../components/List"
import DividingTitle from "../components/DividingTitle"

export default function Main() {

    return (
        <Wrapper>
            <DividingTitle text="Catalog" />
            <div className="catalog">
                <div className="container">
                    <div className="catalog__content">
                        <List />   
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}