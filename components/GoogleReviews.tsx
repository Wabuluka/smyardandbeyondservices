import { getGoogleReviews, type GoogleReview } from "@/lib/google-reviews";

// The section only renders once Google returns at least this many reviews.
const MIN_REVIEWS = 3;

type DisplayReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-secondary" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.77l-5.2 2.75.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default async function GoogleReviews() {
  const live = await getGoogleReviews();

  // Hide the whole section unless we have real Google data with enough reviews.
  if (!live || live.reviews.length < MIN_REVIEWS) return null;

  const { rating, reviewCount, googleMapsUri } = live;
  const reviews: DisplayReview[] = live.reviews.slice(0, 3).map(toDisplay);

  return (
    <section className="border-b border-primary/15 bg-base-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
              What homeowners say
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <Stars rating={rating} />
              <span className="font-display font-semibold text-primary">{rating.toFixed(1)}</span>
              <span className="text-sm text-neutral">
                ({reviewCount} Google review{reviewCount === 1 ? "" : "s"})
              </span>
            </div>
          </div>

          {googleMapsUri && (
            <a
              href={googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-semibold text-primary hover:underline"
            >
              See all reviews on Google →
            </a>
          )}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {reviews.map((review, i) => (
            <div key={i} className="card border border-primary/15 bg-base-100">
              <div className="card-body gap-3 p-5">
                <Stars rating={review.rating} />
                <p className="text-sm leading-relaxed text-neutral">&ldquo;{review.text}&rdquo;</p>
                <p className="font-display text-xs font-semibold text-primary">
                  {review.author} · {review.relativeTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function toDisplay(r: GoogleReview): DisplayReview {
  return {
    author: r.author,
    rating: r.rating,
    text: r.text,
    relativeTime: r.relativeTime || "recently",
  };
}
