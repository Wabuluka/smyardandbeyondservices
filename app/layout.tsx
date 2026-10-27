import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { business } from "@/lib/data";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import CookieConsent from "@/components/CookieConsent";
import PromoPopup from "@/components/PromoPopup";
import { pageMetadata } from "@/lib/seo";

/** Website-to-mailbox visitor tracking container. */
const GTM_ID = "GTM-NGQ3R2CM";

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  other: {
    "color-scheme": "light dark",
  },
  ...pageMetadata({
    title: `${business.name} | Lawn Care & Landscaping, Merrimack Valley`,
    description:
      "Lawn care, mowing, landscaping, mulch, hedge trimming, yard clean-ups and snow plowing across the Merrimack Valley — run year-round by Timothy and Elijah.",
    path: "/",
  }),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      style={{ colorScheme: "light dark" }}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col bg-khaki text-ink">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LocalBusinessSchema />
        {children}
        <PromoPopup />
        <CookieConsent />
      </body>
    </html>
  );
}
