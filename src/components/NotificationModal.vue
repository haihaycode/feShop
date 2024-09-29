<template>
    <nav v-if="isVisible"
        class="fixed md:right-16 right-0 h-96 z-50 w-full md:w-80 bg-white shadow-lg p-2 rounded-lg overflow-y-auto max-h-96 custom-scrollbar animation-slideInFrom">
        <div class="space-y-4">
            <div class="text-center w-full flex justify-between space-x-2 ">
                <p class="flex items-center text-sm font-bold ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                    &nbsp; Thống báo ({{ notifications.length }})
                </p>
                <p @click="toggleVisible" class="text-sm text-gray-500 truncate hover:text-red-500"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </p>
            </div>

            <div v-for="(notification, index) in notifications" :key="index"
                class=" w-full border-b py-1 border-gray-100">
                <div class=" h-full flex flex-col justify-center">
                    <p class="flex items-center text-sm  truncate cursor-pointer hover:text-red-500 hover:bg-gray-100">
                        {{ notification.message }}</p>
                </div>
            </div>

            <div v-if="notifications.length === 0" class="text-center w-full border-b border-gray-100">
                <p class="text-sm text-gray-500 truncate">không có sản phẩm nào</p>
            </div>

            <div v-if="notifications.length > 0" class="text-center w-full">
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
import SpinnerIndicator from '@/components/SpinnerIndicator.vue'
export default {
    name: 'AccountModal',
    components: {
        SpinnerIndicator
    },
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
        toggleVisible: {
            type: Function,
            required: true
        },
        notifications: {
            type: Array,
            required: false,
            default: () => [
                { message: ' Tải 1.1.1.1 Faster Internet tại App Store hoặc 1.1.1.1 + WARP: Safer Internet tại CH Play.' },
                { message: ' MỪNG ĐẠI LỄ QUỐC KHÁNH 2/9 SHBET PHÁT THƯỞNG BẤT NGỜ VÔ HẠN. SHBET xin trân trọng thông báo tổ chức sự kiện phát lì xì [Ngẫu Nhiên] không giới hạn số tiền nhận thưởng. Hãy cùng bạn bè tham gia SHBET và chờ đón những phong bao giá trị vô hạn bất ngờ từ hệ thống. !' },
                { message: 'SHBET cập nhật thành công khuyến mãi : NẠP ĐẦU 188K TẶNG 188K. Chúc quý khách luôn vui vẻ và thắng lớn tại SHBET.COM !' },
                { message: ' Tải 1.1.1.1 Faster Internet tại App Store hoặc 1.1.1.1 + WARP: Safer Internet tại CH Play.' },
                { message: ' MỪNG ĐẠI LỄ QUỐC KHÁNH 2/9 SHBET PHÁT THƯỞNG BẤT NGỜ VÔ HẠN. SHBET xin trân trọng thông báo tổ chức sự kiện phát lì xì [Ngẫu Nhiên] không giới hạn số tiền nhận thưởng. Hãy cùng bạn bè tham gia SHBET và chờ đón những phong bao giá trị vô hạn bất ngờ từ hệ thống. !' },
                { message: 'SHBET cập nhật thành công khuyến mãi : NẠP ĐẦU 188K TẶNG 188K. Chúc quý khách luôn vui vẻ và thắng lớn tại SHBET.COM !' },
            ],
        },
    },

}
</script>