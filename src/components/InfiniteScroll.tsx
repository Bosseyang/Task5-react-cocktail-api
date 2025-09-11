export const InfiniteScroll: React.FC<IInfiniteScrollProps> = ({
  items,
  batchSize = 8,
}) => {
  const [visibleCount, setVisibleCount] = useState(batchSize);
  useEffect(() => {
  }, [items, batchSize]);
  useEffect(() => {
    setVisibleCount(batchSize);
  }, [items, batchSize]);

  const visibleItems = items.slice(0, visibleCount);
  return (
    <div className="item-container">
          {visibleItems.map((cocktail) => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} cardSize="small" />
          ))}
    </div>
  );
};
