import { useEffect, useRef, useState } from "react";
import type { ICocktail } from "../types/types";
import { CocktailCard } from "./CocktailCard";
import { Loader } from "./Loader";
import { IconButton } from "./buttons/IconButton";
import { CocktailList } from "./CocktailList";
interface IInfiniteScrollProps {
  items: ICocktail[];
  batchSize?: number;
  view?: boolean;
  imgList?: boolean;
}
type ViewMode = "grid" | "list";
export const InfiniteScroll: React.FC<IInfiniteScrollProps> = ({
  items,
  batchSize = 8,
}) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(batchSize);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + batchSize, items.length));
        }
      },
      { threshold: 1.0, rootMargin: "0px" }
    );


    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [items, batchSize]);
  useEffect(() => {
    setVisibleCount(batchSize);
  }, [items, batchSize]);

  const visibleItems = items.slice(0, visibleCount);
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
    </div>
  );
};
