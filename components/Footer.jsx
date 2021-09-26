import React from 'react'
import Image from "next/image"
import Link from "next/link"




const styles = {
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "#DF932F",
        padding: 10,
        paddingBottom: 20
    },
    wrapper: {
        display: "flex",
        flexDirection: "column"
    },
    ftLogo: {
        paddingBottom: 2,
        paddingLeft: 20
    },
    copyright: {
        paddingLeft: 20,
        paddingBottom: 10,
        color: "#FFFFFF"
    },
    terms: {
        color: "#FFFFFF",
        textDecoration: "none"
    },
    lfContent: {
        flex: 0.7,
        display: "flex",
        justifyContent: "space-around"
    },
    company: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    contact: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    gift: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    h2: {
        color: "#FFFFFF",
    },
    a: {
        color: "#FFFFFF",
        textDecoration: "none"
    },
    socialLinks: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
    }
}



export default function Footer() {
    return (
        <div style={styles.footer}>
            <div style={styles.wrapper}>
                <Link href={"/"}>
                    <a style={styles.ftLogo}>
                        <Image src={"/images/logo.svg"}  alt="logo"  width={100} height={50}/>
                    </a>
                </Link>
                <p style={styles.copyright}>&copy; copyright GiftPal, {new Date().getFullYear()}</p>
                <Link href={"/"}>
                    <a style={styles.terms}>
                    Terms of service | Privacy policy
                    </a>
                </Link>
            </div>
            <div style={styles.lfContent}>
                <div style={styles.company}>
                    <h2 style={styles.h2}>Company</h2>
                    <Link href={"/help"}>
                        <a style={styles.a}>Help center</a>
                    </Link>
                    <Link href={"/about"}>
                        <a style={styles.a}>Location</a>
                    </Link>
                </div>
                <div style={styles.contact}>
                    <h2 style={styles.h2}>Get in touch</h2>
                    <Link href={"/faq"}>
                        <a style={styles.a}>Question or Feedback?</a>
                    </Link>
                    <Link href={"/contact"}>
                        <a style={styles.a}>We'd love to hear from you</a>
                    </Link>
                    <div style={styles.socialLinks}>
                        <Link href={"/"}>
                            <a>
                                <Image src={"/images/twitter.svg"} alt="twitter logo" width={22} height={17} />
                            </a>
                        </Link>
                        <Link href={"/"}>
                            <a>
                                <Image src={"/images/instagram.svg"}  alt="instagram logo" width={22} height={17} />
                            </a>
                        </Link>
                        <Link href={"/"}>
                            <a>
                                <Image src={"/images/linkedin.svg"}  alt="linkedin logo" width={22} height={17}/>
                            </a>
                        </Link>
                    </div>
                </div>
                <div style={styles.gift}>
                    <h2 style={styles.h2}>GiftPal</h2>
                    <Link href={"/why"}>
                        <a style={styles.a}>Why GiftPal</a>
                    </Link>
                    <Link href={"/about"}>
                        <a style={styles.a}>About GiftPal</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
