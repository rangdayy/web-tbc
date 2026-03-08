<template>
  <div>
    <Navbar />
    <Firstsection />
    <Secondsection />
    <Thirdsection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Firstsection from "~/components/home/firstsection.vue";
import Secondsection from "~/components/home/secondsection.vue";
import Thirdsection from "~/components/home/thirdsection.vue";
import Footer from "~/components/nav/Footer.vue";
import Navbar from "~/components/nav/Navbar.vue";

definePageMeta({
  layout: "default",
});
</script>
