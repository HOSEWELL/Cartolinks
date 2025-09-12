import { Film, ImageIcon, Wand2, Sparkles, MoveRight, ScanSearch, Mic2, PanelsTopLeft } from "lucide-react";

const items = [
  { title: "Image", desc: "Generate images with custom styles.", icon: ImageIcon, badge: "New" },
  { title: "Video", desc: "Generate videos with Halina, Pika, Rumy, etc.", icon: Film },
  { title: "Realtime", desc: "Live AI rendering on a canvas.", icon: PanelsTopLeft },
  { title: "Enhancer", desc: "Upscale and enhance images and video.", icon: ScanSearch, badge: "New" },
  { title: "Edit", desc: "Add objects, change style, expand photos.", icon: Wand2 },
  { title: "Video LipSync", desc: "Lip-sync any video to any audio.", icon: Mic2 },
  { title: "Motion Transfer", desc: "Transfer motion to images/characters.", icon: MoveRight, badge: "New" },
  { title: "Train", desc: "Teach models to replicate styles.", icon: Sparkles },
];

export default function GenerateGrid() {
  return (
    <section id="generate" className=" mt-[20px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Generate</h3>
        <a className="text-sm text-gray-600 dark:text-gray-300 hover:underline" href="#">
          Show all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <button
            key={it.title}
            className="card card-hover text-left p-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/60"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <it.icon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                <span className="font-medium text-gray-900 dark:text-gray-100">{it.title}</span>
              </div>
              {it.badge && (
                <span className="rounded-full border border-black/10 dark:border-white/20 text-xs px-2 py-0.5 text-gray-600 dark:text-gray-300">
                  {it.badge}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {it.desc}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
