import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Message from "../components/message";
// import ReCAPTCHA from "react-google-recaptcha";

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  onChange (value) {
    console.log('Captcha value:', value)
  }

  render () {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700&display=swap" rel="stylesheet"/>
          {/* Recapcha */}
          {/* <ReCAPTCHA */}
          {/*    sitekey="6Ld01LQUAAAAACfLveHUGIMlYcS-zAotC8n7YdpZ" */}
          {/*    onChange={this.onChange} */}
          {/* /> */}
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
