import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Welcome To AirBnb</title>
      </Head>
      <Header />
      <Banner />
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="my-8">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
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
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const endpoint = "https://links.papareact.com/pyp";
  const exploreData = await fetch(endpoint).then((res) => res.json());

  return {
    props: {
      exploreData,
    },
  };
}
