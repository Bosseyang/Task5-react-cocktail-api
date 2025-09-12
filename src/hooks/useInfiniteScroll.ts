import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = <T>(items: T[], batchSize: number = 8) => {
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const loaderRef = useRef<HTMLDivElement | null>(null);

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

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [items, batchSize]);

  useEffect(() => {
    setVisibleCount(batchSize);
  }, [items, batchSize]);

  const visibleItems = items.slice(0, visibleCount);

  return { visibleItems, loaderRef, visibleCount };
};
