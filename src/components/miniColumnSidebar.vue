<template>
    <div>
        <div class="hidden md:block fixed top-20 left-2 rounded-md z-50 h-70  bg-gray-200">
            <!-- container -->

            <aside class="flex flex-col items-center bg-white text-gray-700 shadow h-full">
                <!-- Side Nav Bar-->

                <div class="h-16 flex items-center w-full">
                    <!-- Logo Section -->
                    <a class="h-6 w-6 mx-auto" href="#/">
                        <h1 class="text-center font-bold text-3xl">G</h1>
                    </a>
                </div>

                <ul>
                    <!-- Items Section -->
                    <li v-for="(item, i) in arrayItem " :key="i" class="hover:bg-gray-100">
                        <a href="#/" class="h-16 px-6 flex justify-center items-center w-full
					focus:text-orange-500 transform transition-transform duration-300 hover:scale-125">
                            <img :src="item.image" alt="" class="w-7 h-7">

                        </a>
                    </li>
                </ul>



                <!-- cuoi cung -->
                <div class="mt-auto h-16 flex items-center w-full">
                    <button
                        class="h-16 w-10 mx-auto flex  justify-center items-center focus:text-orange-500  focus:outline-none transform transition-transform duration-300 hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 h-5 w-5 text-red-700">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>

            </aside>
        </div>
    </div>
</template>
<script>
export default {
    name: "miniColumnSidebar",
    data() {
        return {
            arrayItem: [
                {
                    id: 1,
                    name: "Iphone",
                    icon: "Iphone item",
                    image: require('@/assets/categoriesImage/phonne-24x24.png'),
                    link: "",
                },
                {
                    id: 2,
                    name: "Laptop",
                    icon: "Laptop item",
                    image: require('@/assets/categoriesImage/laptop-24x24.png'),
                    link: "",
                },
                {
                    id: 3,
                    name: "Tablet",
                    icon: "Tablet Item",
                    image: require('@/assets/categoriesImage/tablet-24x24.png'),
                    link: "",
                },
                {
                    id: 4,
                    name: "Phu kien",
                    icon: "Phu Kien Item",
                    image: require('@/assets/categoriesImage/phu-kien-24x24.png'),
                    link: "",
                },
                {
                    id: 5,
                    name: "Dong ho Thong Minh",
                    icon: "Dong ho Thong Minh Item",
                    image: require('@/assets/categoriesImage/smartwatch-24x24.png'),
                    link: "",
                },
                // {
                //     id: 6,
                //     name: "Login",
                //     icon: "login",
                //     link: "/login",
                // },
                // {
                //     id: 7,
                //     name: "Signup",
                //     icon: "signup",
                //     link: "/signup",
                // },
            ]
        }
    }
}
</script>