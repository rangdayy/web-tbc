<script setup lang="ts">
import { motion } from "motion-v";
import CountUp from "vue-countup-v3";
const animateCount = ref<boolean>(false);

const dataKejadian = [
  {
    angka: 9.6,
    suffix: "Juta",
    keterangan: "<b>World Health Organization (WHO) tahun 2020</b>, mencatat sejumlah kasus baru tuberkulosis global. ",
  },
  {
    angka: 885000,
    suffix: "Kasus",
    keterangan: "<b>Pada tahun 2024 Kemenkes</b> melaporkan jumlah kasus TBC di Indonesia",
  },
  {
    angka: 63111,
    suffix: "Kasus",
    keterangan: "<b>Jumlah kasus TBC pada anak</b> di Indonesia tercatat, tahun 2019",
  },
];
</script>

<template>
  <ClientOnly>
    <div id="seputar" class="bg-cyan-50">
      <div class="max-w-7xl mx-auto p-5 pb-20">
        <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-5xl text-2xl font-bold text-cyan-700 mx-auto min-h-screen flex flex-col text-center justify-center"><span>Kenali & Deteksi Segera Kondisi Anda </span></motion.h1>

        <div class="grid grid-cols-3 md:gap-10 gap-4">
          <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-5xl text-2xl font-bold text-cyan-700 mx-auto pt-15 text-center col-span-3">Angka Kejadian TBC</motion.h1>

          <motion.div v-for="(item, index) in dataKejadian" :key="item.keterangan" :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { delay: 0.1 * (index + 1), duration: 0.2 } }" class="bg-cyan-700 text-white rounded-sm p-8 md:p-10 col-span-3 md:col-span-1">
            <motion.div class="flex gap-2 font-bold text-3xl md:text-4xl justify-center py-4" :initial="{ opacity: 0 }" :while-in-view="{ opacity: 1, transition: { delay: 0.1 } }" @animation-start="() => (animateCount = true)">
              <count-up v-if="animateCount" :start-val="0" :end-val="item.angka" decimal="." :decimal-places="index == 0 ? 1 : 0" :duration="3" :autoplay="true"></count-up>
              <span>{{ item.suffix }}</span>
            </motion.div>
            <motion.p :initial="{ opacity: 0 }" :while-in-view="{ opacity: 1, transition: { delay: 0.2 } }" class="text-sm md:text-lg text-center" v-html="item.keterangan"></motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
