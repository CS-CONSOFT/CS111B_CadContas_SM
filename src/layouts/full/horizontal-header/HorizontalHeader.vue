<template>
    <v-app-bar elevation="10" :priority="priority" height="64" class="horizontal-header" color="">
        <div :class="customizer.boxed ? 'maxWidth v-toolbar__content px-lg-0 px-4' : 'v-toolbar__content px-6'">
            <div class="d-sm-flex d-none">
                <Logo />
            </div>
            <div class="d-sm-none d-flex mr-2">
                <LogoIcon />
            </div>
            <v-btn class="hidden-md-and-up" icon variant="text" @click.stop="customizer.SET_SIDEBAR_DRAWER" size="small">
                <Menu2Icon size="25" />
            </v-btn>

            <!-- ------------------------------------------------>
            <!-- Search part -->
            <!-- ------------------------------------------------>

            <Searchbar />

            <!---/Search part -->
            <v-spacer />
            <!-- ---------------------------------------------- -->
            <!-- User Profile -->
            <!-- ---------------------------------------------- -->
            <div class="ml-3">
                <ProfileDD />
            </div>
        </div>
    </v-app-bar>

    <v-navigation-drawer v-model="appsdrawer" location="right" temporary>
        <RightMobileSidebar />
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
// Icon Imports
import { Menu2Icon } from 'vue-tabler-icons';
import Logo from '../logo/Logo.vue';
import LogoIcon from '../logo/LogoIcon.vue';
// dropdown imports
import ProfileDD from '../vertical-header/ProfileDD.vue';
import Searchbar from '../vertical-header/Searchbar.vue';
import RightMobileSidebar from '../vertical-header/RightMobileSidebar.vue';

const customizer = useCustomizerStore();
const showSearch = ref(false);
const drawer = ref(false);
const appsdrawer = ref(false);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
function searchbox() {
    showSearch.value = !showSearch.value;
}
watch(priority, (newPriority) => {
    // yes, console.log() is a side effect
    priority.value = newPriority;
});
</script>
