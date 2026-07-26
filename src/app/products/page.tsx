import { ProductsList } from "@/src/modules/products/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "متجر المنتجات والمكافآت - CodeKody",
  description: "استبدل نقاطك التي جمعتها في كورسات البرمجة بمنتجات وأكسسوارات مميزة، أو يمكنك شراؤها مباشرة بسعرها النقدي.",
};

export default function ProductsPage() {
  return <ProductsList />;
}
