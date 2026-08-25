import Button from "../Button";
import Reveal from "../Reveal";
import { img } from "@/data/images";

export default function StyleQuizSection() {
  return (
    <section className="bg-warm-white pb-24 sm:pb-28">
      <div className="container-edge">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={img.livingRoomEclectic}
              alt="Interior styled with a distinct design direction"
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-14">
              <p className="eyebrow mb-4 text-gold-light">Not Sure Where To Start?</p>
              <h2 className="max-w-md text-balance font-barlow text-3xl font-bold leading-[1.1] tracking-tight text-warm-white sm:text-4xl">
                Find Your Style
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-[1.5] text-stone-200">
                Browse six curated design directions — from minimalist to luxury — to see which
                mood matches the space you're planning.
              </p>
              <div className="mt-8">
                <Button href="#lookbook" variant="inverse">
                  Explore Lookbook
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
