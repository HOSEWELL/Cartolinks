export default function BrandBar() {
  return (
    <div className="brandbar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-3">
        <div className="card px-4 py-2 flex flex-col sm:flex-row items-center justify-between text-sm gap-1 sm:gap-0">
          {/* Left side */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base sm:text-sm">Cartolinks</span>
            <span className="opacity-70 text-base sm:text-sm">AI</span>
          </div>

          {/* Right side */}
          <span className="opacity-70 text-center sm:text-right text-xs sm:text-sm">
            curated by <span className="font-medium">Hosewell</span>
          </span>
        </div>
      </div>
    </div>
  );
}
