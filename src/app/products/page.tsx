import { ProductsList } from "@/src/modules/products/components";
import endpoint from "@/src/shared/endpoint";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "متجر المنتجات والمكافآت - CodeKody",
  description: "استبدل نقاطك التي جمعتها في كورسات البرمجة بمنتجات وأكسسوارات مميزة، أو يمكنك شراؤها مباشرة بسعرها النقدي.",
};

const fetchProducts = async () => {
  try {
    const response = await endpoint.get("/products", {
      next: { revalidate: 60 },
    } as any);
    return response.data?.data || { documents: [], pagination: undefined };
  } catch (error) {
    console.error("Error fetching products during render:", error);
    return { documents: [], pagination: undefined };
  }
};

export default async function ProductsPage() {
  const { documents = [], pagination } = await fetchProducts();

  return <ProductsList products={documents} pagination={pagination} />;
}

