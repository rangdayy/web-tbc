<template>
  <div id="beranda" class="relative ">
    <div  class="max-w-7xl mx-auto min-h-screen  text-cyan-700 p-5">
      <div class="max-w-md space-y-3 md:space-y-5 md:pt-20 pt-10">
        <div class="md:text-5xl text-2xl font-bold">
          <h1>Ayo Cegah</h1>
          <h1>Penularan TBC!</h1>
        </div>
        <div>
          <p class="md:text-xl"><span class="font-bold">Tuntas Lawan TBC</span> dengan cegah penularan, patuhi pengobatan, dan raih sehat sepenuhnya.</p>
        </div>
        <Button variant="outline" class="border-cyan-700 text-cyan-700 hover:text-cyan-700 " @click="toSection('poster')">Klik Disini</Button>
      </div>
    </div>
    <div id="poster" class="bg-cyan-700">
        <div class="max-w-7xl mx-auto p-5 ">
            <h1  class="md:text-5xl text-2xl font-bold text-white mx-auto md:pt-20 pt-15 text-center">Pelajari Aku</h1>
            <img src="/assets/img/infografis.jpg" class="mx-auto md:py-10 text-center py-10 md:pb-20">
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const toSection = (id: string) => {

  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
