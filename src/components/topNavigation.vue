<template>
    <div>
        <!-- nav top  -->
        <nav
            class="fixed top-0 z-50 w-full flex justify-start md:justify-between gap-2 md:gap-0 px-2 md:px-20 py-1 md:py-1 items-center bg-base shadow-md">
            <h1 class="hidden md:block text-2xl text-white font-bold">Gizmo Shop</h1>
            <div class="block md:hidden relative">
                <img src="../assets/logoV1/custom-logo.png" class="w-14 h-14" alt="">
            </div>
            <div class="flex items-center">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input v-model="searchQuery" @input="search"
                        class="w-full text-white ml-2 outline-none bg-transparent rounded-sm focus:bg-gray-200 focus:bg-opacity-30 placeholder:text-white"
                        type="text" name="search" id="search" placeholder="Tìm kiếm..." />
                </div>
                <ul class="flex items-center space-x-6 ">
                    <li
                        class="font-semibold text-white hidden md:block  hover:bg-gray-100 hover:bg-opacity-35 px-1 py-2 rounded-sm  ">
                        Trang chủ
                    </li>
                    <li
                        class="font-semibold text-white hidden md:block  hover:bg-gray-100 hover:bg-opacity-35 px-1 py-2 rounded-sm">
                        Đối tác
                    </li>
                    <li :class="isAccountOpen ? 'bg-gray-100 bg-opacity-35' : ''"
                        class="hidden md:block hover:bg-gray-100 hover:bg-opacity-35 px-2 py-2 rounded-sm"
                        @click="toggleAccount">
                        <!-- tài khoản -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="size-6 text-white">
                            <path fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clip-rule="evenodd" />
                        </svg>
                        <!-- tài khoản -->
                    </li>
                    <li class="hidden md:block hover:bg-gray-100 hover:bg-opacity-35 px-2 py-2 rounded-sm">
                        <!-- thông báo  -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                        <!-- thông báo  -->
                    </li>
                    <li class="hidden md:block hover:bg-gray-100 hover:bg-opacity-35 px-2 py-2 rounded-sm">
                        <!-- giỏ hàng  -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <!-- giỏ hàng  -->
                    </li>
                </ul>
            </div>
        </nav>
        <!-- end nav top  -->


        <!-- search engine -->
        <nav v-if="isSearchOpen"
            class="fixed  md:right-16 right-0 z-50 w-full md:w-80 bg-white shadow-lg p-2 rounded-lg overflow-y-auto max-h-96 custom-scrollbar">
            <div class="space-y-4">
                <div class="text-center w-full border-b flex justify-end border-gray-100 ">
                    <p @click="toggleSearch" class="text-sm text-gray-500 truncate hover:text-red-500"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </p>
                </div>

                <!-- item for each -->
                <div v-for="product in searchResults" :key="product.id"
                    class="flex items-center h-24 w-full border-b py-1 border-gray-100 ">
                    <div class="w-1/3 h-full flex items-center justify-center">
                        <img :src="product.thumbnail" alt="Product Image" class="w-20 h-20 object-cover rounded-lg">
                    </div>
                    <div class="w-2/3 h-full pl-4 flex flex-col justify-center">
                        <h2 class="text-lg font-semibold truncate">{{ product.title }}</h2>
                        <p class="text-gray-600">$ {{ product.price }}</p>
                        <p class="text-sm text-gray-500 truncate">{{ product.description }}</p>
                    </div>
                </div>

                <div v-if="searchResults.length === 0" class="text-center  w-full border-b  border-gray-100 ">
                    <p class="text-sm text-gray-500 truncate">không có sản phẩm nào</p>
                </div>

                <div v-if="searchResults.length > 0" class="text-center w-full  ">
                    <p class="text-sm text-gray-500 truncate hover:text-red-500 m-0">Xem tất cả</p>
                </div>

                <div v-if="loading" class="text-center  w-full border-b  border-gray-100 ">
                    <p class="text-sm text-gray-500 truncate hover:text-red-500">
                        <SpinnerIndicator :type="0"></SpinnerIndicator>
                    </p>
                </div>

            </div>
        </nav>
        <!--end search engine -->

        <!-- Account modal -->
        <nav v-if="isAccountOpen"
            class="fixed md:right-16 right-0 h-96 z-50 w-full md:w-80 bg-white shadow-lg p-2 rounded-lg ">
            <div class="space-y-4">
                <div class="text-center w-full border-b flex justify-end border-gray-100 ">
                    <p @click="toggleAccount" class="text-sm text-gray-500 truncate hover:text-red-500"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </p>
                </div>


                <div class="flex items-center h-12 w-full  py-1 ">
                    <div class="w-1/3 h-full flex items-center justify-center">
                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="w-2/3 h-full  flex flex-col justify-center">
                        <h2 class="text-lg font-semibold truncate">
                            <a href="" class="text-lg">Đăng Nhập</a> / <a href="" class="text-lg">Đăng Ký</a>
                        </h2>
                    </div>
                </div>

                <div class="w-full  py-1">
                    <div class="bg-gray-100 px-2 py-2">
                        Quản lý đơn hàng
                    </div>
                    <div class="flex items-center space-x-2 px-2 pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <a href="#" class="text-sm">Đơn hàng đã mua</a>
                    </div>
                    <div class="flex items-center space-x-2 px-2 pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                        </svg>

                        <a href="#" class="text-sm">Nhà cung cấp</a>
                    </div>
                </div>

                <div class="w-full  py-1">
                    <div class="bg-gray-100 px-2 py-2">
                        Quản lý tài khoản
                    </div>
                    <div class="flex items-center space-x-2 px-2 pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <a href="#" class="text-sm">Thông tin cá nhân</a>
                    </div>
                    <div class="flex items-center space-x-2 px-2 pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>

                        <a href="#" class="text-sm">Cài đặt</a>
                    </div>

                </div>


            </div>
        </nav>
        <!--end Account modal -->

    </div>
</template>
<script>
import debounce from 'lodash/debounce';
import productService from '@/services/productService';
import SpinnerIndicator from '@/components/SpinnerIndicator.vue';
export default {
    name: "topNavigation",
    components: {
        SpinnerIndicator
    },
    data() {
        return {
            searchQuery: '',
            searchResults: [],
            isSearchOpen: false,
            isAccountOpen: false,
            loading: false,
        };
    },
    methods: {
        toggleSearch() {
            this.isSearchOpen = !this.isSearchOpen;
        },
        toggleAccount() {
            this.isAccountOpen = !this.isAccountOpen;
        },
        search: debounce(async function () {
            this.isSearchOpen = true;
            this.loading = false;
            if (this.searchQuery.length > 2) {
                try {
                    const response = await productService.searchProducts(this.searchQuery);
                    this.searchResults = response.products;
                } catch (error) {
                    console.error('Error fetching search results:', error);
                } finally {
                    this.loading = false;
                }
            }
        }, 300),
    },

};

</script>
