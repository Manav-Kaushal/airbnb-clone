import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, sliderData }) {
  return (
    <div>
      <Head>
        <title>Welcome To AirBnb</title>
      </Head>
      <Header />
      <Banner />
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="p-8 my-8 transition ease-out border rounded-lg shadow-lg duration-400">
          <h2 className="pb-5 text-4xl font-semibold uppercase">
            <span className="text-red-400">Explore</span> Nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((data, index) => (
              <SmallCard
                key={index + Math.random()}
                img={data.img}
                location={data.location}
                distance={data.distance}
              />
            ))}
          </div>
        </section>
        <section className="p-8 my-8 transition ease-out border rounded-lg shadow-lg duration-400">
          <h2 className="py-8 text-4xl font-semibold uppercase">
            <span className="text-red-400">Live</span> anywhere
          </h2>
          <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
            {sliderData.map((data, index) => (
              <MediumCard
                key={index + Math.random()}
                img={data.img}
                title={data.title}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          desc="Wishlists curated by Airbnb."
          btnText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const sliderData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());

  return {
    props: {
      exploreData,
      sliderData,
    },
  };
}
