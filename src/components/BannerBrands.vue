<template>


    <div class="relative flex overflow-x-hidden">
        <div class="animate-marquee whitespace-nowrap">
            <h2 class="text-white text-base md:text-3xl font-bold py-4 flex items-center justify-start gap-4">
                <div class="w-auto px-4 rounded-2xl flex-shrink-0" v-for="(a, index) in array" :key="index">
                    <img :src="a.logo" alt="" class="md:w-[200px] md:h-[80px] w-[100px] h-[30px]  object-contain ">
                </div>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerBrands",
    data() {
        return {
            array: Array.from({ length: 30 }, (_, index) => ({
                ten: `Thương hiệu ${index + 1}`,
                logo: require(`@/assets/congngheshop.vn/Screenshot_${index + 2}.png`)
            }))
        }
    }
}
</script>