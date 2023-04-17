<template>
    <default-header/>
    <main class="bg-cyan-50 bg-opacity-30 pb-[50px]">
        <header
                class="w-full h-[320px] lg:h-[480px] bg-no-repeat bg-cover bg-center"
                style="background-image: url(/images/onion-banner.jpeg)"
        ></header>

        <section class="xl:container xl:mx-auto mx-2.5 pt-[51px]">
            <div class="pb-10 flex items-center flex-col xl:block ">
                <h3 class="text-[44px] text-center lg:text-start text-custom-gray-900 font-bold">
                    Agridera Fresh Market Onion Hybrids
                </h3>
                <div class="pt-10 text-custom-green hidden lg:block text-[20px]">*****</div>
            </div>
            <div class="text-[17px] space-y-6 text-custom-gray-900">
                <p>
                    Agridera aims to be one of the world's leading companies in the
                    breeding, production, and marketing of tomato seeds.
                    <span class="font-bold">
              We invest intensively in research and development to provide
              solutions to growers and consumers in numerous countries around
              the world.
            </span>
                    In particular, we breed improved disease-resistant cultivars adapted
                    to different markets globally.
                </p>
                <p>
                    Currently, emphasis is placed on combining Tomato Yellow Leaf Curl
                    Virus (TYLCV) and Tomato Spotted Wilt Virus (TSWV) resistances with
                    other soil borne diseases into superior tomato breeding lines and
                    hybrids. Moreover, comprehensive efforts are being undertaken to
                    develop varieties resistance to TBRFV virus (Tomato Brown Rugose
                    Fruit Virus).
                </p>
                <p>
                    In terms of horticultural traits, breeding is for earliness,
                    different fruit sizes, firmness, red fruit color, flavor, crack
                    resistance, shelf life, and high/low temperature fruit set.
                    Combinations of quality features and disease resistance are sought
                    in a variety of types, namely round and elongated shapes.
                </p>
                <div class="pl-[28px] rounded-sm relative">
                    <p
                            class="before:h-full before:bg-custom-red-700 before:absolute before:left-0 before:top-0 before:w-1 before:rounded-md"
                    >
                        Agirdera Tomato breeding programs are focusing on three main
                        segments: Greenhouse Indeterminate Tomatoes, Open-field
                        Indeterminate Tomatoes, and Bush Type Open-field Tomatoes.
                    </p>
                </div>
            </div>
        </section>
        <section class="container mx-auto my-10">
            <ul
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] bg-cyan-50 bg-opacity-75 py-[50px] px-[22px]"
            >
                <li class="text-custom-gray-900">
                    <h5 class="text-xl font-bold">
                        Greenhouse Tomato Breeding Program
                    </h5>
                    <div class="border-b border-custom-gray-900/75 my-[15px]"></div>
                    <p>
              <span class="font-bold">
                This breeding is aimed for the Spanish and Turkish
                markets.</span
              >
                        For single and cluster picks, round fruit shape and resistances of
                        TYLCV, TSWV, Nematodes and FORL (Fusarium oxysporum f.sp.
                        radicis-lycopersici). Some hybrids may include more resistances,
                        such as Cladosporium and Leveillula Taurica (Lv).
                    </p>
                </li>
                <li class="text-custom-gray-900">
                    <h5 class="text-xl font-bold max-w-[300px]">
                        Open-field Indeterminate Tomatoes
                    </h5>
                    <div class="border-b border-custom-gray-900/75 my-[15px]"></div>
                    <p>
              <span class="font-bold">
                This breeding is for Brazilian, Moroccan, and Turkish
                markets.</span
              >
                        The main focus is on large round shape fruits (200 grams plus);
                        and resistances of TYLCV, TSWV, Nematodes and FORL. In the near
                        future, F3 (Fusarium oxysporum f.sp. lycopersici) will be included
                        as basic resistance in our cultivars.
                    </p>
                </li>
                <li class="text-custom-gray-900">
                    <h5 class="text-xl font-bold max-w-[300px]">
                        Open-field Bush Type Tomatoes
                    </h5>
                    <div class="border-b border-custom-gray-900/75 my-[15px]"></div>
                    <p>
              <span class="font-bold">
                This breeding is for Mediterranean markets.</span
              >
                        We breed round and elongated shapes, standard sizes (140- 180
                        grams), and beef sizes (min. 180 grams up to 300 grams and more).
                        We combine the resistances of TYLCV, TSWV and Nematodes as basic
                        resistances in our hybrids. However, some hybrids may include more
                        resistances, such as Cladosporium and Leveillula Taurica (Lv).
                    </p>
                </li>
            </ul>
        </section>
        <div class="lg:container lg:mx-auto mx-2.5 mb-10">
            <div class="pl-[28px] rounded-sm relative">
                <p class="before:h-full before:bg-custom-red-700 before:absolute before:left-0 before:top-0 before:w-1 before:rounded-md text-custom-gray-900 font-bold">
                    Agridera operates through international and local distributers
                    around the world.
                </p>
            </div>
        </div>

        <section class=" lg:container lg:mx-auto mx-2.5">
            <ul v-if="isProductsSet" class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
                <product-item v-for="product in products" :key="product.id" :product="product"/>
            </ul>
        </section>
    </main>
</template>

<script setup lang="ts">
import DefaultHeader from "@/components/DefaultHeader.vue";
import ProductItem from "@/components/ProductItem.vue";
import useProducts from "@/composables/products";
import {onMounted} from "vue";

const {getProducts, products, isProductsSet} = useProducts()

onMounted(getProducts)

</script>