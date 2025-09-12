import { useState } from "react";

export type ViewMode = "grid" | "list";

export const useViewMode = (defaultMode: ViewMode = "grid") => {
  const [viewMode, setViewMode] = useState<ViewMode>(defaultMode);

  const toggleView = () => {
    setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { viewMode, toggleView };
};
