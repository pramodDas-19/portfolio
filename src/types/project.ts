export type Project = {
  slug: string;
  name: string;
  client: string;
  clientType: string;
  year: number;
  liveUrl: string;
  summary: string;
  role: string[];
  stack: string[];
  overview: string;
  problem: string;
  solution: string;
  features: { title: string; text: string }[];
  design?: { colors: string[]; fonts: string[] };
  images: { src: string; alt: string; kind: "desktop" | "mobile" | "detail" }[];
  results?: { label: string; value: string }[];
  quote?: { text: string; author: string };
  featured?: boolean;
};

export type AgencyInfo = {
  name: string;
  shortName: string;
  tagline: string;
  promise: string;
  location: string;
  phones: string[];
  emails: string[];
  founders: { name: string; role: string }[];
  specialty: string;
};

