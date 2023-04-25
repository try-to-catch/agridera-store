<template>
    <ul>
        <li>
            <router-link :to="{name: 'home'}" class="text-custom-gray-900">Products</router-link>
        </li>
        <li>
            <router-link :to="{name: 'getPet'}" class="text-custom-gray-900">Random pet</router-link>
        </li>
        <li>
            <router-link :to="{name: 'products.index'}" class="text-custom-gray-900">Products</router-link>
        </li>
        <li><router-link :to="{name: 'getCountries'}" class="text-custom-gray-900">Countries</router-link></li>
        <li><a @click.prevent class="text-custom-gray-900" href="#">R & D</a></li>
        <li>
            <router-link :to="{name: 'contactUs'}" class="text-custom-gray-900">Contact</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "NavigationLinks"
}
</script>