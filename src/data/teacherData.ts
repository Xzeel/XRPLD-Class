import teacherImg from '@/assets/teacher.webp';

export interface Teacher {
  name: string;
  jabatan: string;
  motivasi: string;
  image: string;
  instagram: string;
}

export const teacher: Teacher = {
  name: 'Danang Dwi Gusti Fajar Yanto, S.Kom',
  jabatan: 'Guru Mata Pelajaran RPL',
  motivasi:
    'Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia',
  image: teacherImg,
  instagram: 'https://instagram.com/danangdwigfy',
};
