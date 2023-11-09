import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="I blog about tech stuff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div> {/* This is where the notifications will be rendered. */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;