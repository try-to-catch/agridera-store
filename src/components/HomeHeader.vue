<template>
    <header class="container mx-auto hidden xl:flex justify-between pt-[20px] pb-[22px]">
        <div class="w-[226px] h-[113px]">
            <img alt="logo" src="@/assets/images/icons/logo.png"/>
        </div>
        <div class="flex flex-col justify-between">
            <search-box class="w-[350px] h-[30px] flex justify-between border-b border-custom-gray-900 items-center self-end"/>
            <navigation-links  class="flex justify-between w-[500px] font-serif font-medium" />
        </div>
    </header>
    <mobile-header/>
</template>

<script>
import MobileHeader from "@/components/MobileHeader.vue";
import NavigationLinks from "@/components/NavigationLinks.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
    name: "HomeHeader",
    components: {SearchBox, NavigationLinks, MobileHeader}
}
</script>