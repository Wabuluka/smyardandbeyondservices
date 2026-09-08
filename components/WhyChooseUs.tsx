import { business, towns } from "@/lib/data";

const points = [
  {
    title: "Owner-operated, every job",
    body: `${business.owners[0]} and ${business.owners[1]} do the work themselves. No subcontractors, no rotating crew you've never met.`,
  },
  {
    title: "Year-round, not seasonal",
    body: "Spring clean-ups through summer maintenance, fall clean-ups, and snow removal all winter. We don't disappear in November.",
  },
  {
    title: "Straight pricing",
    body: "Clear written estimates, usually the same day. No pressure, no upsell, no surprise charges when the job's done.",
  },
  {
    title: "One point of contact",
    body: "The person who quotes your job is the person who shows up and the person you call when you need something.",
  },
  {
    title: "Local to the Merrimack Valley",
    body: `We cover ${towns.length} towns across Massachusetts and southern New Hampshire, and we know the properties around here.`,
  },
  {
    title: "We finish clean",
    body: "Debris hauled, walkways blown off, everything put back. We check in with you before we leave the site.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-b border-primary/15 bg-base-100">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Why homeowners hire us
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="border-l-2 border-primary pl-4">
              <h3 className="font-display text-lg font-semibold text-primary">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
