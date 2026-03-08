<script setup lang="ts">
import { motion } from "motion-v";
import Autoplay from 'embla-carousel-autoplay'
const videoId = "LYCFeMrP_JA";

const steps = [
  {
    step: 1,
    title: "Fase Intensif",
    description: "Pasien diberikan kombinasi isoniazid, rifampisin, pirazinamid, dan etambutol selama 2 bulan untuk menurunkan jumlah bakteri TBC dengan cepat.",
  },
  {
    step: 2,
    title: "Fase Lanjutan",
    description: "Pengobatan dilanjutkan menggunakan isoniazid dan rifampisin selama sekitar 4 bulan untuk membunuh sisa bakteri dan mencegah kekambuhan.",
  },
  {
    step: 3,
    title: "Pemantauan Minum Obat",
    description: "Pemantauan minum obat oleh tenaga kesehatan (PMO) untuk memastikan pasien minum obat secara teratur dan tidak menghentikan pengobatan sebelum waktunya.",
  },
  {
    step: 4,
    title: "Evaluasi Terapi",
    description: "Mengevaluasi perbaikan gejala, pemeriksaan dahak, dan kepatuhan minum obat melalui laporan pasien serta pemantauan digital untuk melihat keberhasilan terapi.",
  },
];
const alternatifTradisional = [
  {
    id: 1,
    title: "Jahe Merah dan Madu",
    description: "Irisan jahe merah dan madu direbus bersama air hangat untuk membantu mengurangi dahak dan sesak pada pasien.",
    image: "assets/img/jahemadu.jpeg",
  },
  {
    id: 2,
    title: "Jeruk Nipis",
    description: "Perasan jeruk nipis dimanfaatkan sebagai antibakteri, antifungal, dan antioksidan yang dapat membantu menjaga kesehatan tubuh.",
    image: "assets/img/jeruknipis.webp",
  },
  {
    id: 3,
    title: "Kunyit dan Gula Merah",
    description: "Kunyit dan gula merah membantu meningkatkan daya tahan tubuh serta meredakan gejala pada pasien TBC.",
    image: "assets/img/kunyit.jpg",
  },
  {
    id: 4,
    title: "Daun Miana",
    description: "Daun miana memiliki senyawa antibakteri yang dapat membantu meningkatkan daya tahan tubuh.",
    image: "assets/img/miana.avif",
  },
];
</script>

<template>
  <ClientOnly>
    <div>
      <div id="pengobatan" class="bg-cyan-50">
        <div class="max-w-7xl mx-auto p-5 pb-20">
          <div class="min-h-screen flex flex-col text-center justify-center md:space-y-4">
            <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-5xl text-xl font-bold text-cyan-700 mx-auto"><span>Ayo Patuhi Pengobatan TBC Segera</span></motion.h1>
            <motion.p :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="text-cyan-700 text-center md:text-lg"> Tuntas Berobat, TBC Bisa Tamat</motion.p>
          </div>
        </div>
        <div class="max-w-7xl mx-auto p-5 md:p-10 bg-cyan-700 rounded-t-xl md:rounded-4xl">
          <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-4xl text-xl font-bold text-white mx-auto mb-3 md:mb-10">Tonton videonya disini</motion.h1>
          <iframe loading="lazy" class="w-full aspect-video" :src="`https://www.youtube.com/embed/${videoId}`" allowfullscreen></iframe>
        </div>
      </div>

      <div class="max-w-7xl mx-auto p-5 mt-10">
        <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-4xl text-2xl font-bold text-cyan-700 mx-auto mb-4 text-center">Panduan Pengobatan</motion.h1>
        <div class="md:py-10">
          <Stepper orientation="vertical" class="mx-auto flex w-full flex-col max-w-2xl justify-start gap-10" :default-value="4">
            <motion.template :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }">
              <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }" disabled class="relative flex w-full items-start gap-6" :step="step.step">
                <StepperSeparator v-if="step.step !== steps[steps.length - 1]?.step" class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full !bg-cyan-700 group-data-[state=completed]:bg-primary" />
                <StepperTrigger as-child>
                  <Button size="icon" class="z-10 rounded-full shrink-0 bg-cyan-700 disabled:bg-cyan-700" :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']">
                    {{ step.step }}
                  </Button>
                </StepperTrigger>
                <div class="flex flex-col gap-1">
                  <StepperTitle class="font-semibold transition text-base md:text-base text-cyan-700">
                    {{ step.title }}
                  </StepperTitle>
                  <StepperDescription class="sr-onlys text-muted-foreground transition md:not-sr-only text-sm md:text-base">
                    {{ step.description }}
                  </StepperDescription>
                </div>
              </StepperItem>
            </motion.template>
          </Stepper>
        </div>
      </div>
      <div class="max-w-7xl mx-auto p-5 mt-10">
        <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-4xl text-2xl font-bold text-cyan-700 mx-auto mb-4 text-center">Panduan Pengobatan</motion.h1>
        <div class="md:py-10">
          <Carousel
            class="w-full max-w-2xl mx-auto"
            :opts="{ align: 'start', loop: true }"
            :plugins="[
              Autoplay({
                delay: 2000,
              }),
            ]"
          >
            <CarouselContent class="-ml-1">
              <CarouselItem v-for="item in alternatifTradisional" :key="item.id" class="pl-1 md:basis-1/2 lg:basis-1/2">
                <div class="">
                  <Card class="p-0 bg-cyan-50">
                    <CardContent class="p-0 space-y-3">
                      <img :src="item.image" :alt="item.title" class="w-full h-40 object-cover rounded-t-lg" />

                      <div class="space-y-2 px-4 pb-4">
                        <h3 class="font-semibold text-lg">
                          {{ item.title }}
                        </h3>

                        <p class="text-sm text-muted-foreground">
                          {{ item.description }}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
