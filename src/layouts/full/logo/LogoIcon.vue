<script setup>
import { computed } from "vue";
import LogoLightIcon from "./LogoLightIcon.vue";
import LogoDarkIcon from "./LogoDarkIcon.vue";
import { useCustomizerStore } from "@/stores/customizer";

const customizer = useCustomizerStore();

//const dark = ref(false);
const dark = computed(() => {
  if (
    customizer.actTheme === "DARK_BLUE_THEME" ||
    customizer.actTheme === "DARK_AQUA_THEME" ||
    customizer.actTheme === "DARK_ORANGE_THEME" ||
    customizer.actTheme === "DARK_PURPLE_THEME" ||
    customizer.actTheme === "DARK_GREEN_THEME" ||
    customizer.actTheme === "DARK_CYAN_THEME"
  ) {
    return true;
  } else {
    return false;
  }
});
</script>
<template>
    <LogoLightIcon v-if="dark" />
    <LogoDarkIcon v-else />
</template>
