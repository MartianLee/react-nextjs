import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";
// import ReCAPTCHA from "react-google-recaptcha";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    onChange(value) {
        console.log("Captcha value:", value);
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700&display=swap" rel="stylesheet"/>
                    {/* Recapcha */}
                    {/*<ReCAPTCHA*/}
                    {/*    sitekey="6Ld01LQUAAAAACfLveHUGIMlYcS-zAotC8n7YdpZ"*/}
                    {/*    onChange={this.onChange}*/}
                    {/*/>*/}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <style jsx>{`
                        body {
                            font-family: 'Noto Sans KR';
                            margin: 0 !important;
                        } 
                    `}</style>
                </body>
            </Html>
        )
    }
}

export default MyDocument