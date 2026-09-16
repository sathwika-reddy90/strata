import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import { projects, projectCategories } from "@/data/projects";
import { img } from "@/data/images";

export default function GalleryPage() {
  const [category, setCategory] = useState<string>("All");

  const items = useMemo(() => {
    const source = category === "All" ? projects : projects.filter((p) => p.category === category);
    return source.flatMap((p) =>
      (p.gallery ?? [p.image]).map((image, i) => ({
        id: `${p.id}-${i}`,
        image,
        title: p.name,
        category: p.category,
      })),
    );
  }, [category]);

  return (
    <>
      <SEO
        title="Gallery of Installed Work"
        description="Browse real granite, tile and quartz installations across residential, commercial, hospitality, kitchen, bathroom and exterior projects."
      />
      <PageHero
        eyebrow="Gallery"
        title="Real Spaces. Real Materials."
        description="A closer look at the homes, hotels and workplaces we've helped bring to life."
        image={img.granitePatagonia}
      />

      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <div className="flex flex-wrap gap-3">
            {["All", ...projectCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  category === cat
                    ? "bg-ink text-warm-white"
                    : "border border-stone-300 text-charcoal hover:border-clay hover:text-clay"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-12">
            <Gallery items={items} />
          </div>
        </div>
      </section>
    </>
  );
}
