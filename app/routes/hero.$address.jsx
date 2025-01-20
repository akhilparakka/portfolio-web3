// routes/hero.$test.jsx
import { useLoaderData, useParams } from "@remix-run/react";

export let loader = async ({ params }) => {
  const testParam = params.address;
  return { testParam };
};

export default function HeroTest() {
  const data = useLoaderData();
  const { address } = useParams();

  return (
    <div>
      <h1>Dynamic Route Parameter: {address}</h1>
      <p>Loaded Data: {data.testParam}</p>
    </div>
  );
}
