import Link from "next/link";
import BreadcrumbSchema, { type Crumb } from "@/components/BreadcrumbSchema";

/**
 * Visible breadcrumb trail plus matching BreadcrumbList structured data.
 * "Home" is prepended automatically; the last item is the current page and
 * is rendered as plain text. Styled for the dark `bg-primary` page hero.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <BreadcrumbSchema items={trail} />
      <nav aria-label="Breadcrumb" className="breadcrumbs mb-3 py-0 text-sm font-display">
        <ul>
          {trail.map((item, i) =>
            i === trail.length - 1 ? (
              <li key={item.path}>
                <span aria-current="page" className="font-semibold text-primary-content">
                  {item.name}
                </span>
              </li>
            ) : (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-primary-content/70 hover:text-primary-content"
                >
                  {item.name}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </>
  );
}
