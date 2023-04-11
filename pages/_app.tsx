import "@/styles/globals.css";
import "@/styles/languages.css";
import Head from "next/head";
import { Inter, Open_Sans } from "next/font/google";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Commissions</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
