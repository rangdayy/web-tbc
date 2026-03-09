<template>
  <section>
    <Toaster :position="'top-center'" />
    <nuxt-layout>
      <NuxtPage />
    </nuxt-layout>
  </section>
</template>

<script setup lang="ts">
import { Toaster } from "./components/ui/sonner";
import 'vue-sonner/style.css' 
useHead({
  title: "WEB TBC - Informasi Tuberkulosis, Gejala, Pencegahan & Pengobatan",
  htmlAttrs: {
    lang: "id",
  },
  meta: [
    {
      name: "description",
      content:
        "Website edukasi tentang Tuberkulosis (TBC) yang membahas gejala, penyebab, cara penularan, pencegahan, serta pengobatan TBC untuk meningkatkan kesadaran masyarakat.",
    },
    {
      name: "keywords",
      content:
        "TBC, Tuberkulosis, TB, penyakit TBC, gejala TBC, pencegahan TBC, pengobatan TBC, penyakit paru, kesehatan paru",
    },
    { name: "author", content: "WEB TBC" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#ffffff" },

    // Open Graph (Facebook / WhatsApp)
    {
      property: "og:title",
      content: "WEB TBC - Informasi Tuberkulosis Lengkap",
    },
    {
      property: "og:description",
      content:
        "Pelajari tentang Tuberkulosis (TBC): gejala, penyebab, penularan, pencegahan, dan pengobatan untuk meningkatkan kesadaran kesehatan masyarakat.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://webtbc.com",
    },
    {
      property: "og:image",
      content: "https://webtbc.com/og-image.jpg",
    },
    {
      property: "og:locale",
      content: "id_ID",
    },
    {
      property: "og:site_name",
      content: "WEB TBC",
    },

    // Twitter Card
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "WEB TBC - Informasi Tuberkulosis",
    },
    {
      name: "twitter:description",
      content:
        "Website edukasi tentang Tuberkulosis (TBC) untuk meningkatkan kesadaran masyarakat tentang penyakit paru.",
    },
    {
      name: "twitter:image",
      content: "https://webtbc.com/og-image.jpg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://webtbc.com",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>