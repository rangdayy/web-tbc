<template>
  <div class="block w-full">

    <img v-if="typeof modelValue === 'string' && isImage && modelValue" :src="`${baseUrl}/avatars/${modelValue}`" class="h-36 object-cover" />
    <img v-if="preview && isImage" :src="preview" class="h-36 object-cover" />
    <Input :id="id" type="file" :placeholder="placeholder" @change="onAvatarChange" :accept="accept" class="w-full" />
    <div class="p-2">
      <p v-if="maxSize" class="text-xs text-stone-500">Maksimal file ukuran {{ maxSize / 1000000 }}MB</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { toast } from "vue-sonner";
const preview = ref<any>(null);

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  maxSize: {
    type: Number,
    default: 2000000,
  },
  accept: {
    type: String,
    default: "",
  },
  modelValue: {
    type : [String, File],
    default : null
  },
  isImage: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const baseUrl = useRuntimeConfig().public.baseUrl;

const validateFileType = (file: File, accept: string): boolean => {
  if (!accept) return true;

  const rules = accept.split(",").map((r) => r.trim().toLowerCase());
  const mime = file.type.toLowerCase();
  const ext = "." + file.name.split(".").pop()?.toLowerCase();

  return rules.some((rule) => {
    // 1. Handle group MIME: image/*, video/*, audio/*
    if (rule.endsWith("/*")) {
      const group = rule.replace("/*", "");
      return mime.startsWith(group + "/");
    }

    // 2. Handle extension: .jpg .png .pdf
    if (rule.startsWith(".")) {
      return ext === rule;
    }

    // 3. Exact MIME: application/pdf etc.
    return mime === rule;
  });
};

const onAvatarChange = (event: any) => {
  preview.value = null;
  const file = event.target.files[0];
  if (file) {
    if (file.size > props.maxSize) {
      toast.error("File yang di upload terlalu besar", {
        description: "Silahkan upload file yang lebih kecil",
      });
      event.target.value = "";
      return;
    }
    if (validateFileType(file, props.accept)) {
      // set preview image
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.value = e.target?.result;
      };
      reader.readAsDataURL(file);
      emit("update:modelValue", file);
    } else {
      toast.error("Tipe file yang di upload tidak sesuai", {
        description: "Silahkan upload file yang sesuai",
      });
      event.target.value = "";
      return;
    }
  }
};
</script>
