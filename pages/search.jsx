import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }) => {
  const router = useRouter();

  // ES6 Destructuring
  const { location, startDate, endDate, guests } = router.query;

  // Formatting string date to date format
  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guests} guest(s)`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          {formattedStartDate !== formattedEndDate ? (
            <p className="text-xs">
              300+ stays for <strong className="text-red-400">{range}</strong>{" "}
              for {guests} number of guests
            </p>
          ) : (
            <p className="text-xs">
              300+ stays for{" "}
              <strong className="text-red-400">{formattedStartDate}</strong> for{" "}
              {guests} number of guest(s)
            </p>
          )}
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in <span className="text-red-400 capitalize">{location}</span>
          </h1>
          <div className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((item, index) => (
              <InfoCard
                key={index + Math.random()}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
