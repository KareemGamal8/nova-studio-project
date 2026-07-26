import { ProductsList } from "@/src/modules/products/components";
import endpoint from "@/src/shared/endpoint";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "متجر المنتجات والمكافآت - CodeKody",
  description: "استبدل نقاطك التي جمعتها في كورسات البرمجة بمنتجات وأكسسوارات مميزة، أو يمكنك شراؤها مباشرة بسعرها النقدي.",
};

const fetchProducts = async () => {
  const response = await endpoint.get("/products");

  return response.data.data;
}

export default async function ProductsPage() {
  const { documents, pagination } = await fetchProducts();

  return <ProductsList products={documents} pagination={pagination} />;
}
