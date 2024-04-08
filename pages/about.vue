<script setup>
// thai is called anonymourse inline middleware 
// definePageMeta({
//     middleware:function(to,form){
//         const isLoggedIn = false;
//         if(!isLoggedIn){
//             return navigateTo('/login')
//         }
//     }
// })



// that is called named route middleware
// definePageMeta({
//     middleware: 'auth'
// })

const method_2 = userProfile();
</script>
<template>
    <div>
        <h1>about page | method 2 : {{ method_2 }}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, dicta! Placeat consequatur dignissimos cumque
            quod, sit saepe, voluptates accusantium nulla laborum aspernatur amet cupiditate eum consequuntur? Perspiciatis,
            quia saepe sit voluptates iure totam fuga expedita obcaecati tempore delectus unde. Tenetur itaque voluptatibus
            sint nemo temporibus aperiam veritatis cum quia dolores.</p>
    </div>
</template>
