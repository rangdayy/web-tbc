<template>
  <div id="beranda">
    <div class="max-w-7xl mx-auto min-h-screen text-cyan-700 p-5 flex justify-between flex-wrap">
      <div class="max-w-md space-y-3 md:space-y-5 md:pt-40 pt-10">
        <motion.div 
          :initial="{ opacity: 0, x : -50 }"
          :while-in-view="{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 } }"
        class="md:text-5xl text-2xl font-bold">
          <h1>Ayo Cegah</h1>
          <h1>Penularan TBC!</h1>
        </motion.div>
        <motion.div
          :initial="{ opacity: 0, x: -50 }"
          :while-in-view="{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } }"
        >
          <p class="md:text-xl"><span class="font-bold">Tuntas Lawan TBC</span> dengan cegah penularan, patuhi pengobatan, dan raih sehat sepenuhnya.</p>
        </motion.div>
        <motion.span 
          :initial="{ opacity: 0 }"
          :while-in-view="{ opacity: 1, transition: { delay: 0.5 } }"
        >
        <Button variant="outline" class="border-cyan-700 text-cyan-700 hover:text-cyan-700" @click="toSection('poster')">Klik Disini</Button>
     </motion.span>
      </div>
      <div class="max-w-xl md:py-20">
        <div class="rounded-t-full bg-radial-[at_30%_75%] from-cyan-100 via-cyan-50 to-white to-80% relative">
          <motion.img :initial="{ opacity: 0, scale: 0.9 }" :while-in-view="{ opacity: 1, scale: 1, transition: { duration: 0.5 } }" src="/assets/img/coughing.png" class="w-full" />
          <motion.span :initial="{ opacity: 0 }" :while-in-view="{ opacity: 1, transition: { delay: 0.1 } }" class="absolute bottom-20 md:left-4 right-2 text-cyan-700"><ShieldPlus /></motion.span>
          <motion.span :initial="{ opacity: 0 }" :while-in-view="{ opacity: 1, transition: { delay: 0.3 } }" class="absolute bottom-10 md:left-4 right-2 text-cyan-700">
            <Stethoscope />
          </motion.span>
          <motion.span :initial="{ opacity: 0 }" :while-in-view="{ opacity: 1, transition: { delay: 0.5 } }" class="absolute bottom-2 md:left-4 right-2 text-cyan-700">
            <Pill />
          </motion.span>
        </div>
      </div>
    </div>
    <div id="poster" class="bg-cyan-700">
      <div class="max-w-7xl mx-auto p-5">
        <motion.h1
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0, transition: {  duration: 0.3 } }"
        class="md:text-5xl text-2xl font-bold text-white mx-auto md:pt-20 pt-15 text-center">Pelajari Aku</motion.h1>
        <motion.img 
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.3 } }"
        src="/assets/img/infografis.jpg" class="mx-auto md:py-10 text-center py-10 md:pb-20" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pill, ShieldPlus, Stethoscope } from "lucide-vue-next";
import { motion } from "motion-v";

const toSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
