<template>
    <div>
        <ul class="flex">
            <li><nuxt-link to="/">home page</nuxt-link></li>
            <li><nuxt-link to="/about">about page</nuxt-link></li>
            <li><nuxt-link to="/contact">contact page</nuxt-link></li>


        </ul>
    </div>
</template>

<style scoped>
.flex{
    display: block;
    display: flex;
   
}
.flex li{
    margin: 1rem;
}
.router-link-active{
  background-color: green;
}
</style>