import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/data/projects";
import { img } from "@/data/images";

export default function PortfolioPage() {
  return (
    <>
      <SEO
        title="Our Work"
        description="A portfolio of residential, commercial, hospitality, kitchen, bathroom and exterior projects finished with Strata granite, tile and quartz."
      />
      <PageHero
        eyebrow="Portfolio"
        title="Our Work"
        description="Selected projects where our granite, tile and quartz surfaces have come to life."
        image={img.hotelLobbyMarble}
      />

      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Selected Projects" title="Recent Work" />
          <div className="mt-16 space-y-24">
            {projects.map((project, i) => (
              <PortfolioCard key={project.id} project={project} index={i} reversed={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
