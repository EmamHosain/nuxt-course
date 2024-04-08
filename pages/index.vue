<script setup>
// composables method 1
const userText = useUser();
console.log(userText);
</script>
<template>
    <div>
        <h1>home page | user text : {{ userText }}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, dicta! Placeat consequatur dignissimos cumque
            quod, sit saepe, voluptates accusantium nulla laborum aspernatur amet cupiditate eum consequuntur? Perspiciatis,
            quia saepe sit voluptates iure totam fuga expedita obcaecati tempore delectus unde. Tenetur itaque voluptatibus
            sint nemo temporibus aperiam veritatis cum quia dolores.</p>
    </div>
</template>
