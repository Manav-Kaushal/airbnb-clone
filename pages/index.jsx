import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Welcome To AirBnb</title>
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
