<template>
    <div>
        <div class="hidden md:block fixed bottom-20 right-2 rounded-md z-40 h-70  ">
            <!-- container -->

            <aside class="flex flex-col items-center  text-gray-700  h-full">
                <!-- Side Nav Bar-->
                <!-- Logo Section -->
                <!-- <div class="h-16 flex items-center w-full">
                    <a class="h-6 w-6 mx-auto" href="#/">
                        <h1 class="text-center font-bold text-3xl">G</h1>
                    </a>
                </div> -->

                <ul>
                    <!-- Items Section -->
                    <li class="">
                        <a href="#/" class="h-10 px-6 flex justify-center items-center w-full
				transform transition-transform duration-300 hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-10 text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </a>
                    </li>


                    <li class="">
                        <a href="#/" class="h-10 px-6 flex justify-center items-center w-full
				transform transition-transform duration-300 hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-10 text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                            </svg>

                        </a>
                    </li>

                </ul>



                <!-- cuoi cung -->
                <div class="mt-auto h-16 flex items-center w-full">
                    <button
                        class="h-16 w-10 mx-auto flex  justify-center items-center text-blue-500 transform transition-transform duration-300 hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-10">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

            </aside>
        </div>
    </div>
</template>
<script>
export default {
    name: "miniColumnSidebar",
    data() {
        return {
            loading: false,
        }
    }
}
</script>