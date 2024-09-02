<template>
    <div>
        <ul class="grid mx-2 gap-6 md:grid-cols-2 ">
            <li v-for="(nav, i) in  navigationBottom " :key="i">
                <input type="radio" :id="'hosting' + i" name="hosting" v-model="navIndex" :value="nav.i"
                    class="hidden peer" required />
                <label :for="'hosting' + i"
                    class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="block">
                        <div class="w-full text-lg font-semibold text-start">{{ nav.label }}</div>
                        <div class="w-full">
                            <img :src="nav.src" class="rounded-sm" alt="img not found">
                        </div>
                    </div>

                    <svg v-if="navIndex === nav.i" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>

                </label>
            </li>
        </ul>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: "settingNavigationBottom",
    data() {
        return {
            navigationBottom: [
                {
                    i: 0,
                    label: 'navigationBottom type 0',
                    src: require('@/assets/navigationBottom/0.png')
                },
                {
                    i: 1,
                    label: 'navigationBottom type 1',
                    src: require('@/assets/navigationBottom/1.png')
                },
                {
                    i: 2,
                    label: 'navigationBottom type 2',
                    src: require('@/assets/navigationBottom/2.png')
                }
            ],
            navIndex: 0,
            mdHidden: true
        }
    },
    computed: {
        ...mapGetters(['getNavigationBottom']),
        ...mapGetters(['getMdHidden']),
    },
    mounted() {
        this.mdHidden = this.getMdHidden
        this.navIndex = this.getNavigationBottom
    },
    methods: {
        ...mapActions(['updateNavigationBottom', 'updatemdHidden']),
        setNavigationBottom() {
            this.updateNavigationBottom(this.navIndex);
        }
    },
    watch: {
        navIndex() {
            this.setNavigationBottom();
        }
    }
}
</script>