<template>
  <section>
    <Toaster />
    <nuxt-layout>
      <NuxtPage />
    </nuxt-layout>
  </section>
</template>

<script setup lang="ts">
import { Toaster } from "./components/ui/sonner";
import 'vue-sonner/style.css' 
useHead({
  title: "WEB TBC",
  meta: [
    { name: "description", content: "Website informasi tentang Tuberculosis (TBC)" },
    { name: "keywords", content: "TBC, Tuberculosis, TB, TBC, Tuberculosis, TB, TBC" },
  ],
});
</script>