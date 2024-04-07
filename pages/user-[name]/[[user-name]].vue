<script setup>
// this is one kind of index page
const route = useRoute();
const userName = route.params.name;
console.log('user name',userName);
</script>
<template>
    <div>
        <h1>user page | user name : {{ $route.params.name }}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, dicta! Placeat consequatur dignissimos cumque
            quod, sit saepe, voluptates accusantium nulla laborum aspernatur amet cupiditate eum consequuntur? Perspiciatis,
            quia saepe sit voluptates iure totam fuga expedita obcaecati tempore delectus unde. Tenetur itaque voluptatibus
            sint nemo temporibus aperiam veritatis cum quia dolores.</p>
    </div>
</template>
