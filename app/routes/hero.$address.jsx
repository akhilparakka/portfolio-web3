import { useLoaderData } from "@remix-run/react";
import { connectToDatabase } from "../../db.js";

export let loader = async ({ params }) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("movies");

    const movies = await collection
      .aggregate([
        { $sample: { size: 12 } },
        { $project: { title: 1, _id: 0 } },
      ])
      .toArray();

    return { movies, address: params.address };
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    throw new Response("Failed to fetch data", { status: 500 });
  }
};

export default function HeroTest() {
  const { movies, address } = useLoaderData();

  return (
    <div>
      <h1>All Movie Names for {address}</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
