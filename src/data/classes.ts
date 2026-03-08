export type AssignmentType = {
  title: string;
  description: string;
  objective: string;
  output: string;
  topics: string;
  progress: string;
  requirements: string;
  rules: string;
};

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
    assignment?: AssignmentType;
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
        showing: true,
        assignment: {
          title: "Tugas Video Pembelajaran Ekonomi",

          description: `
Mahasiswa diminta membuat sebuah video pembelajaran
yang menjelaskan satu konsep ekonomi yang telah
ditentukan oleh dosen.

Video harus mampu menyampaikan materi ekonomi
secara jelas, menarik, dan mudah dipahami oleh siswa.
  `,

          objective: `
1. Mahasiswa mampu merancang media pembelajaran berbentuk video
2. Mahasiswa mampu menyusun materi ekonomi secara sistematis
3. Mahasiswa mampu menjelaskan materi menggunakan media video
  `,

          output: `
1. Video pembelajaran
2. Link video YouTube
3. Penjelasan singkat materi yang disampaikan
  `,

          topics: `
Kelompok 1 : Inflasi
Kelompok 2 : Permintaan dan Penawaran
Kelompok 3 : Pasar
Kelompok 4 : Produksi
Kelompok 5 : Konsumsi
Kelompok 6 : Distribusi
  `,

          progress: `
Progress yang dipresentasikan setiap minggu:

1. Analisis materi ekonomi
2. Penyusunan poin materi yang akan dijelaskan
3. Konsep video pembelajaran
4. Storyboard atau alur video
5. Draft atau potongan video
  `,

          requirements: `
1. Durasi video minimal 7 menit dan maksimal 15 menit
2. Video harus memiliki pembukaan, isi materi, dan kesimpulan
3. Video harus menggunakan narasi suara mahasiswa
4. Video harus diupload ke YouTube
  `,

          rules: `
1. Tugas dikerjakan secara kelompok
2. Setiap kelompok wajib mempresentasikan progress setiap minggu
3. Video final dikumpulkan dalam bentuk link YouTube
  `,
        },
      },
    ],
  },
};
