<script setup lang="ts">
import { ChevronsUpDown, MessageCircleMore } from "lucide-vue-next";
import { motion } from "motion-v";
import { toast } from "vue-sonner";

const kirimPertanyaan = () => {
  toast.success("Pertanyaan berhasil dikirim", {
    description: "Pertanyaan anda telah berhasil dikirim. Terima kasih atas pertanyaan anda!",
  });
};

const faqTBC = [
  {
    nomor: 1,
    pertanyaan: "Apa TBC bisa disembuhkan?",
    jawaban: "Ya. TBC dapat disembuhkan jika penderita menjalani pengobatan secara teratur dan tuntas sesuai anjuran tenaga kesehatan, biasanya dengan Obat Anti Tuberkulosis (OAT).",
  },
  {
    nomor: 2,
    pertanyaan: "Apa perbedaan TBC laten dan TBC aktif?",
    jawaban: "TBC laten terjadi ketika bakteri ada di tubuh tetapi tidak aktif sehingga tidak menimbulkan gejala dan tidak menular. Sedangkan TBC aktif menyebabkan gejala seperti batuk lama dan dapat menular ke orang lain.",
  },
  {
    nomor: 3,
    pertanyaan: "Apakah anak-anak bisa terkena TBC?",
    jawaban: "Ya, anak-anak dapat terkena TBC terutama jika memiliki kontak erat dengan penderita TBC aktif. Risiko lebih tinggi karena sistem imun anak masih berkembang.",
  },
  {
    nomor: 4,
    pertanyaan: "Berapa lama pengobatan TBC biasanya dilakukan?",
    jawaban: "Pengobatan TBC umumnya berlangsung sekitar 6 bulan, terdiri dari fase intensif dan fase lanjutan dengan konsumsi obat secara rutin.",
  },
  {
    nomor: 5,
    pertanyaan: "Jika sudah merasa sehat, apakah obat TBC boleh dihentikan?",
    jawaban: "Tidak boleh. Pengobatan harus diselesaikan sesuai durasi yang ditentukan agar bakteri benar-benar hilang dan tidak menjadi kebal obat.",
  },
  {
    nomor: 6,
    pertanyaan: "Kapan waktu terbaik untuk mendapatkan vaksin TBC?",
    jawaban: "Vaksin TBC (BCG) dianjurkan diberikan pada bayi segera setelah lahir atau sebelum usia 1 bulan untuk melindungi dari TBC berat.",
  },
  {
    nomor: 7,
    pertanyaan: "Kapan kita perlu melakukan tes TBC?",
    jawaban: "Tes TBC perlu dilakukan jika mengalami gejala seperti batuk lebih dari 2 minggu, demam lama, penurunan berat badan, atau memiliki kontak dengan penderita TBC.",
  },
];
</script>

<template>
  <div class="py-20 px-5 space-y-15">
    <div id="faq" class="max-w-7xl mx-auto">
      <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-4xl text-2xl font-bold text-cyan-700 mx-auto mb-4">Pertanyaan yang Sering Diajukan</motion.h1>
      <motion.p :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="text-cyan-700">Temukan jawaban atas pertanyaanmu di sini </motion.p>
      <motion.div :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" div class="mt-4">
        <Collapsible v-for="item in faqTBC" :key="item.nomor" class="border rounded-none">
          <CollapsibleTrigger as-child>
            <div class="flex items-center justify-between px-4 py-2">
              <h4 class="font-semibold">{{ item.nomor }}. {{ item.pertanyaan }}</h4>
              <Button variant="ghost" size="icon">
                <ChevronsUpDown class="size-4" />
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <motion.div :initial="{ height: 0, opacity: 0 }" :animate="{ height: 'auto', opacity: 1 }" :exit="{ height: 0, opacity: 0 }" :transition="{ duration: 0.35, ease: 'easeOut' }" class="overflow-hidden">
              <div class="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                {{ item.jawaban }}
              </div>
            </motion.div>
          </CollapsibleContent>
        </Collapsible>
      </motion.div>
    </div>
    <div class="max-w-7xl mx-auto">
      <motion.h1 :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }" class="md:text-4xl text-2xl font-bold text-cyan-700 mx-auto mb-4 text-center">Masih ada yang ingin ditanyakan?</motion.h1>

      <motion.div class="mt-4 text-center" :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.3 } }">
        <InputGroup>
          <InputGroupTextarea  placeholder="Tuliskan pertanyaan anda disini..."  class="p-4"/>
          <InputGroupAddon>
            <MessageCircleMore />
          </InputGroupAddon>
          <InputGroupButton>
            <Button class="bg-cyan-700 mx-auto" @click="kirimPertanyaan"> Kirim Pertanyaan</Button>
          </InputGroupButton>
        </InputGroup>
      </motion.div>
    </div>
  </div>
</template>
