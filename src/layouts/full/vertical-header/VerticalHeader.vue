<template>
    <v-app-bar elevation="10" :priority="priority" height="64" color="" id="top">
        <div class="d-sm-flex d-none">
            <Logo />
        </div>
        <div class="d-sm-none d-flex mr-2">
            <v-icon icon="mdi-menu" size="25"></v-icon>
        </div>
        <v-btn class="hidden-md-and-down" icon color="" variant="text" @click.stop="customizer.SET_SIDEBAR_DRAWER()">
            <v-icon icon="mdi-menu" size="25"></v-icon>
        </v-btn>
        <v-btn class="hidden-lg-and-up" icon variant="text" @click.stop="customizer.SET_SIDEBAR_DRAWER()" size="small">
            <v-icon icon="mdi-menu" size="25"></v-icon>
        </v-btn>
        <v-spacer />
        
        <img
            src="../../../../src/assets/images/logos/google.jpg"
            height="60"
            width="auto"
            alt="logo"
                  
        />
        
        <v-spacer />
        <Notification />
        <div class="profile-container">
            <ProfileDD />
        </div>
       
    </v-app-bar>

    <v-navigation-drawer v-model="appsdrawer" location="right" temporary>
        <RightMobileSidebar />
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
import ProfileDD from './ProfileDD.vue';

import Logo from '../logo/Logo.vue';
import RightMobileSidebar from './RightMobileSidebar.vue';
import Notification from "./NotificationDD.vue";

const customizer = useCustomizerStore();
const appsdrawer = ref(false);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);

watch(priority, (newPriority) => {
    priority.value = newPriority;
});
</script>

<style scoped>
.profile-container {
    margin-left: auto;
}
</style>
