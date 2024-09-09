<template>
    <div class="mt-0 md:mt-2 grid lg:grid-cols-3 md:grid-cols-1 gap-2">
        <!-- Phần carousel chiếm 2 cột -->
        <div class="lg:col-span-2 md:col-span-1 overflow-hidden ">
            <div class="relative w-full">
                <!-- Nút chuyển carousel lùi -->
                <div @click="changeNewIndex(newsIndex - 1)"
                    class="absolute left-0 top-1/2 transform -translate-y-1/2    text-white p-2 cursor-pointer z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5l-6-6 6-6" />
                    </svg>
                </div>

                <marquee behavior="" direction=""
                    class="bg-gray-100 bg-opacity-30 text mt-1 hidden md:hidden lg:hidden">
                    ☞ [ <code>Tin mới</code> ]
                    {{ news[newsIndex].title
                    }}
                    <span class="hashtags">
                        <span class="text-red-500">#GizmoShop</span>
                        <span class="text-blue-500">#CôngNghệ</span>
                        <span class="text-green-500">#Gadget</span>
                        <span class="text-yellow-500">#Sale</span>
                        <span class="text-purple-500">#GiảmGiá</span>
                        <span class="text-pink-500">#MớiNhất</span>
                        <span class="text-indigo-500">#TechLover</span>
                        <span class="text-teal-500">#Smartphone</span>
                        <span class="text-orange-500">#Laptop</span>
                        <span class="text-gray-500">#ĐồChơiCôngNghệ</span>
                    </span>

                    Gizmo Shop: ⚡ Công nghệ đỉnh cao, trải nghiệm tuyệt vời! ⚡ Gizmo Shop: Gadget mới nhất, giá cả siêu
                    hấp dẫn! Gizmo Shop: Khám phá vũ trụ công nghệ cùng Gizmo Shop!
                </marquee>

                <!-- Container chứa các hình ảnh carousel -->
                <div class="carousel-container w-full flex transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateX(-${newsIndex * 100}%)` }">
                    <div v-for="n in news" :key="n.id" class="relative w-full flex-shrink-0">
                        <img :src="n.image" alt="Product Image"
                            class="w-full h-[150px] md:h-[430px] object-fill md:object-cover rounded-none">
                        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                            <h2 class="ntitle">{{ n.title }}</h2>
                        </div>
                    </div>
                </div>


                <!-- Nút chuyển carousel tới -->
                <div @click="changeNewIndex(newsIndex + 1)"
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 cursor-pointer z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l6 6-6 6" />
                    </svg>
                </div>
            </div>

            <!-- Phần tiêu đề tin tức -->
            <div class="hidden md:hidden lg:block mt-2 overflow-x-auto custom-scrollbarWhite">
                <div class="grid grid-cols-5 gap-4 min-w-14">
                    <div v-for="n in news" :key="n.id"
                        :class="news[newsIndex].id === n.id ? ' bg-gray-100 bg-opacity-30 text-red-500' : ''"
                        class="col-span-1  p-1 cursor-pointer">
                        <div @click="changeNewIndexById(n.id)">
                            <p class="text-sm1 w-full items-center justify-between flex">
                                <img src="../assets/components/new_label.svg" class="w-10" alt="">
                                <span>{{ n.date }} &nbsp;</span>
                            </p>
                            <p class="text-start text-sm1">{{ n.title }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Phần tin công nghệ chiếm 1 cột, ẩn trên các thiết bị nhỏ hơn sm -->
        <div class="col-span-1 bg-gray-100 bg-opacity-30 relative hidden md:block ">
            <div class="bg-base w-1/2 text-white font-normal">TIN CÔNG NGHỆ</div>

            <div v-for="n in news.slice(0, 5)" :key="n.id" class="flex gap-4 w-full border-b py-2 p-1 border-gray-100">
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
            <div class="absolute bottom-0 w-full bg-gray-100 ">
                <p class="text-center cursor-pointer">Xem thêm tin tức ...</p>
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
                    id: 1,
                    title: 'Hướng dẫn kiểm tra dung lượng pin và số lần sạc trên Surface',
                    image: 'https://shopcongnghe.com.vn/wp-content/uploads/kiem-tra-pin-va-so-lan-sac-tren-surface.png',
                    date: '2 ngày trước'
                },
                {
                    id: 2,
                    title: 'Những tính năng nổi bật của MacBook M2 mới ra mắt',
                    image: 'https://minhtuanmobile.com/uploads/blog/co-nen-doi-macbook-pro-m2-pro-2022-hay-mua-mau-macbook-khac-ngay-bay-gio-220718074915.jpg',
                    date: '3 ngày trước'
                },
                {
                    id: 3,
                    title: 'Cách tối ưu hiệu suất khi sử dụng Windows 11',
                    image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-11-PC-with-Start-menu-sitting-on-a-table-RW1drFT?scl=1',
                    date: '4 ngày trước'
                },
                {
                    id: 4,
                    title: 'Lợi ích của việc sử dụng màn hình kép trong công việc',
                    image: 'https://cdn.mediamart.vn/images/news/cach-chia-doi-man-hinh-may-tinh-laptop-win-11-cc-d_f24ba051.jpg',
                    date: '5 ngày trước'
                },
                {
                    id: 5,
                    title: 'So sánh iPad Pro và Surface Pro: Đâu là sự lựa chọn tốt hơn?',
                    image: 'https://i.insider.com/657347100ec98e92f74d89f3?width=700',
                    date: '6 ngày trước'
                }
            ],
            newsIndex: 0,
        };
    },
    mounted() {
        this.startAutoChangeNewsIndex();
    },
    methods: {
        changeNewIndex(index) {
            if (index < 0) {
                this.newsIndex = this.news.length - 1;
            } else if (index >= this.news.length) {
                this.newsIndex = 0;
            } else {
                this.newsIndex = index;
            }
        },
        changeNewIndexById(id) {
            const index = this.news.findIndex(n => n.id === id);
            if (index !== -1) {
                this.changeNewIndex(index);
            }
        },
        startAutoChangeNewsIndex() {
            setInterval(() => {
                this.changeNewIndex(this.newsIndex + 1);
            }, 2000); // 2000 milliseconds = 2 seconds
        }
    }
};
</script>

<style scoped>
.carousel-container {
    display: flex;
}
</style>
