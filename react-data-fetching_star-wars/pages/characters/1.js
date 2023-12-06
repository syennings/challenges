import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

export default function Character() {
  const { data, error } = useSWR(`https://swapi.dev/api/people/1`);

  const isLoading = !data && !error;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  // const id = 1;

  return (
    <Layout>
      <h1>{data.name}</h1>
      <Card data={data} />
    </Layout>
  );
}
