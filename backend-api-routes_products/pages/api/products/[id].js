import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;

  console.log("----------------------------------------what is the id????", id);

  if (!id) {
    return response
      .status(400)
      .json({ error: "Invalid request. 'id' parameter is required." });
  }

  const product = getProductById(id);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }
  response.status(200).json(product);
}
