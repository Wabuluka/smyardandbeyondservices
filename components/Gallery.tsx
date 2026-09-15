import Image from "next/image";

type Photo = { src: string; alt: string; wide?: boolean };

const groups: { label: string; photos: Photo[] }[] = [
  {
    label: "The crew",
    photos: [
      {
        src: "/gallery/team-services-list.jpg",
        alt: "Elijah and Timothy, the SM Yard and Beyond crew, at their equipment trailer",
        wide: true,
      },
      { src: "/gallery/team-unload.jpg", alt: "The crew unloading a mower from the trailer" },
    ],
  },
  {
    label: "Mowing",
    photos: [
      { src: "/gallery/mowing-mulcher.jpg", alt: "Mowing with a stand-on mower and mulch bagger" },
      { src: "/gallery/mowing-street.jpg", alt: "Mowing a front yard along the street" },
      { src: "/gallery/mowing-shed.jpg", alt: "Mowing a backyard beside a storage shed" },
      { src: "/gallery/finished-lawn.jpg", alt: "A freshly cut lawn with clean mowing stripes", wide: true },
    ],
  },
  {
    label: "Trimming & cleanup",
    photos: [
      { src: "/gallery/hedge-trimming.jpg", alt: "Trimming hedges along a fence line" },
      { src: "/gallery/hydrangea-trim.jpg", alt: "String-trimming around blooming hydrangeas" },
      { src: "/gallery/blower-truck.jpg", alt: "Clearing clippings with a backpack blower" },
    ],
  },
  {
    label: "Equipment & setup",
    photos: [
      { src: "/gallery/loading-mower.jpg", alt: "Loading a stand-on mower onto the trailer", wide: true },
    ],
  },
];

export default function Gallery() {
  return (
    <section className="border-b border-primary/15 bg-base-100">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Recent work
        </h2>
        <p className="mt-3 max-w-2xl text-neutral">
          A look at Elijah and Timothy out on the job — mowing, trimming, and keeping
          properties looking sharp all season.
        </p>

        <div className="mt-10 space-y-12">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary/70">
                {group.label}
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.photos.map((photo) => (
                  <div
                    key={photo.src}
                    className={`relative aspect-square overflow-hidden rounded-box border border-primary/15 shadow-[4px_4px_0_0_var(--color-lime)] transition-transform hover:-translate-y-0.5 ${
                      photo.wide ? "col-span-2 aspect-[2/1] sm:aspect-[2/1]" : ""
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 640px) 360px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
