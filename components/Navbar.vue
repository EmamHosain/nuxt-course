<script setup>

</script>
<template>
    <div class="bg-blue-500 p-4 ">
        <div class="flex justify-between items-center w-11/12  mx-auto ">
            <!-- Logo -->
            <div class="flex items-center space-x-2">
                <!-- <img src="/path/to/your/logo.png" alt="Logo" class="h-8 w-8"> -->
                <span class="text-white text-xl font-semibold">Logo</span>
            </div>

            <!-- Navigation Links -->
            <ul class="flex space-x-4">
                <li>
                    <NuxtLink to="/" class="text-white hover:text-gray-300">index</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="text-white hover:text-gray-300">about</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact" class="text-white hover:text-gray-300">contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products" class="text-white hover:text-gray-300">products</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products/lazy" class="text-white hover:text-gray-300">lazy products</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login" class="text-white hover:text-gray-300">login</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>