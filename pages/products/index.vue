<script setup>
// all product will not show when the all data not fetching and without loading 
const { data, pending, error, refresh } = await useFetch('https://fakestoreapi.com/products')

function refreshData() {
    // refresh(); // refresh the page then the data will fetch
      // clearNuxtData();  // clear cache of the current page, after the  data will not show
    // refreshNuxtData(); // refresh data

}
</script>
<template>
    <div>

        <div class="text-center my-2"><button @click="refreshData"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">refresh
                data</button></div>
        <div class="container mx-auto p-6">
            <div v-if="error">
                <h1>error</h1>
            </div>
            <div v-else-if="pending">
                <h1 class="text-center font-bold text-3xl">Loading...</h1>
            </div>
            <div v-else>
                <h1 class="text-center font-bold text-3xl">without lazy loading</h1>
                <div v-for="item in data" :key="item.id">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-3">



                        <div class="md:flex">
                            <div class="md:flex-shrink-0">

                                <img class="h-48 w-full object-cover md:w-48" :src="item.image" :alt="item.title">
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ item.category
                                }}
                                </div>
                                <nuxt-link class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                                    :to="`/products/${item.id}`">{{ item.title }}</nuxt-link>
                                <p class="mt-2 text-gray-500">{{ item.description }}</p>
                                <div class="mt-4">
                                    <span class="text-gray-500">Price: </span>
                                    <span class="text-gray-900 font-bold">${{ item.price }}</span>
                                </div>
                                <div class="mt-4">
                                    <span class="text-gray-500">Rating: </span>
                                    <span class="text-gray-900 font-bold">{{ item.rating.rate }}</span>
                                    <span class="text-gray-500">({{ item.rating.count }} reviews)</span>
                                </div>
                                <div class="mt-4">
                                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to
                                        Cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
