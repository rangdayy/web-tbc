<template>
  <div>
    <Navbar />
    <Firstsection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Firstsection from "~/components/home/firstsection.vue";
import Footer from "~/components/nav/Footer.vue";
import Navbar from "~/components/nav/Navbar.vue";

definePageMeta({
  layout: "default",
});
</script>
