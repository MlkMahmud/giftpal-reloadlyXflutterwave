import React from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../components/Button";

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        height: 400,
        margin: " 50px 10%",
        alignItems: "center",
        justifyContent: "center",
        background: "#F8D72C",
    },
    lfWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 400,
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        background: "#FFFFFF",
        height: 400,
        width: 600,
        padding: 10,
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 30
    },
    rmMe: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 'auto',
        marginBottom: 10,
    },
    btn: {
        marginLeft: "auto",
        marginRight: 20,
        marginTop: 10
    }
}


export default function Login() {
    
    return (
        <Layout>
            <Header />
            <div style={styles.container}>
                <div style={styles.lfWrapper}>
                    <Image src={"/images/Dayflow.svg"} alt="login img" width={500} height={200}/>
                    <p style={{textAlign: "center", paddingTop: 5}}>Glad to have you back!</p>
                </div>
                <div style={styles.form}>
                    <div style={styles.wrapper}>
                        <label>Username</label>
                        <Input onChange={({target}) => console.log(target.value)} placeholder="Enter your username"/>
                    </div>
                    <div style={styles.wrapper}>
                        <label>Password</label>
                        <Input onChange={({target}) => console.log(target.value)} placeholder="Enter your password"/>
                    </div>
                    <div style={styles.rmMe}>
                        <p>Forgot password?</p>
                            <div style={{paddingLeft: 20}}>
                                <Input type="radio" value="reset" width={10} height={10}/>
                                <Link href="/reset">
                                    <a style={{paddingLeft: 5, textDecoration: "none", color: 'black'}}>Remember Me</a>
                                </Link>
                            </div>
                    </div>
                    <div style={styles.btn}>
                        <Button secondary title="Login" width={200}/>
                    </div>
                </div>
            </div>
      </Layout>
    );
  }