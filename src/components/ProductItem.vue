<template>
    <li>
        <router-link :to="{name: 'products.show', params: {product: product.id}}">
            <div class="max-h-[250px] overflow-hidden">
                <img alt="tomatoes-in-hand" class="bg-no-repeat bg-cover bg-center"
                     :src="product.image"
                />
            </div>
            <div class="bg-white px-[18px] py-[9px] text-custom-green text-center">
                <h5 class="text-xl font-bold">{{ product.title }}</h5>
                <p>{{ product.short_text }}</p>
            </div>
        </router-link>
    </li>
</template>

<script setup lang="ts">

import type {IProduct} from "@/types/IProduct";

const props = defineProps<{ product: IProduct }>()
</script>