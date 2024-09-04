<template>
    <div>
        <div v-if="isVisible" @click="toggleVisible"
            class="bg-gray-300 bg-opacity-25 w-screen h-screen top-14 fixed z-50">
        </div>
        <nav v-if="isVisible"
            class="fixed md:right-1 md:top-14 right-0 z-50 w-full md:w-96 bg-white shadow-lg p-2 rounded-sm overflow-y-auto h-full custom-scrollbar animation-slideInFromRight ">
            <div class="space-y-4">
                <div class="text-center w-full border-b flex justify-between border-gray-100">
                    <p class="text-sm truncate flex items-center font-bold"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="size-6 text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        &nbsp; Giỏ hàng của bạn ({{ cartItems.length }})
                    </p>
                    <div @click="toggleVisible" class=" text-sm text-gray-500 truncate hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <!-- Item for each  -->
                <div v-for="product in cartItems" :key="product.id"
                    class="flex items-center w-full border-b py-1 border-gray-100">
                    <div class="w-1/3 h-full flex items-center justify-center">
                        <img :src="product.thumbnail" alt="Product Image" class="w-20 h-20 object-cover rounded-lg">
                    </div>
                    <div class="w-2/3 h pl-4 flex flex-col justify-center ">
                        <h2 class="text-lg font-semibold truncate pr-4 mb-1">{{ product.title }}</h2>
                        <p class="text-gray-600 mb-1">$ {{ product.price }} <span class="line-through">$ {{
                            product.price }}</span></p>
                        <div class="flex justify-between items-center w-24 mb-1">
                            <!-- dấu cộng  -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <!-- dấu cộng  -->
                            <!-- số lượng  -->
                            <input type="text"
                                class=" w-1/2 focus:outline-none border rounded-sm border-gray-300 text-center"
                                v-model="product.quantity">
                            <!-- số lượng  -->
                            <!-- dấu trừ  -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                            </svg>

                            <!-- dấu trừ  -->
                        </div>

                        <p class="text-sm text-gray-500 truncate">{{ product.description }}</p>
                    </div>
                </div>

                <div v-if="cartItems.length === 0" class="text-center w-full border-b border-gray-100">
                    <p class="text-sm text-gray-500 truncate">không có sản phẩm nào</p>
                </div>

                <div v-if="cartItems.length > 0" class="text-center w-full">
                    <p class="text-sm text-gray-500 truncate hover:text-red-500 m-0 cursor-pointer">Xem tất cả</p>
                </div>

                <div v-if="loading" class="text-center w-full border-b border-gray-100">
                    <p class="text-sm text-gray-500 truncate hover:text-red-500">
                        <SpinnerIndicator :type="0"></SpinnerIndicator>
                    </p>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'CartModal',
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        isVisible: {
            type: Boolean,
            default: false,
        },
        toggleVisible: {
            type: Function,
            required: true
        },
        cartItems: {
            type: Array,
            required: false,
            default: () => [
                {
                    "id": 1,
                    "title": "Essence Mascara Lash Princess",
                    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes  with this long-lasting and cruelty-free formula.",
                    "category": "beauty",
                    "price": 9.99,
                    "discountPercentage": 7.17,
                    "rating": 4.94,
                    "quantity": 2,
                    "stock": 5,
                    "tags": [
                        "beauty",
                        "mascara"
                    ],
                    "brand": "Essence",
                    "sku": "RCH45Q1A",
                    "weight": 2,
                    "dimensions": {
                        "width": 23.17,
                        "height": 14.43,
                        "depth": 28.01
                    },
                    "warrantyInformation": "1 month warranty",
                    "shippingInformation": "Ships in 1 month",
                    "availabilityStatus": "Low Stock",
                    "reviews": [
                        {
                            "rating": 2,
                            "comment": "Very unhappy with my purchase!",
                            "date": "2024-05-23T08:56:21.618Z",
                            "reviewerName": "John Doe",
                            "reviewerEmail": "john.doe@x.dummyjson.com"
                        },
                        {
                            "rating": 2,
                            "comment": "Not as described!",
                            "date": "2024-05-23T08:56:21.618Z",
                            "reviewerName": "Nolan Gonzalez",
                            "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
                        },
                        {
                            "rating": 5,
                            "comment": "Very satisfied!",
                            "date": "2024-05-23T08:56:21.618Z",
                            "reviewerName": "Scarlett Wright",
                            "reviewerEmail": "scarlett.wright@x.dummyjson.com"
                        }
                    ],
                    "returnPolicy": "30 days return policy",
                    "minimumOrderQuantity": 24,
                    "meta": {
                        "createdAt": "2024-05-23T08:56:21.618Z",
                        "updatedAt": "2024-05-23T08:56:21.618Z",
                        "barcode": "9164035109868",
                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                    },
                    "images": [
                        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                    ],
                    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                },
                {
                    "id": 2,
                    "title": "Eyeshadow Palette with Mirror",
                    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
                    "category": "beauty",
                    "price": 19.99,
                    "discountPercentage": 5.5,
                    "rating": 3.28,
                    "quantity": 1,
                    "stock": 44,
                    "tags": [
                        "beauty",
                        "eyeshadow"
                    ],
                    "brand": "Glamour Beauty",
                    "sku": "MVCFH27F",
                    "weight": 3,
                    "dimensions": {
                        "width": 12.42,
                        "height": 8.63,
                        "depth": 29.13
                    },
                    "warrantyInformation": "1 year warranty",
                    "shippingInformation": "Ships in 2 weeks",
                    "availabilityStatus": "In Stock",
                    "reviews": [
                        {
                            "rating": 4,
                            "comment": "Very satisfied!",
                            "date": "2024-05-23T08:56:21.618Z",
                            "reviewerName": "Liam Garcia",
                            "reviewerEmail": "liam.garcia@x.dummyjson.com"
                        },
                        {
                            "rating": 1,
                            "comment": "Very disappointed!",
                            "date": "2024-05-23T08:56:21.618Z",
                            "reviewerName": "Nora Russell",
                            "reviewerEmail": "nora.russell@x.dummyjson.com"
                        },
                        {
                            "rating": 5,
                            "comment": "Highly impressed!",
                            "date": "2024-05-23T08:56:21.618Z",
                            "reviewerName": "Elena Baker",
                            "reviewerEmail": "elena.baker@x.dummyjson.com"
                        }
                    ],
                    "returnPolicy": "30 days return policy",
                    "minimumOrderQuantity": 32,
                    "meta": {
                        "createdAt": "2024-05-23T08:56:21.618Z",
                        "updatedAt": "2024-05-23T08:56:21.618Z",
                        "barcode": "2817839095220",
                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                    },
                    "images": [
                        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
                    ],
                    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
                },

            ],
        }
    }
}
</script>
<style scoped></style>