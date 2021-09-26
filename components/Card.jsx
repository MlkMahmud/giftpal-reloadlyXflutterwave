import React from 'react'
import Image from "next/image"




const styles = {
    card: {
        display: "flex",
        flexDirection: "row",
        width: 250,
        height: 80,
        borderRadius: 5,
        justifyContent: "space-between",
        marginTop: 20,
        alignItems: "center",
        padding: 10
    }
}

export default function Card({bg, text, icon, img}) {
    return (
        <div style={{...styles.card, background: bg}}>
            <Image src={`/images/${icon}.svg`} alt={`${icon} icon`} width={30} height={30}/>
            <p style={{color: "#FFFFFF"}}>{text}</p>
            <Image src={`/images/${img}.svg`} alt={`${img} image`} width={60} height={60}/>
        </div>
    )
}

