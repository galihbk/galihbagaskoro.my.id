export type ClassType = {
  title: string;
  semester: string;
  contract: string;
  materials: {
    week: number;
    title: string;
    file: string;
    url: string;
  }[];
};

export const classes: Record<string, ClassType> = {
  "media-24-pe-genap": {
    title: "Media Pembelajaran",
    semester: "Semester Genap - 24PE",
    contract: `
1. Kehadiran 20%
2. Tugas 20%
3. UTS 30%
4. UAS 30%
    `,
    materials: [
      {
        week: 1,
        title: "Perkenalan dan Kontrak Kuliah",
        file: "",
        url: "",
      },
    ],
  },
};
