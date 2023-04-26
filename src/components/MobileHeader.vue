<template>
    <header class="relative xl:hidden drop-shadow-md z-50">
        <div class="flex justify-between px-2.5 z-10 relative bg-white py-5">
            <div class="w-[100px]">
                <img alt="logo" src="@/assets/images/icons/logo.png"/>
            </div>

            <div @click="toggleMenu" class="w-10 cursor-pointer">
                <img src="@/assets/images/icons/hamburger_icon.png" alt="hamburger_icon">
            </div>
        </div>
        <transition name="menu">
            <div v-show="isMenuOpen" class="flex flex-col-reverse justify-between px-2.5 absolute top-[90px] right-0 left-0 bg-white pb-[22px]">
                <search-box
                        class="w-full h-[30px] flex justify-between border-b border-custom-gray-900 items-center self-end"/>
                <navigation-links class="flex flex-col items-center w-full font-serif font-medium pt-4 pb-2.5"/>
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
import SearchBox from "@/components/SearchBox.vue";
import NavigationLinks from "@/components/NavigationLinks.vue";
import {ref} from "vue";


const isMenuOpen = ref(false)
const toggleMenu = (): void => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.menu-enter-active, .menu-leave-active {
    transition: all 0.5s ease-in-out;
}

.menu-enter-from, .menu-leave-to {
    transform: translateY(-100%);
}

.menu-enter-to, .menu-leave-from {
    transform: translateY(0%);
}
</style>