<script lang="ts" setup>

import ResponsiveFooter from "@/components/ResponsiveFooter.vue";
</script>

<template>
    <router-view></router-view>
    <responsive-footer v-if="$route.path !=='/get-countries' && $route.path !=='/get-pet'"/>
</template>

