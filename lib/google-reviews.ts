// Google reviews data source.
//
// Reads the business's rating, review count, and up to 5 reviews from the
// Google Places API (New) "Place Details" endpoint. Runs server-side only —
// the API key is never sent to the browser.
//
// Setup:
//   1. In Google Cloud Console, enable the "Places API (New)" and create an
//      API key. Restrict it to that API. (Optionally add an IP restriction
//      for your server; do NOT add an HTTP-referrer restriction — this call
//      is made from the server, not the browser.)
//   2. Find this business's Place ID:
//      https://developers.google.com/maps/documentation/places/web-service/place-id
//   3. Set both values in the environment (see .env.local.example):
//        GOOGLE_PLACES_API_KEY=...
//        GOOGLE_PLACES_PLACE_ID=...
//
// Without both set, getGoogleReviews() returns null and the section falls
// back to its placeholder content.

export type GoogleReview = {
  author: string;
  authorPhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
};

export type GoogleReviewsData = {
  rating: number;
  reviewCount: number;
  googleMapsUri: string | null;
  reviews: GoogleReview[];
};

const ENDPOINT = "https://places.googleapis.com/v1/places";
const FIELDS = [
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews.rating",
  "reviews.text",
  "reviews.originalText",
  "reviews.relativePublishTimeDescription",
  "reviews.publishTime",
  "reviews.authorAttribution",
].join(",");

// Cache the response for 6 hours so we don't hit the API on every request.
const REVALIDATE_SECONDS = 60 * 60 * 6;

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    publishTime?: string;
    authorAttribution?: { displayName?: string; photoUri?: string };
  }>;
};

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;
  if (!apiKey || !placeId) return null;

  let res: Response;
  try {
    res = await fetch(`${ENDPOINT}/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": FIELDS,
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
  } catch (err) {
    console.error("[google-reviews] request failed:", err);
    return null;
  }

  if (!res.ok) {
    console.error(`[google-reviews] Places API returned ${res.status}: ${await res.text()}`);
    return null;
  }

  const data = (await res.json()) as PlacesResponse;

  const reviews: GoogleReview[] = (data.reviews ?? [])
    .map((r) => ({
      author: r.authorAttribution?.displayName?.trim() || "Google user",
      authorPhotoUrl: r.authorAttribution?.photoUri ?? null,
      rating: r.rating ?? 0,
      text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
      relativeTime: r.relativePublishTimeDescription ?? "",
      publishTime: r.publishTime ?? "",
    }))
    .filter((r) => r.text.length > 0);

  return {
    rating: data.rating ?? 0,
    reviewCount: data.userRatingCount ?? 0,
    googleMapsUri: data.googleMapsUri ?? null,
    reviews,
  };
}
