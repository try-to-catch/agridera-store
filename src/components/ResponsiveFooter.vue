<template>
    <footer>
        <div class="bg-custom-blue">
            <div
                    class="xl:container xl:mx-auto mx-2.5 flex py-[22px] justify-between lg:flex-row flex-col space-y-2.5 lg:space-y-0"
            >
                <nav class="mb-4 lg:mb-0 flex items-center justify-center">
                    <ul class="lg:space-x-[36px] lg:flex gap-2.5 grid grid-cols-2 sm:grid-cols-3 items-start font-serif justify-items-center">
                        <li><a @click.prevent class="text-white" href="#">PROFILE</a></li>
                        <li><a @click.prevent class="text-white" href="#">MANAGEMENT</a></li>
                        <li>
                            <router-link :to="{name: 'products.index'}" class="text-white">PRODUCTS</router-link>
                        </li>
                        <li><a @click.prevent class="text-white" href="#">R&D</a></li>
                        <li><a @click.prevent class="text-white" href="#">SITEMAP</a></li>
                        <li>
                            <router-link :to="{name: 'contactUs'}" class="text-white">CONTACT</router-link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <ul class="flex justify-center space-x-[14px]">
                        <li>
                            <a href="#">
                                <img alt="linkedIn" src="@/assets/images/icons/social/Ico_in.svg"
                                /></a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="instagram" src="@/assets/images/icons/social/Ico_inst.svg"
                                /></a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="youtube" src="@/assets/images/icons/social/Ico_tube.svg"
                                /></a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="twitter" src="@/assets/images/icons/social/Ico_tw.svg"
                                /></a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="meta" src="@/assets/images/icons/social/Ico_fb.svg"
                                /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div
                class="bg-custom-gray-900 text-center text-custom-gray-400 text-sm py-4"
        >
            AGRIDERA SEEDS & AGRICULTURE LTD. © 2020
        </div>
    </footer>
</template>

<script>
export default {
    name: "ResponsiveFooter"
}
</script>

<style scoped>

</style>