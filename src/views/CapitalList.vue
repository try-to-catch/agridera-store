<script lang="ts" setup>
import {onMounted, ref} from "vue";

const countryCapitals = ref<string[]>([])
onMounted(() => {
    fetch("https://restcountries.com/v3.1/region/europe")
        .then((res): Promise<any[]> => res.json())
        .then((res): void => {
            countryCapitals.value = res.map((country) => country['capital'][0])
        })
})
</script>

<template>
    <div class="min-h-[100vh] bg-green-100 grad bg-gradient-to-r from-cyan-50 to-blue-50">
        <div class="container mx-auto grid grid-cols-2">
            <div v-for="name in countryCapitals" :key="name" class="m-2">{{ name }}</div>
        </div>
    </div>
</template>


<style scoped>

</style>