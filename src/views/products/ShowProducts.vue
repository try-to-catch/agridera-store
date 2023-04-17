<template>
    <default-header/>
    <main v-if="isProductSet" class="pb-28 md:pb-[168px]">
        <section class="text-custom-green my-[18px] mx-2.5 lg:container lg:mx-auto">
            <router-link :to="{ name: 'products.index'}" class="flex ">
                <img alt="arrow" class="w-6" src="@/assets/images/icons/arrow.svg">
                <span class="ml-4">Return to all tomatoes</span>
            </router-link>
        </section>
        <section
                class="lg:container lg:mx-auto mx-2.5 grid grid-cols-1 lg:grid-cols-2 md:gap-x-11 justify-items-center lg:justify-items-start">
            <div>
                <div class="lg:text-start text-center">
                    <h1 class="font-bold text-custom-green text-4xl  lg:text-5xl">
                        <span class="text-custom-gray-900">{{ product.title }}</span>
                        {{ product?.short_text }}
                    </h1>
                    <div class="pt-10 lg:block hidden text-custom-green text-[20px]">*****</div>
                </div>

                <div class="flex items-center space-x-6 py-10 justify-center lg:justify-start">
                    <div class="basis-20 h-20">
                        <img alt="tomato-remark" class="h-full w-full" src="@/assets/images/icons/tomato-remark.svg">
                    </div>
                    <h4 class="text-custom-red-800 max-w-[395px] text-2xl lg:text-3xl font-bold">
                        Very high yield and excellent fruits quality!
                    </h4>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="max-h-[500px] max-w-[540px] overflow-hidden">
                    <img alt="product_image" :src="product.image">
                </div>
                <div class="self-end mt-[30px] w-full lg:w-fit">
                    <a class="text-custom-green space-x-5 py-2.5 justify-center px-[30px] border-custom-green border-2 flex items-center rounded-[60px]"
                       href="#">
                        <img alt="ico-pdf" src="@/assets/images/icons/ico-pdf.svg">
                        <span class="font-bold text-[17px]">Download PDF</span>
                    </a>
                </div>
            </div>
        </section>
        <section class="lg:container lg:mx-auto mx-2.5 pt-10">
            <h5 class="text-3xl font-bold">
                Description:
            </h5>
            <p>{{ product.description }}</p>
        </section>
    </main>
</template>

<script setup lang="ts">
import DefaultHeader from "@/components/DefaultHeader.vue";
import useProducts from "@/composables/products";
import {computed, onMounted, ref} from "vue";

const props = defineProps<{ routeId: number }>()

const {getProduct} = useProducts()

const product = ref()
onMounted(() => {
    product.value = getProduct(props.routeId)
})

const isProductSet = computed(() => product.value)
</script>