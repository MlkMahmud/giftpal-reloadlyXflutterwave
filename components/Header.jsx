import React from 'react'
import Link from "next/link"
import Image from "next/image"




const styles = {
    container: {
        display: "flex",
        paddingLeft: 20,
        paddingTop: 20,
        paddingRight: 20,
        background: "#5A12A3"
    },
    nav: {
        display: "flex",
        flexDirection: "row",
        background: "#FFFFFF",
        borderRadius: 10,
        width: "auto",
        height: 30,
        marginLeft: "auto",
        alignItems: "center",
        justifyContent: "space-around",
        flex: 0.4,
        marginTop: 20,
        marginBottom: 20
    },
    anchor: {
        textDecoration: "none",
        alignItems: "center",
        color: "black"
    },
    icon: {
        display: "flex",
        width: 50,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        background: "#DF932F",
        borderRadius: 15,
        paddingTop: 5
    },

}


export default function Header() {
    return (
        <div style={styles.container}>
            <div>
                <Image src={"/images/logo.svg"} width={100} height={50} alt="logo" />
            </div>
            <nav style={styles.nav}>
                <Link href="/">
                    <a style={styles.anchor}>Home</a>
                </Link>
                <Link href="/how_it_works">
                    <a style={styles.anchor}>How it works</a>
                </Link>
                <Link href="/about">
                    <a style={styles.anchor}>About us</a>
                </Link>
                <Link href="/login">
                    <a style={styles.anchor}>Sign in</a>
                </Link>
                <div style={styles.icon}>
                    <Link href="/gift">
                        <a style={{...styles.anchor}}>
                            <Image src={"/images/gift.svg"} alt="gift icon" width={20} height={20}/>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
