import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const activeSection = ref("beranda");

  const setActiveSection = (id: string) => {
    activeSection.value = id;
  };
  const components: { name: string; id: string; path: string | null }[] = [
    {
      name: "Beranda",
      id: "beranda",
      path: null,
    },
    {
      name: "Seputar TBC",
      id: "seputar",
      path: null,
    },

    {
      name: "Pengobatan",
      id: "pengobatan",
      path: null,
    },
    {
      name: "FAQ",
      id: "faq",
      path: null,
    },
    {
      name: "Kontak",
      id: "kontak",
      path: "/kontak",
    },
  ];

  const toSection = (id: string, path: string | null) => {
    activeSection.value = id;
    // const currentRoute = useRoute().path;
    if (path) {
      navigateTo(path);
      activeSection.value = "";
    } else navigateTo("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return {
    activeSection,
    components,
    toSection,
    setActiveSection,
  };
});
