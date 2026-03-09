<template>
  <motion.div id="navbar" :initial="{ opacity: 0, y: -100 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5, ease: 'easeInOut' }" class="p-3 border-b sticky top-0 bg-white z-50 navbar">
    <nav class="flex flex-wrap justify-between gap-4 mx-auto max-w-7xl">
      <div>
        <div class="font-bold flex gap-2 items-center">
          <motion.img :while-hover="{ scale: 1.1 }" :transition="{ duration: 0.5, ease: 'easeInOut' }" src="/assets/img/tbclogo.png" class="h-14"> </motion.img>
          <motion.div class="flex flex-col text-sm leading-tight text-cyan-700">
            <span>Tuntas Lawan TBC</span>
          </motion.div>
        </div>
      </div>
      <div class="md:flex hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="item in components" :key="item.name">
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" as-child>
                <NuxtLink :class="{ 'cursor-pointer uppercase hover:text-cyan-700 font-normal': true, 'text-cyan-700 underline-offset-8 underline font-semibold!': activeSection == item.id || currentRoute.path == item.path }" @click="toSection(item.id, item.path)"> {{ item.name }} </NuxtLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NuxtLink @click="toSection('', '/login')">
                <Button variant="outline" class="w-full text-cyan-700 cursor-pointer hover:text-cyan-700">
                  <LogIn></LogIn>
                  LOGIN</Button
                >
              </NuxtLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div class="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline"> <MenuIcon></MenuIcon></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56" align="start">
            <DropdownMenuLabel>MENU</DropdownMenuLabel>
            <DropdownMenuItem v-for="item in components" :key="item.name">
              <NuxtLink :class="{ 'cursor-pointer uppercase hover:text-cyan-700 font-normal': true, 'text-cyan-700 underline-offset-8 underline font-semibold!': activeSection == item.id }" @click="toSection(item.id, item.path)"> {{ item.name }} </NuxtLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  </motion.div>
</template>

<script setup lang="ts">
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Button from "../ui/button/Button.vue";
import { motion } from "motion-v";
import { LogIn, MenuIcon } from "lucide-vue-next";
import { useCommonStore } from "~/store/common";

const useStore = useCommonStore();
const currentRoute = computed(()=> useRouter().currentRoute.value);
const activeSection = computed({
  get: () => useStore.activeSection,
  set: (value) => useStore.setActiveSection(value),
});
const components = computed(() => useStore.components);
const { toSection } = useStore;
</script>
