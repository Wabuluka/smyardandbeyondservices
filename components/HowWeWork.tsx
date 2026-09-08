const steps = [
  {
    n: "01",
    title: "You reach out",
    body: "Call, email, or send your project details through the contact form. Tell us what you need and when.",
  },
  {
    n: "02",
    title: "We come look",
    body: "One of the owners visits the property, walks the job with you, and answers questions on the spot.",
  },
  {
    n: "03",
    title: "You get a straight quote",
    body: "A clear written estimate — usually same day. No pressure, no upsell, no surprise line items.",
  },
  {
    n: "04",
    title: "We do the work",
    body: "The same people who quoted the job show up and finish it. We clean up and check in before we leave.",
  },
];

export default function HowWeWork() {
  return (
    <section className="border-b border-primary/15 bg-base-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          How we work
        </h2>
        <p className="mt-3 max-w-2xl text-neutral">
          Four steps, start to finish — and the same two people through all of them.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="card border-2 border-primary bg-base-100">
              <div className="card-body gap-3 p-5">
                <span className="font-mono text-sm text-secondary">{step.n}</span>
                <h3 className="card-title font-display text-lg text-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed text-neutral">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
