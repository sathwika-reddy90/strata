import SEO from "@/components/SEO";
import Button from "@/components/Button";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="flex min-h-[70vh] items-center justify-center py-24">
        <div className="container-edge text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="text-4xl text-ink sm:text-5xl">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-md text-charcoal-light">
            The page you're looking for may have moved. Let's get you back on track.
          </p>
          <div className="mt-8">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </section>
    </>
  );
}
