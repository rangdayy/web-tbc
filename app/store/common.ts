import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const activeSection = ref(useRouter().currentRoute.value.path === "/" ? "beranda" : "");

  const setActiveSection = (id: string) => {
    activeSection.value = id;
  };
  const contacts = {
    phone: "+62 12 1234 1234",
    email: "462023028@student.uksw.edu",
    address: "Jln. Kartini No. 123",
    facebook: "https://www.facebook.com/",
    whatsapp: "https://wa.me/6285757840673",
    instagram: "https://www.instagram.com/",
    twitter: "https://www.twitter.com/",
    youtube: "https://www.youtube.com/",
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
    contacts,
  };
});
