<template>
    <div>
        <div
            class="mt-2 inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <span>Ẩn Thanh navigation bottom ở màn hình lớn </span>
            <label class="inline-flex items-center ml-3">
                <input type="checkbox" v-model="mdHidden" @change="setHiddenNav" class="sr-only" />
                <div
                    :class="['w-11 h-6 rounded-full cursor-pointer transition-colors duration-300', mdHidden ? 'bg-red-500' : 'bg-gray-200']">
                    <div
                        :class="['w-6 h-6 bg-white rounded-full shadow-md transform transition-transform', { 'translate-x-5': mdHidden }]">
                    </div>
                </div>
            </label>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "settingHiddenNav",
    data() {
        return {
            mdHidden: true
        }
    },
    computed: {
        ...mapGetters(['getMdHidden']),
    },
    mounted() {
        this.mdHidden = this.getMdHidden;
    },
    methods: {
        ...mapActions(['updatemdHidden']),
        setHiddenNav() {
            // Call Vuex action to update mdHidden
            this.updatemdHidden(this.mdHidden);
        }
    },
}
</script>

<style scoped>
/* Custom styles for the toggle switch */
</style>
