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
                    <input v-model="searchQuery" @input="search" @click="toggleSearch"
                        class="w-full text-white ml-2 outline-none bg-transparent rounded-sm focus:bg-gray-200 focus:bg-opacity-30 placeholder:text-white"
                        type="text" name="search" id="search" placeholder="Tìm kiếm..." />
                </div>
                <ul class="flex items-center space-x-6">
                    <!-- trang chủ -->
                    <li
                        class="font-semibold text-white hidden md:block  hover:bg-gray-100 hover:bg-opacity-35 px-1 py-2 rounded-sm  ">
                        Trang chủ
                    </li>
                    <li
                        class="font-semibold text-white hidden md:block  hover:bg-gray-100 hover:bg-opacity-35 px-1 py-2 rounded-sm  ">
                        Tin công nghệ
                    </li>
                    <!-- trang chủ -->
                    <!-- đối tác  -->
                    <li
                        class="font-semibold text-white hidden md:block  hover:bg-gray-100 hover:bg-opacity-35 px-1 py-2 rounded-sm">
                        Đối tác
                    </li>
                    <!-- đối tác  -->
                    <!-- tài khoản -->
                    <li :class="isAccountOpen ? 'bg-gray-100 bg-opacity-35' : ''"
                        class="hidden md:block hover:bg-gray-100 hover:bg-opacity-35 px-2 py-2 rounded-sm"
                        @click="toggleAccount">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="size-6 text-white">
                            <path fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clip-rule="evenodd" />
                        </svg>

                    </li>
                    <!-- tài khoản -->
                    <!-- thông báo  -->
                    <li :class="isNotificationOpen ? 'bg-gray-100 bg-opacity-35' : ''" @click="toggleNotification"
                        class="hidden md:block hover:bg-gray-100 hover:bg-opacity-35 px-2 py-2 rounded-sm">
                        <div class="relative inline-block">
                            <!-- SVG biểu tượng thông báo -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>

                            <!-- Hiển thị số lượng thông báo -->
                            <span
                                class="absolute bottom-0 right-1 transform translate-x-1/2 translate-y-1/2  text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                                6
                            </span>
                        </div>
                    </li>
                    <!-- thông báo  -->
                    <!-- giỏ hàng  -->
                    <li :class="isCartModalOpen ? 'bg-gray-100 bg-opacity-35' : ''" @click="toggleCartModal"
                        class="hidden md:block hover:bg-gray-100 hover:bg-opacity-35 px-2 py-2 rounded-sm">
                        <div class="relative inline-block">
                            <!-- SVG của túi mua sắm -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <!-- Hiển thị số sản phẩm -->
                            <span
                                class="absolute bottom-0 right-1 transform translate-x-1/2 translate-y-1/2 bg-blue-500 text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                                2
                            </span>
                        </div>
                    </li>
                    <!-- giỏ hàng  -->
                </ul>
            </div>
        </nav>
        <!-- end nav top  -->

        <!-- search engine -->
        <SearchModal :isSearchOpen="isSearchOpen" :searchResults="searchResults" :toggleSearch="toggleSearch"
            :q="searchQuery" :loading="loading" />
        <!--end search engine -->
        <!-- Account modal -->
        <AccountModal :isAccountOpen="isAccountOpen" :toggleAccount="toggleAccount"></AccountModal>
        <!--end Account modal -->
        <!-- Notication modal -->
        <NotificationModal :isVisible="isNotificationOpen" :toggleVisible="toggleNotification"></NotificationModal>
        <!-- Notication modal -->
        <!-- Cart modal -->
        <CartModal :isVisible="isCartModalOpen" :toggleVisible="toggleCartModal"></CartModal>

    </div>
</template>
<script>
import debounce from 'lodash/debounce';
import productService from '@/services/productService';
import AccountModal from './AccountModal.vue';
import SearchModal from './SearchModal.vue';
import NotificationModal from './NotificationModal.vue';
import CartModal from './CartModal.vue';
export default {
    name: "topNavigation",
    components: {
        AccountModal,
        SearchModal,
        NotificationModal,
        CartModal
    },
    data() {
        return {
            searchQuery: '',
            searchResults: [],
            isSearchOpen: false,
            isAccountOpen: false,
            isNotificationOpen: false,
            isCartModalOpen: false,
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
        toggleNotification() {
            this.isNotificationOpen = !this.isNotificationOpen;
        },
        toggleCartModal() {
            this.isCartModalOpen = !this.isCartModalOpen;
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
