import Head from "next/head";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen">
      <div className="bg-neutral-700">
        <Head>
          <title></title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="shadow-2xl container mx-auto w-full bg-zinc-900 ring-1 ring-zinc-300/20 h-full 2xl:h-screen">
          <Body />
        </div>
          <Footer />
      </div>
    </div>
  );
}
