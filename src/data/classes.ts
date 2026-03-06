export type ClassType = {
  title: string;
  semester: string;
  contract: string;
  materials: {
    week: number;
    title: string;
    file: string;
    url: string;
    showing: boolean;
  }[];
};

export const classes: Record<string, ClassType> = {
  "media-24-pe-genap": {
    title: "Media Pembelajaran",
    semester: "Semester Genap - 24PE",
    contract: `
1. Kehadiran 25%
2. Tugas 25%
3. UTS 25%
4. UAS 25%
    `,
    materials: [
      {
        week: 1,
        title: "Perkenalan dan Kontrak Kuliah",
        file: "",
        url: "",
        showing: true,
      },
      {
        week: 2,
        title: "Pengantar Media Pembelajaran",
        file: "/files/media-pembelajaran/2-pengantar-media-pembelajaran.pptx",
        url: "",
        showing: false,
      },
    ],
  },
};
