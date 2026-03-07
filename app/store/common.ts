import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const activeSection = ref("beranda");

  const setActiveSection = (id: string) => {
    activeSection.value = id;
  };
  const components: { name: string; id: string }[] = [
    {
      name: "Beranda",
      id: "beranda",
    },
    {
      name: "Seputar TBC",
      id: "seputar",
    },
    {
      name: "FAQ",
      id: "faq",
    },
    {
      name: "Pengobatan",
      id: "pengobatan",
    },
    {
      name: "Kontak",
      id: "kontak",
    },
  ];

  const toSection = (id: string) => {
    activeSection.value = id;

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    activeSection,
    components,
    toSection,
    setActiveSection,
  };
});
