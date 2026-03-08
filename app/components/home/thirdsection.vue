<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <div id="faq" class="py-20 px-5 space-y-15">
    <div class="max-w-7xl mx-auto p-5 md:p-10 bg-cyan-700 rounded-xl md:rounded-4xl">
      <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-4xl text-2xl font-bold text-white mx-auto mb-4">Skrining Gejala TBC</motion.h1>
      <motion.p :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="italic text-white">Skrining ini bukan diagnosa. Jika hasil skrining, berisiko, segera perika di fasilitas kesehatan terdekat!</motion.p>
    </div>

    <div class="max-w-7xl mx-auto">
      <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-4xl text-2xl font-bold text-cyan-700 mx-auto mb-4">Apakah Anda Mengalami Gejala TBC?</motion.h1>
      <motion.p :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="text-cyan-700"> Centang Jawab <b>Ya</b> atau <b>Tidak</b> untuk setiap pertanyaan di bawah ini: </motion.p>
    </div>
  </div>
</template>
