// Markate hosted contact/quote widget.
//
// This embeds Markate's public widget via iframe. Its contents are served
// from markate.com and cannot be restyled from our side (cross-origin), so
// the surrounding card is styled to frame it and the height is set tall
// enough that the form doesn't scroll inside the iframe. If Markate changes
// the form's length, adjust the `min-h` / `h` values below.
//
// To use the native QuoteForm component instead (POSTs to the Markate lead
// API), swap this back for <QuoteForm /> in components/Contact.tsx.

const WIDGET_URL =
  "https://www.markate.com/public/widget/contact/page/82761/sm-yard-and-beyond-services-llc";

export default function MarkateWidget() {
  return (
    <div className="overflow-hidden rounded-box border border-primary-content/15 bg-white shadow-sm">
      <iframe
        src={WIDGET_URL}
        title="Request a quote"
        loading="lazy"
        scrolling="no"
        className="block w-full border-0 h-[1500px] sm:h-[1350px] lg:h-[1200px]"
      />
    </div>
  );
}
