import Document, { Html,Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}