<template>
  <div
    class="grid md:grid-cols-3 grid-cols-1 border my-4 rounded-sm"
    style="
      background-image: url(https://img.freepik.com/free-vector/red-diagonal-geometric-shape-with-halftone-detailed-background_1409-2103.jpg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    "
  >
    <div
      class="col-span-1 md:block lg:block overflow-x-hidden md:ml-4 ml-0 mt-4"
    >
      <div
        class="transition-transform duration-500 ease-in-out carousel-container rounded-sm md:h-full"
        :style="{ transform: `translateX(-${newsIndex * 100}%)` }"
      >
        <div
          v-for="n in list"
          :key="n.id"
          class="relative w-full flex-shrink-0 md:h-full flex justify-center items-center"
        >
          <voucher :name="n.image" :discount="n.id"></voucher>
        </div>
      </div>
    </div>

    <div class="col-span-2 relative">
      <div class="p-4">
        <!-- Nút Previous -->
        <button
          @click="scrollLeft"
          class="md:block lg:block absolute top-1/2 left-0 md:left-[-10px] transform -translate-y-1/2 bg-white shadow p-2 rounded-full duration-300 hover:scale-150"
        >
          <svg
            data-v-18c96e6a=""
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3"
          >
            <path
              data-v-18c96e6a=""
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5l-6-6 6-6"
            ></path>
          </svg>
        </button>
        <div
          ref="scrollContainer"
          class="custom-scrollbarWhite overflow-x-auto hide-scrollbar"
        >
          <ul
            class="grid md:grid-rows-3 grid-rows-2 grid-flow-col gap-1 md:gap-4 lg:gap-4 items-center"
          >
            <li
              v-for="(a, index) in array"
              :key="index"
              class="w-[150px] text-center"
            >
              <img
                :src="a.logo"
                :alt="a.ten"
                class="w-full h-[75px] md:h-[80px] lg:h-[150px] bg-white object-contain mx-auto rounded-md"
              />
            </li>
          </ul>
        </div>

        <!-- Nút Next -->
        <button
          @click="scrollRight"
          class="md:block lg:block absolute top-1/2 right-0 md:right-[-10px] transform -translate-y-1/2 bg-white shadow p-2 rounded-full duration-300 hover:scale-150"
        >
          <svg
            data-v-18c96e6a=""
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3"
          >
            <path
              data-v-18c96e6a=""
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l6 6-6 6"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Voucher from "@/components/Voucher.vue";
export default {
  components: { Voucher },
  name: "BannerCategories",
  component: {
    Voucher,
  },
  data() {
    return {
      array: Array.from({ length: 30 }, (_, index) => ({
        //   ten: `Thương hiệu ${index + 1}`,
        logo: require(`@/assets/congngheshop.vn/Screenshot_${index + 2}.png`),
      })),
      list: [
        {
          id: 1,
          image: "https://cf.shopee.vn/file/sg-11134258-7rdy9-lzt5ctrseg4s92",
        },
        {
          id: 2,
          image: "https://cf.shopee.vn/file/sg-11134258-7rdvu-lzt51eeyde9g65",
        },
        {
          id: 3,
          image: "https://cf.shopee.vn/file/vn-11134258-7r98o-lzt52j1gx6e989",
        },
        {
          id: 4,
          image: "https://cf.shopee.vn/file/sg-11134258-7rdya-lzt56dwtp8c461",
        },
        {
          id: 5,
          image: "https://cf.shopee.vn/file/sg-11134258-7rdya-lzt56dwtp8c461",
        },
      ],
      newsIndex: 0,
    };
  },
  mounted() {
    this.startAutoChangeNewsIndex();
  },
  methods: {
    scrollLeft() {
      const container = this.$refs.scrollContainer;
      if (container) {
        container.scrollBy({
          left: -850,
          behavior: "smooth",
        });
      }
    },
    scrollRight() {
      const container = this.$refs.scrollContainer;
      if (container) {
        container.scrollBy({
          left: 850,
          behavior: "smooth",
        });
      }
    },
    changeNewIndex(index) {
      if (index < 0) {
        this.newsIndex = this.list.length - 1;
      } else if (index >= this.list.length) {
        this.newsIndex = 0;
      } else {
        this.newsIndex = index;
      }
    },
    startAutoChangeNewsIndex() {
      setInterval(() => {
        this.changeNewIndex(this.newsIndex + 1);
      }, 2000); // 2000 milliseconds = 2 seconds
    },
  },
};
</script>

<style scoped>
.carousel-container {
  display: flex;
}
</style>