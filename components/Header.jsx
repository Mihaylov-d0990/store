import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import Head from "next/head"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import actions from "../store/actions"
import checkLocalCart from "../functions/checkLocalCart"

export default function Header() {
    const navLinks = React.useState([
        {
            name: "Catalog",
            link: "/catalog"
        },
        {
            name: "Lorem",
            link: "/"
        },
        {
            name: "Lorem",
            link: "/"
        },
        {
            name: "Lorem",
            link: "/"
        },
        {
            name: "Lorem",
            link: "/"
        },
        {
            name: "Lorem",
            link: "/"
        },
    ])[0]

    const [mobileRender, setMobileRender] = React.useState(false)
    const [toggleNav, setToggleNav] = React.useState(false)
    const [WindowWidth, setPrevWindowWidth] = React.useState(0)

    const router = useRouter()

    const windowResize = (e) => {
        setPrevWindowWidth(e.currentTarget.innerWidth)
    }

    React.useEffect(() => {    
        window.addEventListener("resize", windowResize)

        if (router.isReady) {
            if (window.innerWidth < 481 && !mobileRender) setMobileRender(true)
            else if (window.innerWidth > 480 && mobileRender) setMobileRender(false)
        }

        return () => {
            window.removeEventListener("resize", windowResize)
        }
    }, [WindowWidth])

    const dispatch = useDispatch()
    React.useEffect(() => {
        console.log(typeof localStorage.cart);
        dispatch({
            type: actions.UPDATE_COUNT, 
            payload: checkLocalCart()
            
        })
        
    }, [dispatch])

    const toggleNavBar = () => {
        setToggleNav(() => !toggleNav)
    }

    const cartItemsQuantity = useSelector(state => state.count.count)

    return (
        <>
            <Head>
                <title>Store</title>
            </Head>
            <div className="head dividing">
                <div className="container">
                    <div className="head__content">
                        <div className="head__top">
                            <div className="head__logo">
                                <Link href="/">Store-layout</Link>
                            </div>
                            <div className="head__search">
                                <input type="text" />
                                <button>Search</button>
                            </div>
                            <div className="head__profile">
                                <Link href="/login" passHref>
                                    <div className="head__login">
                                        <Image src="/images/profile.svg" width="24px" height="24px" alt="profile icon" />
                                    </div>
                                </Link>
                                <Link href="/cart" passHref>
                                    <div className="head__cart">
                                        <Image src="/images/cart.svg" width="24px" height="24px" alt="cart icon" />
                                        <div className="head__cart-counter"><p>{cartItemsQuantity}</p></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="head__switch-button" onClick={toggleNavBar}>
                                {toggleNav ? "Hide navigation" : "Show navigation"}
                            </div>
                            <div className={(toggleNav && mobileRender) || !mobileRender ? "head__nav head__nav_show" : "head__nav head__nav_hide"}>
                                <nav>
                                    {
                                        navLinks.map(link => {
                                            return (
                                                <Link href={link.link} key={Math.random()} passHref> 
                                                    <div 
                                                        className={(toggleNav && mobileRender) || !mobileRender ? "head__link head__link_show" : "head__link head__link_hide"}>{link.name}</div>
                                                </Link>
                                            )
                                        })
                                    }
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}