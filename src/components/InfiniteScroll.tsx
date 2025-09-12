import { useState } from "react";
import type { ICocktail } from "../types/types";
import { CocktailCard } from "./CocktailCard";
import { Loader } from "./Loader";
import { IconButton } from "./buttons/IconButton";
import { CocktailList } from "./CocktailList";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { useViewMode } from "../hooks/useViewMode";

interface IInfiniteScrollProps {
  items: ICocktail[];
  batchSize?: number;
}

export const InfiniteScroll: React.FC<IInfiniteScrollProps> = ({ items, batchSize = 4 }) => {
  const { visibleItems, loaderRef, visibleCount } = useInfiniteScroll(items, batchSize);
  const { viewMode, toggleView } = useViewMode("grid");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="item-container">
      <div className="view-mode-btn wrapper">
        <IconButton
          onClick={toggleView}
          icon={viewMode === "grid" ? "view_list" : "grid_view"}
          name={viewMode === "grid" ? "List View" : "Grid View"}
        />
      </div>

      {viewMode === "grid" ? (
        <div className="grid-view grid">
          {visibleItems.map((cocktail) => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} cardSize="small" />
          ))}
        </div>
      ) : (
        <CocktailList cocktails={visibleItems} />
      )}

      {visibleCount < items.length && (
        <div ref={loaderRef} className="loading-wrapper">
          <Loader loaderStyle="dots" />
          <span>Scroll to load more...</span>
        </div>
      )}
      <div className="scroll-up-btn">
        <IconButton icon="arrow_upward" onClick={scrollToTop} />
      </div>
    </div>
  );
};
