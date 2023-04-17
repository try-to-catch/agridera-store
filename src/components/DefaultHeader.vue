<template>
    <header class="hidden xl:block pt-[20px] pb-[22px] bg-white drop-shadow-md">
        <div class="container mx-auto flex justify-between">
            <div class="w-[166px] h-[83px]">
                <router-link :to="{name: 'home'}">
                    <img alt="logo" src="@/assets/images/icons/logo.png"/>
                </router-link>
            </div>
            <div class="flex flex-col justify-between">
                <search-box class="w-[350px] h-[30px] flex justify-between border-b border-custom-gray-900 items-center self-end"/>
                <navigation-links  class="flex justify-between w-[500px] font-serif font-medium" />
            </div>
        </div>
    </header>
    <mobile-header/>
</template>

<script>
import MobileHeader from "@/components/MobileHeader.vue";
import NavigationLinks from "@/components/NavigationLinks.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
    name: "DefaultHeader",
    components: {SearchBox, NavigationLinks, MobileHeader}
}
</script>

<style scoped>

</style>