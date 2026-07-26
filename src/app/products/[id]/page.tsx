import { ProductDetails } from "@/src/modules/products/components";
import { Product, products } from "@/src/modules/products/data/products";
import endpoint from "@/src/shared/endpoint";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  try {
    const response = await endpoint.get(`/products/${id}`);
    const doc = response.data?.data?.document || response.data?.data;
    if (!doc) return null;

    const categoryName = typeof doc.category === "object" ? doc.category?.name : doc.category;
    const plainDesc = doc.description ? doc.description.replace(/<[^>]*>/g, "").trim() : doc.shortDescription || "";
    const displayPrice = typeof doc.price === "number" ? `${doc.price.toLocaleString("ar-EG")} ج.م` : doc.price || "";

    return {
      id: doc._id || doc.id || id,
      name: doc.title || doc.name || "",
      category: categoryName || "عام",
      points: doc.coins ?? doc.points ?? 0,
      price: displayPrice,
      image: doc.imageCover || doc.image || "",
      shortDescription: plainDesc,
      fullDescription: doc.description || doc.fullDescription || "",
      features: doc.features || [],
      images: doc.images || [],
    };
  } catch (error) {
    return products.find((p) => p.id === id) || null;
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await fetchProduct(resolvedParams.id);

  if (!product) {
    return {
      title: "المنتج غير موجود - CodeKody",
    };
  }

  return {
    title: `${product.name} - متجر CodeKody`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = await fetchProduct(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
