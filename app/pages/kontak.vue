<template>
  <ClientOnly>
    <div id="kontak" class="bg-cyan-50">
      <div class="max-w-7xl mx-auto p-5 min-h-80 flex flex-col text-center justify-center">
        <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-5xl text-2xl font-bold text-cyan-700"><span>Hubungi Kami</span></motion.h1>
        <motion.p :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="text-cyan-700 mt-2">Perlu bantuan? Jangan ragu untuk menghubungi kami</motion.p>
      </div>
    </div>
    <div>
      <div class="max-w-7xl mx-auto p-5 md:p-10">
        <div class="space-y-4">
          <div class="flex gap-2">
            <span class="mt-1 text-cyan-700"><Mail :size="20"></Mail></span>
            <div>
              <p class="font-semibold text-cyan-700">Email</p>
              <p class="font-normal">{{ contacts.email }}</p>
            </div>
          </div>
          <div class="flex gap-2">
            <span class="mt-1 text-cyan-700"><Phone :size="20"></Phone></span>
            <div>
              <p class="font-semibold text-cyan-700">Telepon</p>
              <p class="font-normal">{{ contacts.phone }}</p>
            </div>
          </div>
          <div class="flex gap-2">
            <span class="mt-1 text-cyan-700"><MapPin :size="20"></MapPin></span>
            <div>
              <p class="font-semibold text-cyan-700">Alamat</p>
              <p class="font-normal max-w-xs">{{ contacts.address }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Mail, MapPin, Phone } from "lucide-vue-next";
import { motion } from "motion-v";
import { useCommonStore } from "~/store/common";

definePageMeta({
  layout: "default",
});

const useStore = useCommonStore();
const { contacts } = useStore;
</script>
