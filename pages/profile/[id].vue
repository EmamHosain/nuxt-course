<script setup>
definePageMeta({
    validate:async(route)=>{
        return  /^[0-9]+$/.test(route.params.id)
    }
})
const route = useRoute();
const id = route.params.id;
</script>
<template>
    <div>
        <h1>profile id |id: {{ id }}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, dicta! Placeat consequatur dignissimos cumque
            quod, sit saepe, voluptates accusantium nulla laborum aspernatur amet cupiditate eum consequuntur? Perspiciatis,
            quia saepe sit voluptates iure totam fuga expedita obcaecati tempore delectus unde. Tenetur itaque voluptatibus
            sint nemo temporibus aperiam veritatis cum quia dolores.</p>
    </div>
</template>