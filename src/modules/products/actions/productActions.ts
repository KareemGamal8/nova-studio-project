"use server";

import endpoint from "@/src/shared/endpoint";
import { Product } from "../data/products";

export interface ApiCategory {
  _id: string;
  name: string;
  slug: string;
}

export interface ApiProduct {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  coins: number;
  imageCover: string;
  images: string[];
  category?: ApiCategory;
  createdAt?: string;
  updatedAt?: string;
}

function mapApiProductToProduct(doc: ApiProduct): Product {
  const plainDescription = doc.description
    ? doc.description.replace(/<[^>]*>/g, "").trim()
    : "";

  return {
    id: doc._id,
    name: doc.title,
    category: doc.category?.name || "عام",
    points: doc.coins ?? 0,
    price: typeof doc.price === "number" ? `${doc.price.toLocaleString("ar-EG")} ج.م` : doc.price || "",
    image: doc.imageCover || "",
    shortDescription: plainDescription,
    fullDescription: doc.description || "",
    features: [],
  };
}

export async function fetchProductsAction(): Promise<Product[]> {
  try {
    const response = await endpoint.get("/products");
    console.log(response);
    const docs: Product[] = response.data?.data?.documents || [];
    return docs;
  } catch (error) {
    console.error("Error fetching products via server action:", error);
    return [];
  }
}

export async function fetchProductByIdAction(id: string): Promise<Product | null> {
  try {
    const response = await endpoint.get(`/products/${id}`);
    const doc: ApiProduct = response.data?.data?.document || response.data?.data;
    if (!doc) return null;
    return mapApiProductToProduct(doc);
  } catch (error) {
    console.error(`Error fetching product ${id} via server action:`, error);
    return null;
  }
}
