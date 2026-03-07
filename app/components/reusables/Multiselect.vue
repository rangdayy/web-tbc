<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { ChevronsUpDown } from "lucide-vue-next";

const props = defineProps<{
  options: { label: string; value: string }[];
  disabled?: boolean;
  placeholder?: string;
  defaultOptions?: string[];
}>();

const model = defineModel<string[]>();

onMounted(() => {
  if (!model.value && props.defaultOptions) {
    model.value = props.defaultOptions;
  }
});

const selectedOptions = computed(() => {
  return props.options.filter((option) => model.value?.includes(option.value));
});

const isOpen = ref(false);

</script>

<template>
  <Select v-model="model" :disabled :default-value="defaultOptions" :multiple="true" :open="isOpen" @update:open="isOpen = $event" class="relative">
    <SelectTrigger class="w-full">
      <div v-if="selectedOptions.length" class="flex flex-nowrap truncate gap-1">
        <Badge v-for="item in selectedOptions" :key="item.value" variant="default" class="bg-red-700">
          {{ item.label }}
        </Badge>
      </div>
      <span v-else > {{ placeholder ? placeholder : "Pilih Opsi" }}</span>
    </SelectTrigger>

    <SelectContent class="max-h-[300px] overflow-y-auto">
      <template v-for="option in options" :key="option.value">
        <SelectItem :value="option.value">
          {{ option.label }}
        </SelectItem>
      </template>
    </SelectContent>
  </Select>
</template>
