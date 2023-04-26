<script lang="ts" setup>
import HomeHeader from "@/components/HomeHeader.vue";

const askPermission = async (): Promise<void | never> => {
    if (!('PushManager' in window && await navigator.serviceWorker.ready)) return

    if (!confirm("Would you like to receive push notifications?")) return

    return new Promise(function (resolve, reject) {
        const permissionResult = Notification.requestPermission((result: 'denied' | 'granted' | 'default'): void => {
            resolve(result);
        });

        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    })
        .then(function (permissionResult) {
            if (permissionResult !== "granted")
                throw new Error('We weren\'t granted permission.');
        });
}


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log('Service worker registered!');
        });


}

</script>

<template>
    <home-header/>
    <main>
        <section
                class="h-[850px] w-full bg-no-repeat bg-cover bg-center pt-5 -mt-[155px]"
                style="background-image: url(/images/background.jpg)"
        >
            <div
                    class="text-center sm:container sm:mx-auto mx-2.5 flex flex-col items-center justify-center h-full relative"
            >
                <h1 class="text-custom-brown font-bold text-5xl">
                    Agridera Seeds and Agriculture Ltd
                </h1>
                <div class="mt-[60px]">
                    <router-link :to="{name: 'products.index'}"
                                 class="block uppercase bg-custom-green text-white px-[30px] py-4 w-40 h-[55px]"
                                 href="tomatoes.html"
                    >
                        read more
                    </router-link>
                </div>
                <button class="absolute bottom-20 font-semibold subscribe-for-push mt-10 rounded-md bg-gray-800 text-white text-lg py-2 px-3.5 "
                        @click="askPermission">
                    SUBSCRIBE FOR PUSH NOTIFICATIONS
                </button>
            </div>
        </section>
        <section>
            <ul
                    class="text-custom-gray-900 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 justify-center items-center gap-2.5 mx-2.5 py-10"
            >
                <li class="flex flex-col text-center">
                    <img
                            alt="wheat"
                            class="self-center w-[20px]"
                            src="@/assets/images/icons/wheat.svg"
                    /><span class="text-xl mt-5">Wheat</span>
                </li>
                <li class="flex flex-col text-center">
                    <img
                            alt="wheat"
                            class="self-center w-[50px]"
                            src="@/assets/images/icons/watermelon.svg"
                    /><span class="text-xl mt-5">Confection Watermelon</span>
                </li>
                <li class="flex flex-col text-center">
                    <img
                            alt="clover"
                            class="self-center w-[50px]"
                            src="@/assets/images/icons/clover.svg"
                    /><span class="text-xl mt-5">Clover</span>
                </li>
                <li class="flex flex-col text-center">
                    <img
                            alt="conf-sunflower"
                            class="self-center w-[50px]"
                            src="@/assets/images/icons/conf-sunflower.svg"
                    /><span class="text-xl mt-5">Confection Sunflower</span>
                </li>
                <li class="flex flex-col text-center">
                    <img
                            alt="tomato"
                            class="self-center w-[50px]"
                            src="@/assets/images/icons/tomato.svg"
                    /><span class="text-xl mt-5">Tomato</span>
                </li>
                <li class="flex flex-col text-center">
                    <img
                            alt="eggplant"
                            class="self-center w-[50px]"
                            src="@/assets/images/icons/eggplant.svg"
                    /><span class="text-xl mt-5">Eggplant P/O</span>
                </li>
                <li class="flex flex-col text-center">
                    <img
                            alt="sunflower"
                            class="self-center w-[60px]"
                            src="@/assets/images/icons/sunflower.svg"
                    /><span class="text-xl mt-5">Ornamental Sunflower</span>
                </li>
            </ul>
        </section>
        <section
                class="bg-custom-main pt-20 pb-24 space-y-[100px] bg-no-repeat bg-cover bg-center"
                style="background-image: url(/images/bg-logo.svg)"
        >
            <div class="flex flex-col-reverse lg:flex-row justify-between mx-2.5 xl:container xl:mx-auto">
                <div class="text-custom-gray-900 w-full lg:w-[500px] flex lg:block items-center flex-col">
                    <div>
                        <h2 class="text-[2.5rem] lg:text-[64px] font-bold">
                            Vision
                        </h2>
                        <div class="py-2 lg:py-[30px] text-center lg:text-start text-custom-green text-[20px]">
                            *****
                        </div>
                    </div>

                    <p class="lg:text-xl md:text-md">
                        We believe in long-term growth with an emphasis on the potential
                        of emerging markets. We also support the global need of feeding
                        the growing population.
                    </p>
                </div>
                <div class="lg:w-1/2 max-w-full lg:drop-shadow-3xl flex justify-center">
                    <img alt="" src="@/assets/images/content/plant-in-hand.jpg"/>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row lg:justify-between mx-2.5 xl:container xl:mx-auto lg:space-x-2.5">
                <div class="lg:w-1/2 max-w-full lg:drop-shadow-3xl flex justify-center">
                    <img alt="" src="@/assets/images/content/plants.jpg"/>
                </div>
                <div class="text-custom-gray-900 w-full lg:w-[500px] flex lg:block items-center flex-col">
                    <div>
                        <h2 class=" text-[2.5rem] lg:text-[64px] font-bold">
                            Mission
                        </h2>
                        <div class="py-2 lg:py-[30px] text-center lg:text-start text-custom-green text-[20px]">
                            *****
                        </div>
                    </div>

                    <p class="lg:text-xl md:text-md">
                        Breeding and marketing seeds for advanced field crops and
                        vegetable varieties that provide an added value to all supply
                        chain partners.
                    </p>
                </div>
            </div>
        </section>
        <section class="bg-custom-gray-100">
            <div class="container mx-auto pt-[70px] pb-[90px]">
                <h2 class="text-center md:text-[64px] text-[2.5rem] text-custom-gray-900 font-bold">
                    AGRIDERA’S MAIN ACTIVITIES
                </h2>
                <div class="pt-6 pb-[60px] text-center text-custom-green text-[20px]">
                    *****
                </div>
                <div class="w-full">
                    <ul class="flex md:justify-between justify-center flex-wrap md:flex-nowrap space-y-4 sm:space-y-0">
                        <li class="flex flex-col items-center">
                            <div>
                                <img alt="cotton" src="@/assets/images/content/cotton.png"/>
                            </div>
                            <h4 class="text-2xl text-custom-green font-bold pt-4">
                                Open field crop seeds
                            </h4>
                            <div
                                    class="w-[180px] border-b border-custom-green mt-[28px] mb-5"
                            ></div>
                            <div class="max-w-[250px] text-lg text-center">
                                wheat, cotton, legumes, hybrid confection sunflower
                            </div>
                        </li>
                        <li class="flex flex-col items-center">
                            <div>
                                <img alt="tomato" src="@/assets/images/content/tomato.png"/>
                            </div>
                            <h4 class="text-2xl text-custom-green font-bold pt-4">
                                Vegetable seeds
                            </h4>
                            <div
                                    class="w-[180px] border-b border-custom-green mt-[28px] mb-5"
                            ></div>
                            <div class="max-w-[250px] text-lg text-center">
                                hybrid open field tomatoes, eggplant, onion, paprika, etc.
                            </div>
                        </li>
                        <li class="flex flex-col items-center sm:mt-4 md:mt-0">
                            <div>
                                <img alt="sunflower" src="@/assets/images/content/sunflower.png"/>
                            </div>
                            <h4 class="text-2xl text-custom-green font-bold pt-4">
                                Open field crop seeds
                            </h4>
                            <div
                                    class="w-[180px] border-b border-custom-green mt-[28px] mb-5"
                            ></div>
                            <div class="max-w-[250px] text-lg text-center">
                                hybrid cut sunflowers, hybrid patio tomatoes, Bells of Irland,
                                etc.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>

</style>