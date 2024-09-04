<template>
    <div>
        <div
            class="mt-2 flex overflow-x-auto space-x-4 p-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer custom-scrollbarWhite">
            <div class="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 text-center" v-for="a in array" :key="a.id">
                <img class="w-28 mx-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                    :src="a.image" alt="image description">
                <p>{{ a.name }}</p>
            </div>
        </div>



    </div>
</template>
<script>
export default {
    name: 'CategoryNavigation',
    props: {
        array: {
            type: Array,
            default: () => [
                { id: 1, name: 'Loa', description: 'Các loại điện thoại di động', image: 'https://paramax.vn/vnt_upload/product/08_2021/loa_full_range_PARAMAX_PRO_V40_bass_15_inch.png' },
                { id: 2, name: 'Máy ảnh', description: 'Các loại máy tính xách tay, máy tính để bàn', image: 'https://binhminhdigital.com/StoreData/Images/Product/camera/canon/may-anh-canon-eos-850d-kit-ef-s18-55mm-f4-56-is-stm.jpg' },
                { id: 3, name: 'Chuột máy tính', description: 'Phụ kiện điện thoại, máy tính', image: 'https://maytinhtrangia.com/wp-content/uploads/B175.jpg' },
                { id: 4, name: 'Tai nghe ', description: 'Phụ kiện điện thoại, máy tính', image: 'https://3kshop.vn/wp-content/uploads/2022/12/3kshop-audeze-maxwell-3-1.png' },
                { id: 5, name: 'Bàn phím', description: 'Phụ kiện máy tính', image: 'https://owlgaming.vn/wp-content/uploads/2023/06/ban-phim-co-cidoo-abm098-tri-mode.jpg' },
                { id: 6, 'name': 'Đồng hồ thông minh', description: 'Thiết bị đeo tay thông minh', image: 'https://product.hstatic.net/200000547251/product/dong-ho-thong-minh-nghe-goi-kieslect-ks-pro_c438ff63d451454ca0d8f8964a6b2eac_large.jpg' },
                { id: 7, name: 'Tablet', description: 'Máy tính bảng', image: 'https://www.techone.vn/wp-content/uploads/2022/10/ipad-2022-256gb-4g-mau-hong.jpg' },
                { id: 9, name: 'Phụ kiện game', description: 'Tay cầm, tai nghe, bàn phím dành cho game', image: 'https://nguyenvu-store-medias.tn-cdn.net/2022/11/tay-cam-choi-game-pxn-9607x-hong.webp' },
                { id: 10, name: 'Ổ cứng di động', description: 'Thiết bị lưu trữ dữ liệu', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuoAKVyfV9dUastkHrottWbp6141P7RfSHg&s' }
            ],
            required: false
        }
    }
}
</script>