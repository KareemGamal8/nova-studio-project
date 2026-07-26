"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Star, Eye, Tag } from "lucide-react";
import { Product, getProductWhatsAppUrl } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(product.image);
  const whatsappUrl = getProductWhatsAppUrl(product.name, product.points, product.price);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:bg-[#0d0722]/60 dark:border-border/40 dark:hover:border-primary/40 dark:hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.25)]">
      {/* Product Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-secondary/50">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgSrc("https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80")}
        />

        {/* Category Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/85 px-3 py-1 text-xs font-bold text-foreground backdrop-blur-md border border-border/50 shadow-sm">
          <Tag className="size-3 text-primary" />
          <span>{product.category}</span>
        </div>

        {/* Points Tag Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-primary/90 px-3.5 py-1.5 text-xs font-extrabold text-primary-foreground backdrop-blur-md shadow-md">
          <Star className="size-3.5 fill-amber-300 text-amber-300 animate-pulse" />
          <span>{product.points.toLocaleString("ar-EG")} نقطة</span>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div>
          <h3 className="line-clamp-1 text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {product.shortDescription}
          </p>
        </div>

        {/* Cash Price Notice */}
        <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3 text-xs text-muted-foreground">
          <span>سعر الشراء النقدي:</span>
          <span className="font-bold text-foreground">{product.price}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex h-11 items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary/50 text-xs font-bold text-foreground transition-all hover:bg-secondary hover:text-primary dark:border-white/10 dark:hover:bg-white/10"
          >
            <Eye className="size-4" />
            التفاصيل
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/95 hover:shadow-lg active:scale-95 dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)]"
          >
            <MessageCircle className="size-4" />
            شراء المنتج
          </a>
        </div>
      </div>
    </div>
  );
}
