<template>
  <div>
    <Firstsection />
    <Secondsection />
    <Thirdsection />
    <Fourthsection />
  </div>
</template>

<script setup lang="ts">
import Firstsection from "~/components/home/firstsection.vue";
import Fourthsection from "~/components/home/fourthsection.vue";
import Secondsection from "~/components/home/secondsection.vue";
import Thirdsection from "~/components/home/thirdsection.vue";

definePageMeta({
  layout: "default",
});
</script>
