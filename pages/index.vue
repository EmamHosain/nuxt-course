<script setup>
const { counter } = useCounter();
function increment() {
    counter.value++;
}
</script>
<template>
    <div>
        <h1>home page | counter : {{ counter }}</h1>
        <button @click="increment">increment</button>
        <hr>
        <ASection />
        <hr>
        <BSection />
    </div>
</template>
