import React from 'react'
import App from 'next/app'
import fonts from '../styles/fonts'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (<>
      <style jsx global>{fonts}</style>
      <style jsx global>{`
        body {
          font-family: 'Untitled Sans', sans-serif;
          font-size: 1.125em;
        }
      `}</style>

      <Component {...pageProps} />
    </>)
  }
}