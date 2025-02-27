import { useLoaderData } from "@remix-run/react";
import { getDb } from "../../db";
import Header from "../components/Header/Header";
import "../styles/hero.css";

export let loader = async () => {
  try {
    const db = getDb();
    const collection = db.collection("celebs");

    const celebrities = await collection
      .find(
        {},
        {
          projection: {
            name: 1,
            description: 1,
            mainImage: 1,
            heroImage: 1,
            _id: 0,
            imageGallery: 1,
          },
        }
      )
      .toArray();

    return { celebrities };
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    throw new Response("Failed to fetch data", { status: 500 });
  }
};

export default function HeroTest() {
  const { celebrities } = useLoaderData();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <Header />
      <h1>All Artists</h1>
      <ul>
        {celebrities.map((celebrity, index) => (
          <li style={{ color: "white" }} key={index}>
            {celebrity.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
