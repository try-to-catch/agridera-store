import type {Ref} from "vue"
import {onMounted, ref} from "vue";
import type {IProduct} from "@/types/IProduct";
import useProducts from "@/composables/products";


export default function useCart() {
    const {getProducts, products}: { getProducts: () => IProduct[], products: Ref<IProduct[]> } = useProducts()

    const cartIds: Ref<string[]> = ref([])
    const cart: Ref<IProduct[]> = ref([])

    const getCart = (): void => {
        const storedCart: string | null = localStorage.getItem('cart')

        if (storedCart) {
            cartIds.value = [...storedCart.split(',')]

            if (!products.value.length) {
                getProducts()
            }

            const cartItems: IProduct[] = products.value.filter((item: IProduct): boolean => {
                return cartIds.value.includes(String(item.id))
            })

            cart.value = [...cartItems]
        }
    }

    onMounted(getCart)


    const addToCart = (id: number | string): void => {
        const parsedId: string = String(id)

        if (!cartIds.value.includes(parsedId)) {
            cartIds.value.push(parsedId)
            localStorage.setItem('cart', cartIds.value.join(','))
        }
    }

    const removeFromCart = (id: number | string): void => {
        const parsedId: string = String(id)

        if (cartIds.value.includes(parsedId)) {
            const updatedCart: string[] = cartIds.value.filter((item: string): boolean => item !== parsedId)

            localStorage.setItem('cart', updatedCart.join(','))

            cartIds.value = []
            cart.value = []
            getCart()
        }
    }

    const clearCart = (): void => {
        cartIds.value = []
        cart.value = []
        localStorage.removeItem('cart')
    }

    const isProductInCart = (id: number | string): boolean => {
        const parsedId: string = String(id)

        return cartIds.value.includes(parsedId)
    }

    return {cartIds, cart, addToCart, isProductInCart, removeFromCart, clearCart}
}