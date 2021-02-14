import React from 'react'
import App, { AppProps } from 'next/app'
import Head from "next/head"
import fonts from '../styles/fonts'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (<>
      <Head>
        <style jsx global>{fonts}</style>
      <style jsx global>{`
        body {
          font-family: 'Untitled Sans', sans-serif;
          font-size: 1.125em;
        }
      `}</style>
      </Head>
      <Component {...pageProps} />
    </>)
  }
}