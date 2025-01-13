import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "../components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: "2021-09-01T00:00:00Z",
      views: 55,
      author: { id: 1, name:"robot" },
      _id: 1,
      description: "This is a pitch",
      image: "https://placehold.co/600x400",
      category: { name: "Tech" },
      title: "We Robots",
    },
    
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading ">Pitch Your Startup</h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, VOte on Pitches, and Get Noticed
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Latest Pitches"}
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5 p-4">
          {posts?.length > 0 ? (
            posts.map((post, i: number) => ( 
            <StartupCard key={post?._id}  post={post} />
          ))
          ) : (
            <p className="no-results">No startups found ⚠️</p>
          )}
        </ul>
      </section>
    </>
  );
}
