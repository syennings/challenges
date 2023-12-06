import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const products = getAllProducts();

  if (!products) {
    return response.status(404).json({ status: "Not Found" });
  }
  response.status(200).json(products);
}
