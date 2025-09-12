import Image from "next/image";


export default function Hero() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Big left promo spanning 2 cols on desktop */}
                <div className="lg:col-span-2 card card-hover overflow-hidden">
                    <div className="relative h-[280px] sm:h-[340px] md:h-[420px]">
                        <Image
                            src="https://i.pinimg.com/1200x/64/87/72/648772ee16a95a4eff1294505f508d2e.jpg"
                            alt="WAN 2.2 promo"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/0 to-black/0 dark:from-black/70" />
                        <div className="absolute left-6 bottom-6 text-white max-w-md">
                            <p className="uppercase tracking-widest text-xs/relaxed opacity-90">New Image Model</p>
                            <h1 className="text-3xl sm:text-5xl font-bold">WAN 2.2</h1>
                            <p className="mt-2 text-sm sm:text-base opacity-90 max-w-prose">Generate complex images with exceptional prompt adherence and ultra‑realistic textures.</p>
                            <div className="mt-4 flex gap-3">
                                <button className="rounded-full bg-white/90 text-black px-4 py-2 text-sm font-medium hover:bg-white">Try WAN 2.2</button>
                                <button className="rounded-full border border-white/40 px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Right feature card */}
                <div className="card card-hover overflow-hidden relative">
                    <div className="relative h-[280px] sm:h-[340px] md:h-[420px]">
                        <Image
                            src="https://i.pinimg.com/1200x/64/87/72/648772ee16a95a4eff1294505f508d2e.jpg"
                            alt="Open source model"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute left-6 bottom-6 text-white max-w-xs">
                            <p className="uppercase tracking-widest text-xs/relaxed opacity-90">Open Source Model</p>
                            <h2 className="text-2xl sm:text-3xl font-bold">FLUX1 Krea</h2>
                            <p className="mt-2 text-sm opacity-90">Download weights, read the technical report, or generate with it in Cartolinks Studio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}