export default function BrandBar() {
    return (
        <div className="brandbar">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-3">
                <div className="card px-4 py-2 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Cartolinks</span>
                        <span className="opacity-70">AI</span>
                    </div>
                    <span className="opacity-70">curated by <span className="font-medium">Mobbin</span></span>
                </div>
            </div>
        </div>
    );
}