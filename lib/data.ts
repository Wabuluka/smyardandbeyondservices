import promotionsData from "@/data/promotions.json";

export const business = {
  name: "SM Yard and Beyond",
  legalName: "SM Yard & Beyond Services",
  owners: ["Timothy", "Elijah"],
  phone: "978-715-7481",
  phoneHref: "tel:+19787157481",
  email: "smyardandbeyondservices@gmail.com",
  domain: "smyardservices.com",
  url: "https://smyardservices.com",
};

export type Season = "Spring" | "Summer" | "Fall" | "Winter" | "Spring–Fall";

export type Service = {
  name: string;
  slug: string;
  description: string;
  season: Season;
};

export const services: Service[] = [
  {
    name: "Landscaping",
    slug: "landscaping",
    description: "Beds, borders, and plantings designed and installed to hold up season after season.",
    season: "Spring–Fall",
  },
  {
    name: "Lawn Maintenance",
    slug: "lawn-maintenance",
    description: "Regular mowing, edging, and upkeep so your lawn looks cared for every week.",
    season: "Spring–Fall",
  },
  {
    name: "Mulch Installation",
    slug: "mulch-installation",
    description: "Fresh mulch laid down clean, holding moisture and keeping weeds out.",
    season: "Spring",
  },
  {
    name: "Hedge Trimming",
    slug: "hedge-trimming",
    description: "Hedges and shrubs shaped and kept tidy through the growing season.",
    season: "Spring–Fall",
  },
  {
    name: "Spring Clean-Up",
    slug: "spring-clean-up",
    description: "Beds cleared, debris hauled, and your yard reset after winter.",
    season: "Spring",
  },
  {
    name: "Fall Clean-Up",
    slug: "fall-clean-up",
    description:
      "We clear the leaves, clean up the beds, remove seasonal debris, and leave your property ready for winter. Curbside leaf cleanups available.",
    season: "Fall",
  },
  {
    name: "Lawn Repairs",
    slug: "lawn-repairs",
    description: "Bare patches, ruts, and worn spots fixed and reseeded.",
    season: "Spring–Fall",
  },
  {
    name: "Snow Removal",
    slug: "snow-removal",
    description: "Driveways and walkways cleared through the winter, storm after storm.",
    season: "Winter",
  },
];

export type Town = {
  slug: string;
  name: string;
  state: "MA" | "NH";
  /** Villages / neighborhoods we cover — shown on the town page. */
  areas: string[];
  /** Town-specific paragraph about local yards and conditions. */
  local: string;
  /** Slugs of neighboring towns, for the "Also nearby" links. */
  nearby: string[];
};

export const towns: Town[] = [
  {
    slug: "westford",
    name: "Westford",
    state: "MA",
    areas: ["Westford Center", "Graniteville", "Forge Village", "Nabnasset", "Parker Village"],
    local:
      "Westford yards tend to be big, wooded, and rocky — this is old granite-quarry country, and the glacial soil shows up as stones in every garden bed. That means mowing around ledge and tree roots, edging beds that want to wander, and a serious leaf load every fall from mature oaks and maples. Many Westford homeowners book us for a spring clean-up and mulch, regular summer mowing, and a full fall clean-up before the first snow.",
    nearby: ["chelmsford", "littleton", "tyngsboro", "acton"],
  },
  {
    slug: "nashua",
    name: "Nashua",
    state: "NH",
    areas: ["North End", "French Hill", "Crown Hill", "South Nashua", "the Tree Streets"],
    local:
      "Nashua mixes older in-town lots near downtown and the Merrimack with larger suburban yards out in South Nashua and the North End. In-town properties usually need tight, careful work — trimming hedges along property lines, keeping small lawns sharp, and clearing narrow driveways after a storm. Southern New Hampshire winters run a little colder and snowier than the Massachusetts side, so snow removal is a big part of what we do here.",
    nearby: ["tyngsboro", "westford", "chelmsford"],
  },
  {
    slug: "lowell",
    name: "Lowell",
    state: "MA",
    areas: ["Belvidere", "Highlands", "Pawtucketville", "Centralville", "Back Central", "South Lowell"],
    local:
      "Lowell yards are usually smaller city lots, often with fences, hedges, and not much room to maneuver. We bring equipment that fits — trimming hedges and shrubs that border the sidewalk, keeping compact lawns mowed and edged, and refreshing beds with mulch. In winter, Lowell's on-street parking rules and short driveways make prompt snow clearing matter, and we keep walkways and driveways open through each storm.",
    nearby: ["chelmsford", "dracut", "tewksbury", "billerica"],
  },
  {
    slug: "chelmsford",
    name: "Chelmsford",
    state: "MA",
    areas: ["Chelmsford Center", "North Chelmsford", "South Chelmsford", "East Chelmsford", "West Chelmsford"],
    local:
      "Chelmsford sits where Route 3 and I-495 meet, and its neighborhoods are mostly established suburban lots with mature trees and well-used lawns. That makes it prime territory for weekly lawn maintenance, hedge trimming, and repairing worn or bare patches from kids, pets, and summer heat. Come October, those mature trees mean heavy leaf clean-ups — we can do a full property clean-up or a curbside leaf clean-up.",
    nearby: ["westford", "lowell", "billerica", "tyngsboro"],
  },
  {
    slug: "billerica",
    name: "Billerica",
    state: "MA",
    areas: ["Billerica Center", "North Billerica", "East Billerica", "Pinehurst", "Nutting Lake"],
    local:
      "Billerica covers a lot of ground between the Concord and Shawsheen rivers, from neighborhoods around Nutting Lake to the pine-shaded streets of Pinehurst. Pine needles and shade make lawns thin out, so lawn repairs and reseeding are common requests here, along with mulch and bed clean-ups. We handle regular mowing through the season and plowing and walkway clearing in winter.",
    nearby: ["chelmsford", "tewksbury", "lowell"],
  },
  {
    slug: "tewksbury",
    name: "Tewksbury",
    state: "MA",
    areas: ["Tewksbury Center", "North Tewksbury", "neighborhoods along the Shawsheen River"],
    local:
      "Tewksbury is a mostly residential town of mid-size suburban lots, with plenty of lawn to keep up and shrubs that need shaping a couple of times a season. Homeowners here often want a dependable weekly mowing schedule plus seasonal extras — spring clean-up and mulch, hedge trimming in early summer, and a fall clean-up. When winter comes we keep driveways and walkways cleared storm after storm.",
    nearby: ["billerica", "lowell", "chelmsford"],
  },
  {
    slug: "littleton",
    name: "Littleton",
    state: "MA",
    areas: ["Littleton Common", "the Long Lake area", "neighborhoods off King Street and Route 2A"],
    local:
      "Littleton is quieter and more rural than its neighbors, with larger lots, rolling ground, and plenty of woodland edges. Bigger properties mean more mowing time, more beds to mulch, and woods that drop a lot of leaves and branches onto lawns each fall. We help Littleton homeowners stay on top of it all season — and keep long driveways plowed in the winter.",
    nearby: ["westford", "acton", "ayer"],
  },
  {
    slug: "ayer",
    name: "Ayer",
    state: "MA",
    areas: ["Downtown Ayer", "Sandy Pond", "neighborhoods near Devens"],
    local:
      "Ayer is a compact town next to Devens, with a mix of in-town lots near the downtown and larger properties around the ponds. Much of the ground here is sandy and drains fast, so lawns can brown out in a dry summer — regular mowing at the right height, plus repairs and reseeding in spring or fall, keeps them healthy. We also handle mulch, hedge trimming, clean-ups, and winter snow removal.",
    nearby: ["littleton", "westford"],
  },
  {
    slug: "tyngsboro",
    name: "Tyngsboro",
    state: "MA",
    areas: ["Tyngsboro Center", "Lake Mascuppic", "neighborhoods on both sides of the Merrimack"],
    local:
      "Tyngsboro straddles the Merrimack River right at the New Hampshire line, with wooded lots, waterfront homes, and newer neighborhoods off Route 3. Wooded properties mean steady leaf and branch clean-up, while lake and riverfront yards need beds and slopes kept tidy. We cover both sides of the river for mowing, clean-ups, mulch, hedge trimming, and snow removal.",
    nearby: ["westford", "chelmsford", "dracut", "nashua"],
  },
  {
    slug: "dracut",
    name: "Dracut",
    state: "MA",
    areas: ["Collinsville", "Navy Yard", "Kenwood", "Lake Mascuppic", "Dracut Center"],
    local:
      "Dracut still has a lot of open, farm-country land north of Lowell, so lots tend to be generous and lawns get plenty of sun. Large, sunny lawns grow fast in early summer and need a consistent mowing schedule, and open properties catch blowing leaves from every direction in the fall. We keep Dracut yards mowed, trimmed, and cleaned up, then plow driveways once winter arrives.",
    nearby: ["lowell", "tyngsboro", "chelmsford"],
  },
  {
    slug: "acton",
    name: "Acton",
    state: "MA",
    areas: ["South Acton", "West Acton", "North Acton", "East Acton"],
    local:
      "Acton's village neighborhoods are full of older homes with mature trees, established gardens, and well-kept landscaping that homeowners want to stay that way. That means careful hedge and shrub trimming, clean bed edges and fresh mulch, and big fall clean-ups when the canopy comes down. We handle regular lawn maintenance through the season and snow removal in winter.",
    nearby: ["westford", "littleton", "chelmsford"],
  },
];

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}

export function nearbyTowns(slug: string): Town[] {
  const town = getTown(slug);
  if (!town) return [];
  return town.nearby.map(getTown).filter((t): t is Town => t !== undefined);
}

export const seasons = [
  {
    name: "Spring",
    blurb:
      "Clean-up season. We clear winter debris, edge beds, lay fresh mulch, and get lawns growing right from the start.",
    services: ["Spring Clean-Up", "Mulch Installation", "Lawn Repairs", "Landscaping"],
  },
  {
    name: "Summer",
    blurb:
      "Steady upkeep. Mowing, trimming, and maintenance visits keep everything looking sharp through the heat.",
    services: ["Lawn Maintenance", "Hedge Trimming", "Landscaping"],
  },
  {
    name: "Fall",
    blurb:
      "Leaves come down, beds get cleared, and we prep your yard so it goes into winter in good shape.",
    services: ["Fall Clean-Up", "Hedge Trimming", "Lawn Repairs"],
  },
  {
    name: "Winter",
    blurb:
      "Most crews go quiet. We don't. Snow removal keeps your driveway and walkways clear all season.",
    services: ["Snow Removal"],
  },
];

export type Promotion = {
  id: string;
  title: string;
  detail: string;
  cta?: { label: string; href: string };
  /** ISO dates (inclusive start, inclusive end). Omit to always show. */
  starts?: string;
  ends?: string;
};

// Seasonal prices / promotions — edit data/promotions.json to change what pops up on the site.
export const promotions: Promotion[] = promotionsData.promotions as Promotion[];

export function activePromotions(now: Date = new Date()): Promotion[] {
  const today = now.toISOString().slice(0, 10);
  return promotions.filter((p) => {
    if (p.starts && today < p.starts) return false;
    if (p.ends && today > p.ends) return false;
    return true;
  });
}
