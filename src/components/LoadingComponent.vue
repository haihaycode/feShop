<template>
    <div v-if="loading" class="z-30 bg-opacity-60 fixed inset-0 flex justify-center items-center bg-gray-200 m-0">
        <div class="flex flex-col justify-center items-center">
            <!-- Hình ảnh với hiệu ứng làm mờ xung quanh -->
            <img :src="image" alt="Logo"
                class="blur-img mb-4 w-[300px] h-[300px] sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover">
            <!-- Chữ "Đang tải..." với 3 dấu chấm -->
            <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Đang tải<span class="dot-anim">...</span>
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
            default: require('@/assets/logoV1/meme.gif')
        }
    }
}
</script>

<style scoped>
.blur-img {
    position: relative;
    z-index: 1;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    /* Bóng đổ mờ */
}

.blur-img::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(10px);
    /* Sử dụng cùng hình ảnh */
    background-size: cover;
    border-radius: 50%;
    /* Giữ ảnh trong hình tròn */
}

.dot-anim::after {
    content: '';
    display: inline-block;
    animation: dot-anim 1s steps(3, end) infinite;
}

@keyframes dot-anim {
    0% {
        content: '';
    }

    33% {
        content: '.';
    }

    66% {
        content: '..';
    }

    100% {
        content: '...';
    }
}
</style>
