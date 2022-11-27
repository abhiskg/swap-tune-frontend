const ProductCardSkeleton = () => {
  return (
    <div className="h-full animate-pulse overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
      <div className="w-full bg-gray-300 md:h-36 lg:h-48"></div>

      <div className="bg-gray-50 p-6">
        <div className="title-font mb-2 h-4 rounded bg-gray-300"></div>
        <div className="mb-3 h-12 rounded bg-gray-300"></div>
        <div className="mb-3  h-4 w-1/4 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
