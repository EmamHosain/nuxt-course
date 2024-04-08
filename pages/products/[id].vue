<script setup>
const route = useRoute();
const id = route.params.id;
const { data, pending, error, refresh } = await useFetch(`https://fakestoreapi.com/products/${id}`)

</script>

<template>
    <div>

        <div class="container p-6 mx-auto">
            <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden">


                <div class="container mx-auto p-6">
                    <div class="flex  gap-10">
                        <!-- Image Section (2/5 width) -->
                        <div class="w-2/5">
                            <img width="200px" class=" w-48" :src="data.image"
                                alt="Fjallraven Backpack">
                        </div>

                        <!-- Product Info Section (3/5 width) -->
                        <div class="w-3/5 p-8">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ data.category }}</div>
                            <p 
                                class="block mt-1 text-lg leading-tight font-medium text-black ">{{ data.title }}</p>


                            <p class="mt-2 text-gray-500">{{ data.description }}</p>
                            <div class="mt-4">
                                <span class="text-gray-500">Price: </span>
                                <span class="text-gray-900 font-bold">${{ data.price }}</span>
                            </div>
                            <div class="mt-4">
                                <span class="text-gray-500">Rating: </span>
                                <span class="text-gray-900 font-bold">{{ data.rating.rate }}</span>
                                <span class="text-gray-500">({{ data.rating.count }} reviews)</span>
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
</template>