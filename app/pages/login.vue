<template>
  <div ref="content" class="flex items-center justify-center p-4 relative bg-stone-50 md:py-28 py-10">
    <div class="max-w-6xl bg-radial-[at_50%_50%] size-40 md:size-[350px] from-cyan-200/25 to-10 md:to-70% absolute right-0 md:right-3/12 z-10 blur-xl"></div>
    <div class="max-w-6xl bg-radial-[at_50%_50%] size-40 md:size-[350px] from-cyan-800/25 to-10 md:to-70% absolute top-30 right-1/2 z-10 blur-xl"></div>

    <motion.div
      class="w-full z-30"
      :initial="{
        opacity: 0,
        y: 20,
      }"
      :transition="{
        duration: 0.3,
      }"
      :while-in-view="{
        opacity: 1,
        y: 0,
      }"
    >
      <Card class="w-full max-w-md mx-auto">
        <CardContent>
          <form class="space-y-3" @submit.prevent="() => {}">
            <h1 class="text-lg font-bold mb-2">Login</h1>
            <p class="text-stone-500">Masukkan username dan password anda untuk mengakses halaman</p>
            <Input type="text" placeholder="Username"></Input>
            <Input type="password" placeholder="Password"></Input>
            <Button class="w-full mt-4" @click="onLogin" :disabled="isLoading">
              <Loader2 v-if="isLoading" class="w-4 h-4 animate-spin" />
              Login</Button
            >
            <p class="text-sm text-stone-500">
              <span class="font-semibold">Belum memiliki akun? </span>
              <NuxtLink to="/register" class="text-cyan-700 hover:text-cyan-700">
                <span class="underline font-semibold">Daftar sekarang!</span>
              </NuxtLink>
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from "lucide-vue-next";
import { motion } from "motion-v";
import { toast } from "vue-sonner";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";

definePageMeta({
  layout: "default",
});

const onLogin = () => {
  toast.success("Login Success", {
    description: "Anda telah berhasil login. Selamat datang!",
  });
};

const isLoading = ref(false);
</script>
