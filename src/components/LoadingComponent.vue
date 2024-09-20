<template>
    <div v-if="loading" class="z-30 bg-opacity-60 fixed inset-0 flex justify-center items-center bg-gray-200 m-0">
        <div class="flex flex-col justify-center items-center">
            <!-- Hình ảnh -->
            <img :src="image" alt="Logo"
                class="mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-60 lg:h-60 object-cover">
            <!-- Biểu tượng loading -->
            <div
                class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 mb-4">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingComponent',
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            default: require('@/assets/logoV1/v1.png')
        }
    }
}
</script>

<style scoped>
.loader {
    border-top-color: #d70018;
    /* Màu của viền trên */
    animation: spin 1s infinite linear;
    /* Hiệu ứng xoay liên tục */
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
