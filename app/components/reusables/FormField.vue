<template>
  <div class="flex items-start">
    <div class="space-y-2 w-full">
      <div >
        <slot> </slot>
      </div>
      <small v-if="validate && validate.message" class="flex flex-nowrap m-0 text-red-700">
        <MessageCircleWarning :size="15" class="mt-0.5"></MessageCircleWarning>
        <span class="ml-1">{{ validate.message }}</span>
      </small>
      <div v-else-if="message" class="flex flex-nowrap items-center mt-2 text-stone-300">
        <span class="ml-2">{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MessageCircleWarning } from "lucide-vue-next";
import {  inject, ref, watchEffect } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  wrapContent: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    default: "",
  },
  namespace: {
    type: String,
    default: "",
  },
});

const validate = ref<any>({});

const validation: any = inject("errors", undefined);
watchEffect(() => {
  if (validation) validate.value = validation.value.find((e: any) => e.name === props.namespace) || {};
});
</script>
