interface Link {
  name: string;
  link: string;
}

// const videos = [
//   "https://www.youtube.com/watch?v=1d577v_XBKA&list=PLpuuBLGpKPAdQyB1YITDwhAPha1wfNO48&index=28&t=414s",
//   "https://www.youtube.com/watch?v=tVynETvms-o",
//   "https://www.youtube.com/watch?v=9VVzCr3c9Jk",
//   "https://www.youtube.com/watch?v=GZQKeHnKK90",
// ];

// const sites = ["http://www.cool-site.com", "http://www.inspirational-art.com"];

// const opportunities = ["http://www.linkedin.com", "http://www.angelist.com"];

// export const resourceLists: Record<string, string[]> = {
//   Videos: videos,
//   "Sites (for drawing inspiration)": sites,
//   Opportunities: opportunities,
// };

const Videos: Link[] = [
  {
    name: "Why Color Studies Are So Powerful",
    link: "https://www.youtube.com/watch?v=1d577v_XBKA&list=PLpuuBLGpKPAdQyB1YITDwhAPha1wfNO48&index=28&t=414s",
  },
  {
    name: "Tips for Drawing Backgrounds",
    link: "https://www.youtube.com/watch?v=tVynETvms-o",
  },
  {
    name: "Composition for Noobs | Beginner Guide",
    link: "https://www.youtube.com/watch?v=9VVzCr3c9Jk",
  },
  {
    name: "ART TIPS THAT ACTUALLY MAKE YOU WORSE",
    link: "https://www.youtube.com/watch?v=GZQKeHnKK90",
  },
  {
    name: "Color theory for Noobs",
    link: "https://www.youtube.com/watch?v=AvgCkHrcj90",
  },
  {
    name: "I became a PRO artists with NO art school",
    link: "https://www.youtube.com/watch?v=zmUMhMs5vFE",
  },
  {
    name: "Composition for Noobs | Beginner Guide",
    link: "https://www.youtube.com/watch?v=9VVzCr3c9Jk",
  },
  {
    name: "5 things I wish I knew as a beginner artist",
    link: "https://www.youtube.com/watch?v=pEq6BfEY0ak",
  },
];

const Sites: Link[] = [
  { name: "Reference stock images", link: "https://www.pexels.com/" },
  {
    name: "online art gallery",
    link: "https://artsandculture.google.com/",
  },
  {
    name: "character design reference",
    link: "https://characterdesignreferences.com/",
  },
  {
    name: "art class courses",
    link: "https://www.drawmixpaint.com/",
  },
  { name: "AI Generated reference", link: "https://generated.photos/" },
  { name: "sketching practice", link: "https://quickposes.com/en" },
];

const Opportunities: Link[] = [
  {
    name: "Artist's spotlight",
    link: "https://www.jigglenjuicecollective.com/artist-spotlight/lana-duval",
  },
  {
    name: "Apprenticeship application",
    link: "https://www.bricfoundation.org/apprenticeship-application",
  },
  {
    name: "Parsons internship application",
    link: "https://www.newschool.edu/parsons/internships/",
  },
  {
    name: "Awards and competitions",
    link: "https://www.callfor.org/category/award-prize-competition/",
  },
  { name: "Art 21 non-profit organization", link: "https://art21.org/" },
  {
    name: "career help",
    link: "https://www.learnhowtobecome.org (https://www.learnhowtobecome.org/)/ (https://www.learnhowtobecome.org/)",
  },
  { name: "Women in art", link: "https://arttable.org/" },
  {
    name: "Get inspired",
    link: "https://www.archpaper.com/",
  },
  {
    name: "New York foundation for the arts",
    link: "https://www.nyfa.org/",
  },
  {
    name: "National Art education association",
    link: "https://www.arteducators.org/",
  },
  {
    name: "Social engagement",
    link: "https://www.nyc.gov/content/mfta/pages/",
  },
  {
    name: "Fellowship and grant",
    link: "https://www.collegeart.org/programs/fellowships",
  },
];

export const resourceLists: Record<string, Link[]> = {
  Videos,
  Sites,
  Opportunities,
};
