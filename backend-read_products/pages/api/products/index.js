import dbConnect from "@/db/dbConnect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();
    console.log("---------prudcts?!", products);
    response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      await Product.create(productData);

      console.log("productData", productData);

      response.status(201).json({ status: "Product created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
