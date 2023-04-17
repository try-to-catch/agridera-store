<template>
    <ul>
        <li>
            <router-link :to="{name: 'home'}" class="text-custom-gray-900">Products</router-link>
        </li>
        <li>
            <a @click.prevent class="text-custom-gray-900" href="#">Company Profile</a>
        </li>
        <li>
            <router-link :to="{name: 'products.index'}" class="text-custom-gray-900">Products</router-link>
        </li>
        <li><a @click.prevent class="text-custom-gray-900" href="#">Services</a></li>
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