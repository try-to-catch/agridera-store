<script lang="ts" setup>
import {onMounted, ref} from "vue";

const countriesName = ref<string[]>([])
onMounted(() => {
    fetch("https://restcountries.com/v3.1/all")
        .then((res): Promise<any[]> => res.json())
        .then((res): void => {
            countriesName.value = res.map((country) => country['name']['official'])
        })
})
</script>

<template>
    <div class="h-[100vh] bg-green-100 grad bg-gradient-to-r from-cyan-50 to-blue-50">
        <div class="container mx-auto grid grid-cols-2">
            <div v-for="name in countriesName" :key="name" class="m-2">{{ name }}</div>
        </div>
    </div>
</template>


<style scoped>

</style>