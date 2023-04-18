import type {IProduct} from "@/types/IProduct";
import type {ComputedRef, Ref} from "vue";
import {computed, ref} from "vue";

export default function useProducts() {

    const responseData: IProduct[] = [
        {
            id: 1,
            title: 'Red Onion',
            short_text: 'This red onion is so good',
            image: '/images/products/red-onion.jpg',
            description: 'Red onion description'
        },
        {
            id: 2,
            title: 'White Onion',
            short_text: 'This white onion is so good',
            image: '/images/products/white-onion.jpg',
            description: 'White onion description'
        },
        {
            id: 3,
            title: 'Tall Onion',
            short_text: 'This tall onion is so good',
            image: '/images/products/tall-onion.jpg',
            description: 'Tall onion description'
        },
        {
            id: 4,
            title: 'Mixed Onion',
            short_text: 'This mixed onion is so good',
            image: '/images/products/mixed-onion.jpg',
            description: 'Mixed onion description'
        },
        {
            id: 5,
            title: 'Green Onion',
            short_text: 'This green onion is so good',
            image: '/images/products/green-onion.jpg',
            description: 'Green onion description'
        },
    ]

    const products: Ref<IProduct[]> = ref([]);

    const isProductsSet: ComputedRef<number> = computed(() => products.value.length)
    const getProducts = (): IProduct[] => {
        return products.value = responseData
    }

    const getProduct = (id: number): IProduct | undefined => {
        return responseData.find((item: IProduct): boolean => id === item.id)
    }

    return {getProducts, getProduct, products, isProductsSet}
}