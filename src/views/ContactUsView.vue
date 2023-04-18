<template>
    <default-header/>

    <main v-if="!isFormSubmitted" class="bg-custom-main">
        <header
                class="w-full h-[320px] lg:h-[480px] bg-no-repeat bg-cover bg-center"
                style="background-image: url(/images/contact-us-banner.jpg)"
        ></header>
        <section v-if="cart.length" class="lg:container lg:mx-auto mx-2.5 sm:mx-5 pt-[50px]">
            <h2 class="text-[44px] font-bold mb-3 text-custom-gray-900 text-center lg:text-start">Cart</h2>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th class="px-6 py-3" scope="col"></th>
                        <th class="px-6 py-3" scope="col">
                            Product name
                        </th>
                        <th class="px-6 py-3" scope="col">
                            Short text
                        </th>
                        <th class="px-6 py-3 text-center" scope="col">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr v-for="cartItem in cart" :key="cartItem.id" class="bg-white border-b">
                        <td class="w-32 p-4">
                            <img :alt="cartItem.title" :src="cartItem.image">
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ cartItem.title }}
                        </td>
                        <td class="px-6 py-4">
                            {{ cartItem.short_text }}
                        </td>
                        <td class="px-6 py-4 text-center">
                            <span class="text-red-600 text-lg cursor-pointer" @click="removeFromCart(cartItem.id)"><font-awesome-icon
                                    :icon="['fas', 'xmark']"/></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="lg:container lg:mx-auto mx-2.5 sm:mx-5 py-[50px]">
            <div class="pb-10">
                <h3 class="text-[44px] text-center lg:text-start text-custom-gray-900 font-bold">
                    Contact us
                </h3>
                <div class="pt-10 text-custom-green hidden lg:block text-[20px]">*****</div>
            </div>
            <form class="flex flex-col lg:flex-row text-custom-gray-900 lg:space-x-[125px]" @submit.prevent="makeOrder">
                <div class="basis-[350px] space-y-5">
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="name">Name *</label>
                        <input id="name" v-model="contactFormData.name"
                               class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               required type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="company_name">Company Name</label>
                        <input id="company_name" v-model="contactFormData.companyName"
                               class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="position">Position</label>
                        <input id="position" v-model="contactFormData.position"
                               class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="city">City</label>
                        <input id="city" v-model="contactFormData.city"
                               class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="country">Country</label>
                        <input id="country" v-model="contactFormData.country"
                               class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="telephone">Telephone</label>
                        <input id="telephone" v-model="contactFormData.telephone"
                               class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               type="tel">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="email">Email *</label>
                        <input id="email" v-model="contactFormData.email"
                               class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               required type="email">
                    </div>

                </div>
                <div class="space-y-5 grow">
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="occupation">You are a</label>
                        <select id="occupation" v-model="contactFormData.occupation"
                                class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                                name="occupation">
                            <option :value="OccupationEnum.UNSELECTED" disabled selected>
                                -- Select your occupation --
                            </option>
                            <option :value="OccupationEnum.SEEDER">Seeder</option>
                            <option :value="OccupationEnum.DRIVER">Driver</option>
                            <option :value="OccupationEnum.OTHER">Other</option>
                        </select>
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="occupation_other">If other, please specify</label>
                        <input id="occupation_other" v-model="contactFormData.occupationOther"
                               class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="interest_in">You are interested in</label>
                        <textarea id="interest_in" v-model="contactFormData.interestIn"
                                  class="border-custom-gray-200 h-[390px] border rounded-xl outline-none p-2.5"></textarea>
                    </div>
                    <div class="flex flex-col space-y-2.5 text-[17px]">
                        <label for="captcha">Please type this code *</label>
                        <div class="flex items-center flex-col sm:flex-row justify-between">
                            <div class="flex items-center justify-evenly sm:justify-between w-full mb-3.5 sm:mb-0">
                                <img alt="captcha" class="w-[100px] h-[27px]"
                                     src="@/assets/images/content/captcha.png">
                                <input id="captcha" v-model="captcha"
                                       class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                                       type="text">
                            </div>

                            <button :disabled="isButtonDisabled"
                                    class="text-white bg-custom-green duration-500 disabled:bg-green-400 sm:rounded-full rounded-sm px-[70px] py-2.5 sm:ml-2.5 w-full sm:w-fit mt-6 sm:mt-0"
                                    type="submit">Send
                            </button>
                        </div>

                    </div>

                </div>
            </form>
        </section>
        <section class="bg-white py-[44px]">
            <div class="container mx-auto text-custom-gray-900 flex flex-col items-center text-[17px]">
                <h5 class="text-xl font-bold text-custom-green">
                    Our Address
                </h5>
                <div class="border-b border-custom-green/75 mt-[15px] mb-6 w-[188px]"></div>

                <div>AGRIDERA Seeds & Agriculture Ltd.</div>
                <div>P.O Box 103,</div>
                <div>Gedera 70750, Ishrael.</div>
                <div>Telephone: <a class="text-custom-green" href="tel:+97289449222">+972 8 944 9222</a></div>
            </div>
        </section>

    </main>
    <main v-else class="bg-custom-main">
        <section class="lg:container lg:mx-auto mx-2.5 sm:mx-5 py-14">
            <h2 class="pb-10 text-[44px]">Thanks for order</h2>
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>

                    <th class="px-6 py-3" scope="col">
                        Field
                    </th>
                    <th class="px-6 py-3" scope="col">
                        Value
                    </th>

                </tr>
                </thead>
                <tbody>

                <tr v-for="(value, key) in contactFormData" :key="key" class="bg-white border-b">
                    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize" scope="row">
                        {{ key }}
                    </th>
                    <td class="px-6 py-4">
                        {{ value }}
                    </td>
                </tr>
                </tbody>
            </table>
        </section>

    </main>
</template>

<script lang="ts" setup>
import DefaultHeader from "@/components/DefaultHeader.vue";
import useCart from "@/composables/cart";
import {computed, reactive, ref} from "vue";
import type {IContactFormData} from "@/types/IContactFormData";
import {OccupationEnum} from "@/types/IContactFormData";

const {cart, removeFromCart, clearCart} = useCart()
const contactFormData: IContactFormData = reactive({
    name: '',
    companyName: '',
    position: '',
    city: '',
    country: '',
    telephone: '',
    email: '',
    occupation: OccupationEnum.UNSELECTED,
    occupationOther: '',
    interestIn: '',
})

const captcha = ref<string>('')

const isButtonDisabled = computed(() => {
    return captcha.value !== '7CJ3'
})

const isFormSubmitted = ref<boolean>(false)
const makeOrder = () => {
    isFormSubmitted.value = true
    clearCart()
}

</script>
