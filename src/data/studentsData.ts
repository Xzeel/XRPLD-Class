import abiWaqqashImg from '@/assets/students/abi.webp';
import miftaImg from '@/assets/students/mifta.webp';
import adindaNabilaImg from '@/assets/students/dinda.webp';
import naufalImg from '@/assets/students/naufal.webp';
import aisyahSafaImg from '@/assets/students/safa.webp';
import akbarImg from '@/assets/students/akbar.webp';
import anisaAsaputriImg from '@/assets/students/asa.webp';
import audyImg from '@/assets/students/cia.webp';
import auliaPutriImg from '@/assets/students/rani.webp';
import bintangImg from '@/assets/students/bintang.webp';
import esyaGalihImg from '@/assets/students/esya.webp';
import fadhilImg from '@/assets/students/fadhil.webp';
import galihAjengImg from '@/assets/students/ajeng.webp';
import gendisDivaImg from '@/assets/students/diva.webp';
import gendisGadisImg from '@/assets/students/gadis.webp';
import nanaImg from '@/assets/students/nana.webp';
import izzaNurImg from '@/assets/students/izza.webp';
import rainerImg from '@/assets/students/rainer.webp';
import kakaSatriaImg from '@/assets/students/kaka.webp';
import kenImg from '@/assets/students/ken.webp';
import raihanImg from '@/assets/students/raihan.webp';
import fafaImg from '@/assets/students/fafa.webp';
import irgyImg from '@/assets/students/irgy.webp';
import shulthanImg from '@/assets/students/shulthan.webp';
import navissaNaoraImg from '@/assets/students/navissa.webp';
import navisyaSalfaImg from '@/assets/students/navisya.webp';
import nesyaPutriImg from '@/assets/students/nesya.webp';
import khojiImg from '@/assets/students/rahma.webp';
import salmaDinahImg from '@/assets/students/salma.webp';
import morenoImg from '@/assets/students/moreno.webp';
import serliImg from '@/assets/students/serli.webp';
import widiImg from '@/assets/students/widi.webp';
import yesicaImg from '@/assets/students/yesica.webp';
import farisImg from '@/assets/students/faris.webp';

export interface Student {
  name: string;
  noAbsen: number;
  image: string;
  instagram: string;
}

export const students: Student[] = [
  { name: 'Abi Waqqash', noAbsen: 1, image: abiWaqqashImg, instagram: 'https://www.instagram.com/yoiki_4b111' },
  { name: 'Achmad Miftakhul Haq', noAbsen: 2, image: miftaImg, instagram: 'https://www.instagram.com/achmadmifta__' },
  { name: 'Adinda Nabila P.S', noAbsen: 3, image: adindaNabilaImg, instagram: 'https://www.instagram.com/0nyndaa_' },
  { name: 'Ahnaf Naufal Prawira', noAbsen: 4, image: naufalImg, instagram: 'https://www.instagram.com/rennnfl' },
  { name: 'Aisyah Safa Azahrah', noAbsen: 5, image: aisyahSafaImg, instagram: 'https://www.instagram.com/aisyhsafaa__' },
  { name: 'Akbar Ramadhan Yasid', noAbsen: 6, image: akbarImg, instagram: 'https://www.instagram.com/akbarramadhanyasid' },
  { name: 'Anisa Asaputri W.K', noAbsen: 7, image: anisaAsaputriImg, instagram: 'https://www.instagram.com/asaasax_' },
  { name: 'Audy Valencia', noAbsen: 8, image: audyImg, instagram: 'https://www.instagram.com/ccciaaw_' },
  { name: 'Aulia Putri Maharani', noAbsen: 9, image: auliaPutriImg, instagram: 'https://www.instagram.com/_rrrannzy' },
  { name: 'Bintang Sholikhul Khakim', noAbsen: 10, image: bintangImg, instagram: 'https://www.instagram.com/blackguardian.id' },
  { name: 'Esya Galih Pratama', noAbsen: 11, image: esyaGalihImg, instagram: 'https://instagram.com/' },
  { name: 'Fadhil Dwi Nugroho', noAbsen: 12, image: fadhilImg, instagram: 'https://www.instagram.com/dfadhil14' },
  { name: 'Galih Ajeng Ayuningtyas', noAbsen: 13, image: galihAjengImg, instagram: 'https://www.instagram.com/xxaj3ngqq._' },
  { name: 'Gendis Diva Azuhra', noAbsen: 14, image: gendisDivaImg, instagram: 'https://www.instagram.com/ndieessy' },
  { name: 'Gendis Gadis Galuh', noAbsen: 15, image: gendisGadisImg, instagram: 'https://www.instagram.com/louvendyc' },
  { name: 'Indhana Zulfa', noAbsen: 16, image: nanaImg, instagram: 'https://www.instagram.com/nnaalf._' },
  { name: 'Izza Nur R.K', noAbsen: 17, image: izzaNurImg, instagram: 'https://www.instagram.com/xcszaaaaaa' },
  { name: 'Johansyach Rainer Kusworo', noAbsen: 18, image: rainerImg, instagram: 'https://www.instagram.com/r0scoff' },
  { name: 'Kaka Satria Pamungkas', noAbsen: 19, image: kakaSatriaImg, instagram: 'https://www.instagram.com/_kk4kaa' },
  { name: 'Ken Abimanyu K', noAbsen: 20, image: kenImg, instagram: 'https://www.instagram.com/kennzs10' },
  { name: 'Moch Raihan Fadillah', noAbsen: 21, image: raihanImg, instagram: 'https://www.instagram.com/xzeelarcadia.id' },
  { name: 'Muhammad Fafa F.F', noAbsen: 22, image: fafaImg, instagram: 'https://instagram.com/' },
  { name: 'Muhammad Irgy Farezi', noAbsen: 23, image: irgyImg, instagram: 'https://www.instagram.com/giifareziii' },
  { name: 'Muhammad Shulthan A.G', noAbsen: 24, image: shulthanImg, instagram: 'https://instagram.com/' },
  { name: 'Navissa Naora Nadzillin', noAbsen: 25, image: navissaNaoraImg, instagram: 'https://www.instagram.com/navissa_naura' },
  { name: 'Navisya Salfa Saifunisa', noAbsen: 26, image: navisyaSalfaImg, instagram: 'https://www.instagram.com/napiezzz' },
  { name: 'Nesya Putri Anggraini', noAbsen: 27, image: nesyaPutriImg, instagram: 'https://www.instagram.com/sccnesyaaa1901' },
  { name: 'Ramadhani Hakhimah Z.K', noAbsen: 28, image: khojiImg, instagram: 'https://www.instagram.com/_zzzrhma' },
  { name: 'Salma Dinah Herfinza', noAbsen: 29, image: salmaDinahImg, instagram: 'https://www.instagram.com/caciprtmrf' },
  { name: 'Satria Moreno Prasetya', noAbsen: 30, image: morenoImg, instagram: 'https://www.instagram.com/morenrenno' },
  { name: 'Serli Aprilia Maulida', noAbsen: 31, image: serliImg, instagram: 'https://www.instagram.com/serliaaprilia_' },
  { name: 'Widi Heri Waluyo', noAbsen: 32, image: widiImg, instagram: 'https://www.instagram.com/widiheri_' },
  { name: 'Yesica Gianita W.P', noAbsen: 33, image: yesicaImg, instagram: 'https://www.instagram.com/fluebluuuu' },
  { name: 'Zakrianda Putra Faristo', noAbsen: 34, image: farisImg, instagram: 'https://www.instagram.com/zakrndp' },
];

