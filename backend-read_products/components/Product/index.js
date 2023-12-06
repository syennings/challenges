import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { setRequestMeta } from "next/dist/server/request-meta";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }
  async function handleDelete() {
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push("/");
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p> Reviews: </p>
      {data.reviews && data.reviews.length > 0 ? (
        <ul>
          {data.reviews.map((review) => (
            <li key={review._id}>
              <p> Title: {review.title}</p>
              <p> Text: {review.text}</p>
              <p> Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p> No Reviews For You Snoooob</p>
      )}
      <button
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        <span role="img" aria-label="A pencil">
          ✏️ Edit The Product
        </span>
      </button>

      <button onClick={handleDelete} disabled={isEditMode}>
        <span role="img" aria-label="A cross indicating deletion">
          ❌ DELETE EVERYTHING
        </span>
      </button>

      {isEditMode && (
        <ProductForm
          onSubmit={handleEdit}
          value={data.product}
          isEditMode={true}
        />
      )}

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
