<template>
    <div>
        <input
            class="self-center outline-none bg-inherit search"
            placeholder="Search"
            role="searchbox"
            type="text"
        />
        <div class="w-[18px] h-[18px]">
            <img
                alt="search"
                class="w-[50px]"
                src="@/assets/images/icons/ico-search.svg"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchBox"
}
</script>
