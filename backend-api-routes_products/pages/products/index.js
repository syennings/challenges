import useSWR from "swr";

import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1> LOADING SHRIMPS ... </h1>;
  }
  if (!data) {
    return;
  }

  return (
    <>
      <h1> List of Products </h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}> {product.name} </li>
        ))}
      </ul>
    </>
  );
}
