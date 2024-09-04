<template>
    <nav v-if="isAccountOpen"
        class="fixed md:right-16 right-0 h-96 z-50 w-full md:w-80 bg-white shadow-lg p-2 rounded-lg animation-slideInFrom">
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
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
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
</template>
<script>
export default {
    name: 'AccountModal',
    props: {
        isAccountOpen: {
            type: Boolean,
            default: false,
        },
        toggleAccount: {
            type: Function,
            required: true
        }
    },

}
</script>