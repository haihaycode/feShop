<template>
  <div
    class="voucher bg-yellow-400 text-white p-5 border-2 border-red-600 rounded-lg text-center w-72 relative"
  >
    <h2 class="voucher-title bg-red-600 p-2 rounded mb-3 text-white">
      {{ name }}
    </h2>
    <p class="discount text-2xl font-bold text-red-600 mb-3">
      Giảm giá: {{ discount }}%
    </p>
    <p class="expiry-date text-lg text-gray-800 mb-5">Thời hạn: {{ formattedDate }}</p>
    <button
      class="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
    >
      Lấy voucher
    </button>
  </div>
</template>

<script>
export default {
  name: "VoucherComponent",
  props: {
    name: {
      type: String,
      default: "...",
    },
    discount: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      default: () => {
        const today = new Date();
        // Set time to 00:00:00 to keep only the date part
        return new Date(today.getFullYear(), today.getMonth(), today.getDate());
      },
    },
  },
  computed: {
    formattedDate() {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return this.date.toLocaleDateString('en-GB', options); // Format: dd/mm/yyyy
    }
  }
};
</script>
