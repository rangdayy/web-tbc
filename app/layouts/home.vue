<template>
  <main>
    <motion.div id="navbar" :initial="{ opacity: 0, y: -100 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5, ease: 'easeInOut' }" class="p-2 border-b sticky top-0 bg-white z-50 navbar">
      <nav class="flex flex-wrap justify-between gap-4 mx-auto max-w-7xl">
        <div>
          <div class="font-bold flex gap-2 items-center">
            <motion.img :while-hover="{ scale: 1.1 }" :transition="{ duration: 0.5, ease: 'easeInOut' }" src="/assets/img/tbclogo.png" class="h-12"> </motion.img>
            <motion.div class="flex flex-col text-sm leading-tight text-cyan-700">
              <span>Tuntas Lawan TBC</span>
            </motion.div>
          </div>
        </div>
        <div>
            <Button variant="outline" class="text-cyan-700" @click="toSection('','login')"><LogOut/> Logout</Button>
        </div>
      </nav>
    </motion.div>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import { LogOut } from "lucide-vue-next";
import { motion } from "motion-v";
import { useCommonStore } from "~/store/common";

const useStore = useCommonStore();
const { toSection } = useStore;
</script>
