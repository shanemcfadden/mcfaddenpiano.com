export type VideoCardData = {
  title: string;
  embedLink: string;
  performers: string[];
  venue: string;
};

export const VIDEO_CARDS: VideoCardData[] = [
  {
    title: "Khachaturian Trio for Violin, Clarinet, and Piano",
    embedLink: "https://www.youtube.com/embed/8jr2z99YjmI?si=FSlzbd7JRCcefzPR",
    performers: ["Mickayla Chapman, clarinet", "Chase Ward, violin"],
    venue: "Curtiss Hall, Chicago, IL",
  },
  {
    title: '"Shadow Memory" by James Primosch',
    embedLink: "https://www.youtube.com/embed/nguxZlrHxu8?si=y3NR18HMfcsw8rmX",
    performers: ["Bahareh Poureslami, soprano"],
    venue: "Zipper Hall, Los Angeles, CA",
  },
] as const;
