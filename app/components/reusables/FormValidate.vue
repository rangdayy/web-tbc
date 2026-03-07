<template>
  <div @submit.prevent="() => {}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, watch } from "vue";

export default defineComponent({
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const errors = ref<Array<any>>([]);
    provide("errors", errors);

    const validate = async () => {
      try {
        await props.schema.validate(props.form, { abortEarly: false });
        errors.value = [];
      } catch (error: any) {
        const err: any = [];
        error.inner.forEach((e: any) => {
          err.push({ name: e.path, message: e.message });
        });
        errors.value = err;
      }
      emit("validation", errors.value);
    };

    watch(
      props,
      () => {
        if (props.schema) validate();
      },
      { deep: true, immediate: true }
    );
  },
});
</script>
