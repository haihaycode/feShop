<template>
    <div class="mt-2 flex gap-2 h-450">
        <div class="flex-2 p-4">
            <!-- Phần carousel -->
            <div class="relative w-full">
                <!-- Nút chuyển carousel lùi -->
                <div
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5l-6-6 6-6" />
                    </svg>
                </div>

                <!-- Hình ảnh carousel -->
                <img src="https://shopcongnghe.com.vn/wp-content/uploads/kiem-tra-pin-va-so-lan-sac-tren-surface.png"
                    alt="Product Image" class="w-full h-64 object-cover rounded-sm">

                <!-- Nút chuyển carousel tới -->
                <div
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l6 6-6 6" />
                    </svg>
                </div>
            </div>

            <!-- Phần tiêu đề tin tức -->
            <div class="flex flex-wrap gap-4 mt-4">
                <div class="w-1/4">
                    <div class="bg-gray-200 p-4 rounded-sm">Tiêu đề Tin 1</div>
                </div>
                <div class="w-1/4">
                    <div class="bg-gray-200 p-4 rounded-sm">Tiêu đề Tin 2</div>
                </div>
                <div class="w-1/4">
                    <div class="bg-gray-200 p-4 rounded-sm">Tiêu đề Tin 3</div>
                </div>
                <div class="w-1/4">
                    <div class="bg-gray-200 p-4 rounded-sm">Tiêu đề Tin 4</div>
                </div>
            </div>

        </div>

        <div class="flex-1 bg-gray-100 p-1">
            <div class="bg-base w-1/2 text-white p-2 font-normal">TIN CÔNG NGHỆ</div>

            <div v-for="n in news.slice(0, 4)" :key="n.title" class="flex gap-4 w-full border-b py-2 border-gray-100">
                <!-- Hình bên trái -->
                <div class="w-1/4">
                    <img :src="n.image" alt="Product Image" class="w-full h-20 object-cover rounded-sm">
                </div>
                <!-- Nội dung bên phải -->
                <div class="w-3/4">
                    <h2 class="text-lg font-normal text-start">{{ n.title }}</h2>
                    <p class="text-gray-600 text-start">{{ n.date }}</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'NewsComponent',
    data() {
        return {
            news: [
                {
                    title: 'Hướng dẫn kiểm tra dung lượng pin và số lần sạc trên Surface',
                    image: 'https://shopcongnghe.com.vn/wp-content/uploads/kiem-tra-pin-va-so-lan-sac-tren-surface.png',
                    date: '2 ngày trước'
                },
                {
                    title: 'Những tính năng nổi bật của MacBook M2 mới ra mắt',
                    image: 'https://minhtuanmobile.com/uploads/blog/co-nen-doi-macbook-pro-m2-pro-2022-hay-mua-mau-macbook-khac-ngay-bay-gio-220718074915.jpg',
                    date: '3 ngày trước'
                },
                {
                    title: 'Cách tối ưu hiệu suất khi sử dụng Windows 11',
                    image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-11-PC-with-Start-menu-sitting-on-a-table-RW1drFT?scl=1',
                    date: '4 ngày trước'
                },
                {
                    title: 'Lợi ích của việc sử dụng màn hình kép trong công việc',
                    image: 'https://cdn.mediamart.vn/images/news/cach-chia-doi-man-hinh-may-tinh-laptop-win-11-cc-d_f24ba051.jpg',
                    date: '5 ngày trước'
                },
                {
                    title: 'So sánh iPad Pro và Surface Pro: Đâu là sự lựa chọn tốt hơn?',
                    image: 'https://i.insider.com/657347100ec98e92f74d89f3?width=700',
                    date: '6 ngày trước'
                }
            ]

        }
    }
}
</script>
<style scoped>
.title-news {
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 44%, 0% 0%);
}
</style>