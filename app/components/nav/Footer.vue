<template>
  <motion.div
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :animate="{
      opacity: 1,
      y: 0,
    }"
    :transition="{
      duration: 0.5,
      ease: 'easeInOut',
    }"
    class="bg-white footer"
  >
    <div class="mx-auto max-w-7xl p-5">
      <div class="flex flex-wrap justify-between items-start gap-4">
        <div class="space-y-2">
          <div class="font-bold flex gap-2 items-center">
            <motion.img :while-hover="{ scale: 1.1, rotate: 20 }" :transition="{ duration: 0.5, ease: 'easeInOut' }" src="/assets/img/tbclogo.png" class="h-12"> </motion.img>
            <motion.div class="flex flex-col leading-none text-sm">
              <span>Tuntas</span>
              <span>Lawan</span>
              <span>TBC</span>
            </motion.div>
          </div>
          <div>
            <p class="text-xs max-w-xs text-stone-600 ">
              Tuberkulosis (TBC) masih menjadi salah satu penyakit menular yang banyak ditemukan di Indonesia. Meningkatkan kesadaran masyarakat sangat penting agar penularan bisa dicegah dan penderita bisa segera mendapatkan pengobatan.
            </p>
          </div>
        </div>
        <div class="flex gap-2 flex-col font-semibold text-sm">
          <a href="#" @click="toSection(menu.id)" v-for="menu in components" :key="menu.name">
            {{ menu.name }}
          </a>
        </div>
        <div class="flex gap-2 flex-col font-semibold text-sm">
          <h1>Hubungi Kami</h1>
          <p class="flex gap-2 items-center">
            <span><Mail :size="15"></Mail></span>
            <span class="font-normal">{{ contacts.email }}</span>
          </p>
          <p class="flex gap-2 items-center">
            <span><Phone :size="15"></Phone></span>
            <span class="font-normal">{{ contacts.phone }}</span>
          </p>
          <p class="flex gap-2 items-center">
            <span><MapPin :size="15"></MapPin></span>
            <span class="font-normal max-w-xs">{{ contacts.address }}</span>
          </p>
        </div>
        <div class="flex gap-2 flex-col font-semibold text-sm">
          <h1>Media Sosial</h1>
          <div class="flex flex-wrap gap-2 items-center">
            <a :href="contacts.instagram" target="_blank">
              <div v-html="siInstagram.svg" class="w-6 h-6 fill-current"></div>
            </a>
            <a :href="contacts.whatsapp" target="_blank">
              <div v-html="siWhatsapp.svg" class="w-6 h-6 fill-current"></div>
            </a>
            <a :href="contacts.facebook" target="_blank">
              <div v-html="siFacebook.svg" class="w-6 h-6 fill-current"></div>
            </a>

            <a :href="contacts.twitter" target="_blank">
              <div v-html="siX.svg" class="w-6 h-6 fill-current"></div>
            </a>
            <a :href="contacts.youtube" target="_blank">
              <div v-html="siYoutube.svg" class="w-6 h-6 fill-current"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { Mail, MapPin, Phone } from "lucide-vue-next";
import { motion } from "motion-v";
import { siFacebook, siInstagram, siWhatsapp, siX, siYoutube } from "simple-icons";
import { useCommonStore } from "~/store/common";

const useStore = useCommonStore();

const components = computed(() => useStore.components);
const { toSection } = useStore;

const contacts = {
  phone: "08123456789",
  email: "example@example.com",
  address: "Jl. No. 123, Makassar, Sulawesi Selatan",
  facebook: "https://www.facebook.com/",
  whatsapp: "https://wa.me/6285757840673",
  instagram: "https://www.instagram.com/",
  twitter: "https://www.twitter.com/",
  youtube: "https://www.youtube.com/",
};
</script>
