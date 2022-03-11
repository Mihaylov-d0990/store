import Header from "./Header"
import Foot from "./Foot"

export default function Wrapper(props) {
    
    return (
        <>
            <Header />
            {props.children}
            <Foot />
        </>
    )
}