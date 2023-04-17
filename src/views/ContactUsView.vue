<template>
    <default-header/>

    <main class="bg-custom-main">
        <header
            class="w-full h-[320px] lg:h-[480px] bg-no-repeat bg-cover bg-center"
            style="background-image: url(/images/contact-us-banner.jpg)"
        ></header>

        <section class="lg:container lg:mx-auto mx-2.5 sm:mx-5 py-[50px]">
            <div class="pb-10">
                <h3 class="text-[44px] text-center lg:text-start text-custom-gray-900 font-bold">
                    Contact us
                </h3>
                <div class="pt-10 text-custom-green hidden lg:block text-[20px]">*****</div>
            </div>
            <form class="flex flex-col lg:flex-row text-custom-gray-900 lg:space-x-[125px]">
                <div class="basis-[350px] space-y-5">
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="name">Name *</label>
                        <input class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5" id="name"
                               required type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="company_name">Company Name</label>
                        <input class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               id="company_name" type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="position">Position</label>
                        <input class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5" id="position"
                               type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="city">City</label>
                        <input class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5" id="city"
                               type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="country">Country</label>
                        <input class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5" id="country"
                               type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="telephone">Telephone</label>
                        <input class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5" id="telephone"
                               type="tel">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="email">Email *</label>
                        <input class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5" id="email"
                               required type="email">
                    </div>

                </div>
                <div class="space-y-5 grow">
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="occupation">You are a</label>
                        <select class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                                id="occupation"
                                name="occupation">
                            <option disabled selected value="0">-- Select your occupation --</option>
                            <option value="1">Seeder</option>
                            <option value="2">Driver</option>
                            <option value="3">Seed producer</option>
                        </select>
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="occupation_other">If other, please specify</label>
                        <input class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                               id="occupation_other" type="text">
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <label class="text-[17px]" for="interest_in">You are interested in</label>
                        <textarea class="border-custom-gray-200 h-[390px] border rounded-xl outline-none p-2.5"
                                  id="interest_in"></textarea>
                    </div>
                    <div class="flex flex-col space-y-2.5 text-[17px]">
                        <label for="captcha">Please type this code</label>
                        <div class="flex items-center flex-col sm:flex-row justify-between">
                            <div class="flex items-center justify-evenly sm:justify-between w-full mb-3.5 sm:mb-0">
                                <img alt="captcha" class="w-[100px] h-[27px]"
                                     src="@/assets/images/content/captcha.png">
                                <input class="border-custom-gray-200 h-[55px] border rounded-xl outline-none px-2.5"
                                       id="captcha" type="text">
                            </div>

                            <button class="text-white bg-custom-green sm:rounded-full rounded-sm px-[70px] py-2.5 sm:ml-2.5 w-full sm:w-fit mt-6 sm:mt-0"
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
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";

export default {
    name: "ContactUsView",
    components: {DefaultHeader}
}
</script>

<style scoped>

</style>