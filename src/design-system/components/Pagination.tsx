"use client";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export interface PaginationInfo {
  currentPage: number;
  limit: number;
  totalPages: number;
  results: number;
  total: number;
}

export interface PaginationProps {
  pagination: PaginationInfo;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({ pagination, onPageChange, className = "" }: PaginationProps) {
  const { currentPage, totalPages, total, results } = pagination;

  if (totalPages <= 1 && total <= 0) {
    return null;
  }

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={`flex flex-col items-center justify-between gap-4 sm:flex-row ${className}`}>
      {/* Results summary counter */}
      <div className="font-semibold text-muted-foreground">
        عرض <span className="font-bold text-foreground">{results}</span> من إجمالي{" "}
        <span className="font-bold text-foreground">{total}</span> عنصر
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5">
        {/* First Page */}
        <button
          onClick={() => handlePageClick(1)}
          disabled={currentPage <= 1}
          aria-label="الصفحة الأولى"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:bg-secondary hover:text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronsRight className="size-4" />
        </button>

        {/* Previous Page */}
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="الصفحة السابقة"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:bg-secondary hover:text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronRight className="size-4" />
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="flex h-9 w-8 items-center justify-center text-xs font-bold text-muted-foreground">
                ...
              </span>
            );
          }

          const pageNum = Number(page);
          const isActive = pageNum === currentPage;

          return (
            <button
              key={`page-${pageNum}`}
              onClick={() => handlePageClick(pageNum)}
              className={`flex h-9 min-w-9 px-3 items-center justify-center rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)]"
                  : "border border-border bg-card text-foreground hover:border-primary/50 hover:bg-secondary"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next Page */}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="الصفحة التالية"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:bg-secondary hover:text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronLeft className="size-4" />
        </button>

        {/* Last Page */}
        <button
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage >= totalPages}
          aria-label="الصفحة الأخيرة"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:bg-secondary hover:text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronsLeft className="size-4" />
        </button>
      </div>
    </div>
  );
}
