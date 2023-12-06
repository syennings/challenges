import useSWR from "swr";

export default function ProductForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name-input">Name</label>
      <input type="text" id="name-input" name="name" />
      <label htmlFor="description-input">Description</label>
      <input type="text" id="description-input" name="description" />
      <label htmlFor="price-input">Price</label>
      <input type="text" id="price-input" name="price" />
      <label htmlFor="currency-input">Currency</label>
      <input type="text" id="currency-input" name="currency" />
      <button type="submit">Submit</button>
    </form>
  );
}
