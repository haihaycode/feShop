<template>
    <div>
        <div class="container py-0 md:py-2 md:px-0 hidden md:block lg:block">
            <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
            <div
                class="flex items-strech justify-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 lg:space-x-2">
                <div
                    class="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div class="flex flex-col justify-center md:w-1/2">
                        <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Tai nghe không dây
                        </h1>
                        <p class="text-base lg:text-xl text-gray-800 dark:text-white mt-2">Giảm tới <span
                                class="font-bold">50%</span></p>
                    </div>
                    <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img src="https://logico.com.vn/images/products/2023/03/22/original/tai-nghe-khong-day-chong-on-sony-wh-ch720n-1_1679458320.png"
                            alt="" class="h-[100px]" />
                    </div>
                </div>
                <div
                    class="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                    <div class="flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Máy chơi game cầm
                            tay</h1>
                        <p class="text-base lg:text-xl text-gray-800 dark:text-white">Giảm tới<span
                                class="font-bold">30%</span></p>
                    </div>
                    <div class="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt=""
                            class="md:w-20 md:h-20 lg:w-full lg:h-full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BannerSale",
}
</script>