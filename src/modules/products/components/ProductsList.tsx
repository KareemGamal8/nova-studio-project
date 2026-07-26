"use client";

import { Pagination, PaginationInfo } from "@/src/design-system/components";
import { Product } from "@/src/modules/products/data/products";
import endpoint from "@/src/shared/endpoint";
import { useQuery } from "@tanstack/react-query";
import { Coins, CreditCard, Info, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "./ProductCard";

export interface CategoryItem {
  _id: string;
  name: string;
  slug: string;
}

interface ProductsListProps {
  products?: any[];
  pagination?: PaginationInfo;
}

const fetchCategories = async (): Promise<string[]> => {
  const response = await endpoint.get("/categories");
  const docs: CategoryItem[] = response.data?.data?.documents || [];
  return ["الكل", ...docs.map((cat) => cat.name)];
};

export function ProductsList({ products = [], pagination }: ProductsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(pagination?.currentPage || 1);

  const { data: categories = ["الكل"] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: Infinity, // Fetch only once and keep cached indefinitely
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const normalizedProducts: Product[] = products.map((p: any) => {
    const categoryName = typeof p.category === "object" ? p.category?.name : p.category;
    const plainDesc = p.description ? p.description.replace(/<[^>]*>/g, "").trim() : p.shortDescription || "";
    const displayPrice = typeof p.price === "number" ? `${p.price.toLocaleString("ar-EG")} ج.م` : p.price || "";

    return {
      id: p._id || p.id || String(Math.random()),
      name: p.title || p.name || "",
      category: categoryName || "عام",
      points: p.coins ?? p.points ?? 0,
      price: displayPrice,
      image: p.imageCover || p.image || "",
      shortDescription: plainDesc,
      fullDescription: p.description || p.fullDescription || "",
      features: p.features || [],
    };
  });

  const filteredProducts = normalizedProducts.filter((product) => {
    const matchesCategory = selectedCategory === "الكل" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate default pagination state if not provided
  const activePagination: PaginationInfo = pagination || {
    currentPage: currentPage,
    limit: 10,
    totalPages: Math.ceil(filteredProducts.length / 10) || 1,
    results: filteredProducts.length,
    total: filteredProducts.length,
  };

  return (
    <div className="min-h-screen bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            <Coins className="size-4 text-amber-500 animate-bounce" />
            متجر المكافآت والمنتجات
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            استبدل <span className="text-primary dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)] dark:bg-clip-text dark:text-transparent">نقاطك بمكافآت</span> مذهلة
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            اجتهد في كورساتك، أنجز المهام والتحديات البرمجية، واجمع النقاط لشراء أحدث المنتجات وأكسسوارات البرمجة مجاناً!
          </p>
        </div>

        {/* Required Purchase Banner Notice */}
        <div className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-2xl border border-primary/20 bg-linear-to-r from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 shadow-sm backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <Info className="size-6" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <CreditCard className="size-4 text-emerald-500" />
                إمكانية الشراء النقدي أو بالنقاط
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                يمكنك الحصول على أي منتج باستبدال نقاطك التي جمعتها أثناء الدراسة في الكورس.{" "}
                <span className="font-bold text-foreground underline decoration-primary decoration-2 underline-offset-4">
                  وإذا لم تكن تمتلك نقاطاً كافية، يمكنك أيضاً شراء المنتجات مباشرة بسعره النقدي (دفع فلوس) عبر التواصل معنا!
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Categories Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)]"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-xl border border-border bg-secondary/40 pr-10 pl-4 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Products Grid View */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Component */}
            {activePagination && (
              <div className="mt-12 border-t border-border/40 pt-8">
                <Pagination
                  pagination={activePagination}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            )}
          </>
        ) : (
          <div className="my-16 flex flex-col items-center justify-center text-center space-y-3">
            <Sparkles className="size-12 text-muted-foreground/50" />
            <h3 className="text-xl font-bold text-foreground">لم يتم العثور على منتجات</h3>
            <p className="text-sm text-muted-foreground">جرب البحث بكلمة أخرى أو تصفية فئة مختلفة.</p>
          </div>
        )}
      </div>
    </div>
  );
}
