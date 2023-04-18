<template>
    <default-header/>
    <main v-if="product" class="pb-28 md:pb-[168px]">
        <section class="text-custom-green my-[18px] mx-2.5 lg:container lg:mx-auto">
            <router-link :to="{ name: 'products.index'}" class="flex ">
                <img alt="arrow" class="w-6" src="@/assets/images/icons/arrow.svg">
                <span class="ml-4">Return to all tomatoes</span>
            </router-link>
        </section>
        <section
                class="lg:container lg:mx-auto mx-2.5 flex flex-col-reverse lg:flex-row md:gap-x-11 justify-items-center lg:justify-items-start">
            <div class="flex flex-col items-center">
                <div class="max-h-[500px] max-w-[540px] overflow-hidden">
                    <img :src="product.image" alt="product_image">
                </div>
                <div class="mt-[30px] max-w-[540px] w-full lg:max-w-full lg:w-full">
                    <button v-if="isAddButtonActive"
                            class="text-custom-green w-full space-x-5 py-2.5 justify-center px-[30px] border-custom-green border-2 flex items-center rounded-[60px]"
                            @click="addProductToCart(product.id)">
                        <font-awesome-icon :icon="['fas', 'cart-shopping']"/>
                        <span class="font-bold text-[17px]">Add to cart</span>
                    </button>
                    <router-link v-else :to="{name: 'contactUs'}"
                                 class="text-custom-green w-full space-x-5 py-2.5 justify-center px-[30px] border-custom-green border-2 flex items-center rounded-[60px]"

                    >
                        <font-awesome-icon :icon="['fas', 'cart-shopping']"/>
                        <span class="font-bold text-[17px]">Go to cart</span>
                    </router-link>
                </div>
            </div>
            <div>
                <div class="lg:text-start text-center">
                    <h1 class="font-bold text-custom-green text-4xl  lg:text-5xl">
                        <span class="text-custom-gray-900">{{ product.title }}</span>
                        {{ product.short_text }}
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

        </section>
        <section class="lg:container lg:mx-auto mx-2.5 pt-10">
            <h5 class="text-3xl font-bold">
                Description:
            </h5>
            <p>{{ product.description }}</p>
        </section>
    </main>
</template>

<script lang="ts" setup>
import DefaultHeader from "@/components/DefaultHeader.vue";
import useProducts from "@/composables/products";
import type {Ref} from "vue"
import {onMounted, ref} from "vue";
import type {IProduct} from "@/types/IProduct";
import useCart from "@/composables/cart";

const props = defineProps<{ routeId: number }>()

const {getProduct} = useProducts()
const {addToCart, isProductInCart} = useCart()

const product: Ref<IProduct | undefined> = ref()
const isAddButtonActive = ref(true)

onMounted(() => {
    product.value = getProduct(props.routeId)
    isAddButtonActive.value = !isProductInCart(props.routeId)
})


const addProductToCart = (id: number) => {
    addToCart(id)
    isAddButtonActive.value = false
}
</script>