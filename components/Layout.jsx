import React from "react"
import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"



export default function Layout({title, keywords, description, children}) {
    return (
        <div style={{boxSizing: "border-box", margin: 0}}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            {/* <Header /> */}
            <main>{children}</main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
title: "Gift-Pal",
description:"Put a smile on someone's face today",
keywords: "Giving, Gift, Pal"
}
