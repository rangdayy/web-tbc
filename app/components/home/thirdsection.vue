<script setup lang="ts">
import { motion } from "motion-v";
import { RadioGroup } from "../ui/radio-group";
import RadioGroupItem from "../ui/radio-group/RadioGroupItem.vue";
import { toast } from "vue-sonner";

const pertanyaanTBC = ref<Array<any>>([
  {
    nomor: 1,
    pertanyaan: "Apakah Anda mengalami batuk lebih dari dua minggu?",
    jawaban: null,
  },
  {
    nomor: 2,
    pertanyaan: "Apakah Anda mengalami batuk tanpa melihat dari durasi (14 hari)?",
    jawaban: null,
  },
  {
    nomor: 3,
    pertanyaan: "Apakah Anda mengalami pembesaran kelenjar getah bening di leher atau di ketiak?",
    jawaban: null,
  },
  {
    nomor: 4,
    pertanyaan: "Apakah ada yang mengalami/sedang minum OAT di dalam satu rumah?",
    jawaban: null,
  },
  {
    nomor: 5,
    pertanyaan: "Apakah Anda mengalami demam hilang timbul tanpa penyebab jelas?",
    jawaban: null,
  },
  {
    nomor: 6,
    pertanyaan: "Apakah Anda mengalami keringat di malam hari tanpa kegiatan?",
    jawaban: null,
  },
  {
    nomor: 7,
    pertanyaan: "Apakah Anda mengalami berat badan turun tanpa penyebab yang jelas/nafsu makan turun?",
    jawaban: null,
  },
  {
    nomor: 8,
    pertanyaan: "Apakah Anda mengalami sesak napas tanpa nyeri dada?",
    jawaban: null,
  },
]);

const diagnosaTBC = () => {
  //if ada null
  const ifnull = pertanyaanTBC.value.filter((j) => j.jawaban === null);
  if (ifnull.length > 0) {
    toast.error("Tidak ada jawaban yang dipilih", {
      description: "Anda harus mengisi jawaban untuk setiap pertanyaan.",
    });
    return;
  }

  // hitung jumlah jawaban "ya"
  const jumlahYa = pertanyaanTBC.value.filter((j) => j.jawaban === "ya").length;

  if (jumlahYa >= 2) {
    toast.error("Suspek TBC", {
      description: "Anda memiliki beberapa gejala yang mengarah ke TBC. Disarankan segera melakukan pemeriksaan ke fasilitas kesehatan.",
    });
    return;
  }

  if (jumlahYa === 1) {
    toast.warning("Perlu Pemantauan", {
      description: "Anda memiliki satu gejala yang perlu diperhatikan. Jika berlanjut, segera periksa ke fasilitas kesehatan.",
    });
    return;
  }

  toast.success("Risiko Rendah", {
    description: "Tidak ditemukan gejala yang mengarah ke TBC. Tetap jaga kesehatan.",
  });
};
</script>

<template>
  <div id="faq" class="py-20 px-5 space-y-15">
    <div class="max-w-7xl mx-auto p-5 md:p-10 bg-cyan-700 rounded-xl md:rounded-4xl">
      <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-4xl text-2xl font-bold text-white mx-auto mb-4">Skrining Gejala TBC</motion.h1>
      <motion.p :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="italic text-white">Skrining ini bukan diagnosa. Jika hasil skrining, berisiko, segera perika di fasilitas kesehatan terdekat!</motion.p>
    </div>

    <div class="max-w-7xl mx-auto">
      <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-4xl text-2xl font-bold text-cyan-700 mx-auto mb-4">Apakah Anda Mengalami Gejala TBC?</motion.h1>
      <motion.p :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="text-cyan-700"> Centang Jawab <b>Ya</b> atau <b>Tidak</b> untuk setiap pertanyaan di bawah ini: </motion.p>
      <motion.div :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" div class="mt-4">
        <div v-for="value in pertanyaanTBC" class="p-4 rounded-md flex justify-between flex-wrap items-center gap-4" :key="value.nomor">
          <div class="flex gap-2 items-center">
            <div class="size-10 shrink-0 rounded-full bg-cyan-700 text-white relative">
              <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white">{{ value.nomor }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-sm text-cyan-700">{{ value.pertanyaan }}</span>
            </div>
          </div>
          <RadioGroup v-model="value.jawaban" class="flex gap-2">
            <div class="flex items-center space-x-2">
              <RadioGroupItem :id="`pertanyaan${value.nomor}ya`" value="ya" />
              <Label :for="`pertanyaan${value.nomor}ya`">Ya</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem :id="`pertanyaan${value.nomor}tidak`" value="tidak" />
              <Label :for="`pertanyaan${value.nomor}tidak`">Tidak</Label>
            </div>
          </RadioGroup>
        </div>
      </motion.div>
      <motion.div class="mt-4 text-center" :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }">
        <Button class="bg-cyan-700 mx-auto" @click="diagnosaTBC"> Lanjutkan</Button>
      </motion.div>
    </div>
  </div>
</template>
