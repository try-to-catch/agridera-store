<script lang="ts" setup>
import {ref} from "vue";
import type {IDogeData} from "@/types/IDogeData";
import type {ICatData} from "@/types/ICatData";

const dogeURL = ref<string>('')
const getRandomDog = (): void => {
    fetch("https://random.dog/woof.json")
        .then((res): Promise<IDogeData> => res.json())
        .then((res): void => {
            dogeURL.value = res.url
        })
}

const catURL = ref<string>('')
const getRandomCat = (): void => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((res): Promise<ICatData[]> => res.json())
        .then((res): void => {
            catURL.value = res[0].url
        })
}
</script>

<template>
    <div id="doge-generator">
        <div class="results">
            <div class="result">
                <img v-if="catURL.length" :src="catURL" alt="cat">
                <p v-else>Random Cat</p>
            </div>
            <div class="result">
                <img v-if="dogeURL.length" :src="dogeURL" alt="doge">
                <p v-else>Random Dog</p>
            </div>
        </div>

        <div class="buttons">
            <button @click="getRandomCat">Get Cat</button>
            <button @click="getRandomDog">Get Dog</button>
        </div>
    </div>

</template>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

#doge-generator {
    background-image: linear-gradient(180deg, rgba(247, 247, 247, 1) 23.8%, rgba(252, 221, 221, 1) 92%);
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    margin: 0;
}

.results {
    display: flex;
    align-items: center;
    justify-content: center;
}

.result {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    height: 400px;
    width: 300px;
}

.result img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    background-color: darksalmon;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    width: 300px;
}

button:active {
    transform: scale(0.98);
}

button:focus {
    outline: none
}
</style>