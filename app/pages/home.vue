<template>
  <ClientOnly>
    <div class="p-5 max-w-7xl mx-auto space-y-3">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 p-4 rounded-lg bg-cyan-50 text-cyan-700 flex items-center gap-3">
          <Bell class="md:size-8" />
          <div>
            <h1 class="md:text-base text-sm font-bold">Halo, User!</h1>
            <p class="md:text-base text-sm">Jangan lupa minum obatmu hari ini!</p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-7 space-y-3">
          <Card class="p-0 shadow-none">
            <Carousel class="max-w-9/12 mx-auto" :opts="{ align: 'center' }" @init-api="onInit">
              <CarouselContent class="-ml-1">
                <CarouselItem v-for="(item, index) in items" :key="index" class="pl-1 md:basis-1/5 basis-1/3 cursor-pointer" @click="selectItem(index)">
                  <div class="flex flex-col justify-center items-center p-2 text-cyan-700 transition" :class="{ 'bg-cyan-50': activeIndex === index }">
                    <span class="text-xl font-semibold">{{ item.day }}</span>
                    <span class="text-sm font-semibold">{{ item.month }}</span>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Card>
          <Card class="shadow-none">
            <div class="text-cyan-700 px-4">
              <h1 class="text-base font-semibold mb-2">Obat yang harus diminum</h1>
              <div class="space-y-2">
                <div v-for="item in obatTBC" :key="item.nama">
                  <div class="flex justify-between items-center gap-2">
                    <div>
                      <h1 class="font-semibold">{{ item.nama }}</h1>
                      <p class="text-muted-foreground">{{ item.dosis }}</p>
                    </div>
                    <div>
                      <CheckCircle></CheckCircle>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div class="col-span-12 md:col-span-5 space-y-3">
          <Card class="shadow-none p-3 border-cyan-700 text-cyan-700">
            <div>
              <div class="flex flex-wrap gap-2 justify-between items-start">
                <h1 class="md:text-base text-sm font-bold">Pengingat Minum Obat</h1>
              </div>
              <div class="flex gap-2 text-sm justify-between items-center flex-wrap">
                <span>{{ getDateStringInIndonesia(activeDate) }}</span>
                <span>Waktu Minum Obat : <b>08.00 WIB</b> </span>
                <Button class="bg-cyan-700" size="sm">Check In</Button>
              </div>
            </div>
          </Card>
          <Card class="shadow-none p-3 text-cyan-700">
            <h1 class="text-base font-semibold mb-2 flex items-center gap-2">
              <ChartArea />
              <span>Progres Pengobatan </span>
            </h1>
            <DonutChart :data="data.map((i) => i.percentage)" :height="200" :categories="categories" :hide-legend="true" :type="DonutType.Full" :radius="0">
              <div class="text-center text-cyan-700">
                <div class="font-bold text-2xl">{{ data[0]?.percentage }}%</div>
                <div class="text-muted-foreground text-xs">Progres pengobatan</div>
              </div>
            </DonutChart>
            <p class="text-center">Tetap Semangat! <b>17,2%</b> pengobatan selesai.</p>
          </Card>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Bell, ChartArea, CheckCircle } from "lucide-vue-next";

definePageMeta({
  layout: "home",
});
const activeIndex = ref(0);
const api = ref();

const onInit = (embla: any) => {
  api.value = embla;

  embla.on("select", () => {
    activeIndex.value = embla.selectedScrollSnap();
  });
};

const selectItem = (index: number) => {
  activeIndex.value = index;
  api.value?.scrollTo(index);
};

const obatTBC = [
  { nama: "Isoniazid", dosis: "5 mg/kgBB per hari" },
  { nama: "Rifampisin", dosis: "10 mg/kgBB per hari" },
  { nama: "Pirazinamid", dosis: "25 mg/kgBB per hari" },
  { nama: "Etambutol", dosis: "15 mg/kgBB per hari" },
];

const data = [
  { name: "Progres", percentage: 17.2 },
  { name: "Sisa", percentage: 100 - 17.2 },
];

const categories = {
  Progres: {
    name: "Progres",
    color: "var(--color-cyan-700)",
  },
  Sisa: {
    name: "Sisa",
    color: "var(--color-cyan-100)",
  },
};

const activeDate = ref(new Date());
const items = ref<Array<any>>([]);
items.value = getArrayOfDatesThisYear(activeDate.value);
const today = getDayAndMonthIndonesia(activeDate.value);
onMounted(() => {
  items.value.forEach((item) => {
    if (item.day === today.day && item.month === today.month && item.year === today.year) {
      selectItem(items.value.indexOf(item));
    }
  });
});
</script>
