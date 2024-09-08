<template>
    <nav v-if="isSearchOpen"
        class="fixed md:right-16 right-0 z-50 w-full md:w-80 bg-white shadow-lg p-2 rounded-none md:rounded-lg overflow-y-auto max-h-96 custom-scrollbar">
        <div class="space-y-4">
            <div class="text-center w-full border-b flex justify-between border-gray-100">
                <p class="text-sm truncate"> <span class="text-red-600">{{ q }}</span> tìm thấy {{
                    searchResults.length }} kết
                    quả
                </p>
                <div @click="toggleSearch" class=" text-sm text-gray-500 truncate hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

            <!-- Item for each search result -->
            <div v-for="product in searchResults" :key="product.id"
                class="flex items-center w-full border-b py-1 border-gray-100">
                <div class="w-1/3 h-full flex items-center justify-center">
                    <img :src="product.thumbnail" alt="Product Image" class="w-20 h-20 object-cover rounded-lg">
                </div>
                <div class="w-2/3 h-full pl-4 flex flex-col justify-center">
                    <h2 class="text-lg font-semibold truncate">{{ product.title }}</h2>
                    <p class="text-gray-600">$ {{ product.price }}</p>
                    <p class="text-sm text-gray-500 truncate">{{ product.description }}</p>
                </div>
            </div>

            <div v-if="searchResults.length === 0" class="text-center w-full border-b border-gray-100">
                <p class="text-sm text-gray-500 truncate">không có sản phẩm nào</p>
            </div>

            <div v-if="searchResults.length > 0" class="text-center w-full">
                <p class="text-sm text-gray-500 truncate hover:text-red-500 m-0">Xem tất cả</p>
            </div>

            <div v-if="loading" class="text-center w-full border-b border-gray-100">
                <p class="text-sm text-gray-500 truncate hover:text-red-500">
                    <SpinnerIndicator :type="0"></SpinnerIndicator>
                </p>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'SearchModal',
    props: {
        q: {
            type: String,
            required: true,
        },
        isSearchOpen: {
            type: Boolean,
            required: true,
        },
        searchResults: {
            type: Array,
            required: true,
        },
        toggleSearch: {
            type: Function,
            required: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
};
</script>