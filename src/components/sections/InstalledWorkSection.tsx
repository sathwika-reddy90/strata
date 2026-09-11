import SectionHeading from "../SectionHeading";
import Gallery from "../Gallery";
import Button from "../Button";
import Reveal from "../Reveal";
import { projects } from "@/data/projects";

export default function InstalledWorkSection() {
  const items = projects.slice(0, 6).map((p) => ({
    id: p.id,
    image: p.image,
    title: p.name,
    category: p.category,
  }));

  return (
    <section className="bg-stone-100 py-24 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Installed Work"
          title="Real Spaces. Real Materials."
          description="A look inside the homes, hotels and workplaces we've helped bring to life."
          align="center"
        />
        <div className="mt-16">
          <Gallery items={items} />
        </div>
        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
