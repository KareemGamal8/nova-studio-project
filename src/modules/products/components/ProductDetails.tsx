"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Star, Tag, CreditCard, ShieldCheck, Truck } from "lucide-react";
import { Product, products, getProductWhatsAppUrl } from "../data/products";
import { ProductCard } from "./ProductCard";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [imgSrc, setImgSrc] = useState(product.image);
  const whatsappUrl = getProductWhatsAppUrl(product.name, product.points, product.price);

  // Suggested products excluding the current one
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || true))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background py-10 lg:py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowRight className="size-4" />
            العودة لجميع المنتجات
          </Link>
        </div>

        {/* Main Product Info Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Image Showcase Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-border bg-card shadow-lg dark:bg-[#0c0722]/60">
              <Image
                src={imgSrc}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                onError={() => setImgSrc("https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80")}
              />
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-background/90 px-4 py-1.5 text-xs font-bold text-foreground backdrop-blur-md border border-border/50 shadow-sm">
                <Tag className="size-3.5 text-primary" />
                <span>{product.category}</span>
              </div>
            </div>
          </div>

          {/* Details & Purchase Action Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold text-primary">
                <Star className="size-4 fill-amber-400 text-amber-400" />
                يتطلب {product.points.toLocaleString("ar-EG")} نقطة
              </div>

              <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground border-b border-border/40 pb-4">
                <span>سعر الشراء النقدي في حال عدم توفر نقاط:</span>
                <span className="text-lg font-bold text-foreground bg-secondary/60 px-3 py-1 rounded-lg border border-border/40">
                  {product.price}
                </span>
              </div>
            </div>

            {/* Product Descriptions */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-foreground">وصف المنتج:</h3>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {product.fullDescription}
              </p>
            </div>

            {/* Features List */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-foreground">مميزات هذا المنتج:</h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                        <Check className="size-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Purchase Options Banner */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <CreditCard className="size-4" />
                طريقة الطلب واستلام المنتج:
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                عند النقر على زر الشراء، سيتم توجيهك مباشرة لمحادثة الواتساب مع فريق الدعم لإتمام الاستبدال من رصيد نقاطك، أو إتمام الشراء بالسعر النقدي وتسليم المنتج إليك.
              </p>
            </div>

            {/* Buy Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-full sm:flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/95 hover:scale-[1.02] active:scale-95 dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)]"
              >
                <MessageCircle className="size-5" />
                شراء المنتج عبر الواتساب
              </a>
            </div>

            {/* Trust Perks */}
            <div className="grid grid-cols-2 gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                <span>ضمان جودة وتوافق للمنتجات</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="size-4 text-primary" />
                <span>شحن وتوصيل سريع للطلاب</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-border/40 pt-12">
            <h2 className="mb-8 text-2xl font-bold text-foreground">منتجات أخرى قد تعجبك:</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
