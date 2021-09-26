import React from 'react'
import Image from "next/image"
import Header from '../components/Header'
import Separator from '../components/Separator'
import Button from '../components/Button'
import Card from '../components/Card'
import Link from 'next/link'



const styles = {
    heroSection: {
        backgroundImage: "url(" + "/images/HeroSectionBg.svg" + ")",
        width: "100%",
        height: "90vh",
        backgroundSize: "cover"
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10
    },
    heroTextWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 50
    },
    text: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#FFFFFF"
    },
    h1: {
        color: "#FFFFFF",
        paddingBottom: 5
    },
    h4: {
        color: "#FFFFFF",
    },
    p: {
        color: "#FFFFFF",
       lineHeight: 5
    },
    btn: {
        paddingTop: 70,
    },
    img: {
        paddingRight: 20
    },
    subHero: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#5A12A3",
        paddingBottom: 20
    },
    cardLink: {
        textDecoration: "none"
    },
    about: {
        background: "#5A12A3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 400,
        width: "100%",
        padding: 10,
        paddingTop: 20
    },
    aboutCards: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    pText: {
        position: "absolute",
        top: 120,
        zIndex: 1,
        color: "#FFFFFF",
        flexWrapp: "wrap",
        paddingLeft: 50,
        paddingRight: 50 
    },
    gCard: {
        position: "relative",
    },
}




export default function Home() {
    const cardItems = [
        {
            text: "Send airtime gift", 
            bg: "#2FD7AE",
            img: "hand_rock",
            icon: "dollar"
        },
        {
            text: "Send cash gift",
            bg: "#F8D72C",
            img: "hand_one_finger",
            icon: "cash"
        },
        {
            text: "Send giftcards",
            bg: "#E72CF8",
            img: "hand_first",
            icon: "box"
        },
    ];
    const texts = [
        "Create account in simple steps",
        "Browse and select desired gift from gift category",
        "Add recepient details and a little surprise note",
        "Make payments from multiple payments option",
        "Gift confirmation code shared with the giftee to redeem"
    ]
    return (
        <div>
            <div style={styles.heroSection}>
                <Header />
                <div style={styles.contentWrapper}>
                    <div style={styles.heroTextWrapper}>
                        <div style={styles.text}>
                            <h1 style={styles.h1}>Giving shouldn&apos;t <br /> be accasional.</h1>
                            <h4 style={styles.h4}>Make everyday an accasion</h4>
                            <p style={styles.p}>Put a smile on someone&apos;s face today. Giving made easy and fun, anytime any day</p>
                        </div>
                        <div style={styles.btn}>
                            <Button title="Get Giting" br={15} primary/>
                        </div>
                    </div>
                    <div style={styles.img}>
                        <Image src={"/images/heroImg.svg"}  alt="hero image" width={300} height={400}/>
                    </div>
                </div>
            </div>
            <Separator />
            <div style={styles.subHero}>
                {cardItems.map((item, index) => (
                    <Link href={`/${index + 1}`} key={index} >
                        <a style={styles.cardLink}>
                            <Card  
                            bg={item.bg} 
                            text={item.text}
                            img={item.img} 
                            icon={item.icon}
                            />
                        </a>
                    </Link>
                ))}
            </div>
            <Separator />
            <div style={styles.about}>
                <h1 style={{color: "#FFFFFF", textAlign: "center"}}>How it works</h1>
                <div style={styles.aboutCards}>
                    {texts.map((text, index) => (
                        <React.Fragment key={index}>
                        <div style={styles.gCard}>
                            <p style={styles.pText}>{text}</p>
                            <Image src={`/images/_${index + 1}.svg`} alt="how it works cards" width={600} height={750}/>
                        </div>
                        </React.Fragment>
                    ))}
                </div>
                <Button primary title="Get started here" width={200} br={15}/>
            </div>
            <Separator />
        </div>
    )
}