import React from "react"
import Link from "next/link"
import Image from "next/image"

import Head from "next/head"

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
                                <Link href="/">
                                    Store-layout
                                </Link>
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
                                    <div className="head__basket">
                                        <Image src="/images/cart.svg" width="24px" height="24px" alt="cart icon" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="head__nav">
                            <nav>
                                {
                                    navLinks.map(link => {
                                        return (
                                            <Link href={link.link} key={Math.random()} passHref> 
                                                <div className="head__link">{link.name}</div>
                                            </Link>
                                        )
                                    })
                                }
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}