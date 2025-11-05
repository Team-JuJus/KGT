const FilterSortSkeleton = () => {
  return (
    <div className="sticky top-0 left-0 h-screen w-60 shrink-0 overflow-y-scroll p-4 max-md:hidden">
      {/* Title */}
      <div className="mb-3 h-6 w-24 animate-pulse rounded-md bg-gray-300" />

      {/* Search */}
      <div className="mb-4">
        <div className="mb-1 h-4 w-16 animate-pulse rounded-md bg-gray-300" />
        <div className="h-9 w-full animate-pulse rounded-md bg-gray-200" />
      </div>

      {/* Category */}
      <fieldset className="mb-4">
        <div className="mb-2 h-4 w-20 animate-pulse rounded-md bg-gray-300" />
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-4 w-4 animate-pulse rounded-sm bg-gray-300" />
              <div className="h-4 w-24 animate-pulse rounded-md bg-gray-200" />
            </div>
          ))}
        </div>
      </fieldset>

      {/* Company */}
      <fieldset className="mb-4">
        <div className="mb-2 h-4 w-16 animate-pulse rounded-md bg-gray-300" />
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-4 w-4 animate-pulse rounded-sm bg-gray-300" />
              <div className="h-4 w-24 animate-pulse rounded-md bg-gray-200" />
            </div>
          ))}
        </div>
      </fieldset>

      {/* Sort */}
      <div className="mb-4">
        <div className="mb-1 h-4 w-12 animate-pulse rounded-md bg-gray-300" />
        <div className="h-9 w-full animate-pulse rounded-md bg-gray-200" />
      </div>

      {/* Reset button */}
      <div className="flex gap-2">
        <div className="h-9 w-20 animate-pulse rounded-md bg-gray-300" />
      </div>
    </div>
  );
};

export default FilterSortSkeleton;
