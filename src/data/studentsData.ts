import abiWaqqashImg from '@/assets/students/abi-waqqash.jpg';
import miftaImg from '@/assets/students/mifta.jpg';
import adindaNabilaImg from '@/assets/students/adinda-nabila.jpg';
import naufalImg from '@/assets/students/naufal.jpg';
import aisyahSafaImg from '@/assets/students/aisyah-safa.jpg';
import akbarImg from '@/assets/students/akbar.jpg';
import anisaAsaputriImg from '@/assets/students/anisa-asaputri.jpg';
import audyImg from '@/assets/students/audy-valencia.jpg';
import auliaPutriImg from '@/assets/students/aulia-putri.jpg';
import bintangImg from '@/assets/students/bintang.jpg';
import esyaGalihImg from '@/assets/students/esya-galih.jpg';
import fadhilImg from '@/assets/students/fadhil.jpg';
import galihAjengImg from '@/assets/students/galih-ajeng.jpg';
import gendisDivaImg from '@/assets/students/gendis-diva.jpg';
import gendisGadisImg from '@/assets/students/gendis-gadis.jpg';
import nanaImg from '@/assets/students/nana.jpg';
import izzaNurImg from '@/assets/students/izza.jpg';
import rainerImg from '@/assets/students/rainer.jpg';
import kakaSatriaImg from '@/assets/students/kaka-satria.jpg';
import kenImg from '@/assets/students/ken.jpg';
import raihanImg from '@/assets/students/raihan.jpg';
import fafaImg from '@/assets/students/fafa.jpg';
import irgyImg from '@/assets/students/irgy.jpg';
import shulthanImg from '@/assets/students/shulthan.jpg';
import navissaNaoraImg from '@/assets/students/navissa-naora.jpg';
import navisyaSalfaImg from '@/assets/students/navisya-salfa.jpg';
import nesyaPutriImg from '@/assets/students/nesya.jpg';
import khojiImg from '@/assets/students/ramadhani-hakhimah.jpg';
import salmaDinahImg from '@/assets/students/salma-dinah.jpg';
import morenoImg from '@/assets/students/moreno.jpg';
import serliImg from '@/assets/students/serli.jpg';
import widiImg from '@/assets/students/widi.jpg';
import yesicaImg from '@/assets/students/yesica.jpg';
import farisImg from '@/assets/students/faris.jpg';

export interface Student {
  name: string;
  noAbsen: number;
  image: string;
}

export const students: Student[] = [
  { name: 'Abi Waqqash', noAbsen: 1, image: abiWaqqashImg },
  { name: 'Achmad Miftakhul Haq', noAbsen: 2, image: miftaImg },
  { name: 'Adinda Nabila P.S', noAbsen: 3, image: adindaNabilaImg },
  { name: 'Ahnaf Naufal Prawira', noAbsen: 4, image: naufalImg },
  { name: 'Aisyah Safa Azahrah', noAbsen: 5, image: aisyahSafaImg },
  { name: 'Akbar Ramadhan Yasid', noAbsen: 6, image: akbarImg },
  { name: 'Anisa Asaputri W.K', noAbsen: 7, image: anisaAsaputriImg },
  { name: 'Audy Valencia', noAbsen: 8, image: audyImg },
  { name: 'Aulia Putri Maharani', noAbsen: 9, image: auliaPutriImg },
  { name: 'Bintang Sholikhul Khakim', noAbsen: 10, image: bintangImg },
  { name: 'Esya Galih Pratama', noAbsen: 11, image: esyaGalihImg },
  { name: 'Fadhil Dwi Nugroho', noAbsen: 12, image: fadhilImg },
  { name: 'Galih Ajeng Ayuningtyas', noAbsen: 13, image: galihAjengImg },
  { name: 'Gendis Diva Azuhra', noAbsen: 14, image: gendisDivaImg },
  { name: 'Gendis Gadis Galuh', noAbsen: 15, image: gendisGadisImg },
  { name: 'Indhana Zulfa', noAbsen: 16, image: nanaImg },
  { name: 'Izza Nur R.K', noAbsen: 17, image: izzaNurImg },
  { name: 'Johansyach Rainer Kusworo', noAbsen: 18, image: rainerImg },
  { name: 'Kaka Satria Pamungkas', noAbsen: 19, image: kakaSatriaImg },
  { name: 'Ken Abimanyu K', noAbsen: 20, image: kenImg },
  { name: 'Moch Raihan Fadillah', noAbsen: 21, image: raihanImg },
  { name: 'Muhammad Fafa F.F', noAbsen: 22, image: fafaImg },
  { name: 'Muhammad Irgy Farezi', noAbsen: 23, image: irgyImg },
  { name: 'Muhammad Shulthan A.G', noAbsen: 24, image: shulthanImg },
  { name: 'Navissa Naora Nadzillin', noAbsen: 25, image: navissaNaoraImg },
  { name: 'Navisya Salfa Saifunisa', noAbsen: 26, image: navisyaSalfaImg },
  { name: 'Nesya Putri Anggraini', noAbsen: 27, image: nesyaPutriImg },
  { name: 'Ramadhani Hakhimah Z.K', noAbsen: 28, image: khojiImg },
  { name: 'Salma Dinah Herfinza', noAbsen: 29, image: salmaDinahImg },
  { name: 'Satria Moreno Prasetya', noAbsen: 30, image: morenoImg },
  { name: 'Serli Aprilia Maulida', noAbsen: 31, image: serliImg },
  { name: 'Widi Heri Waluyo', noAbsen: 32, image: widiImg },
  { name: 'Yesica Gianita W.P', noAbsen: 33, image: yesicaImg },
  { name: 'Zakrianda Putra Faristo', noAbsen: 34, image: farisImg },
];
