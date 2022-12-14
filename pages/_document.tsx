import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-[#F1F1F1]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
