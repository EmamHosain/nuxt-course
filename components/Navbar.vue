<script setup>
const userName = ref('emamhossain');
const profile = ref('facebook');
const profileId = ref('234');
const profileName = ref('hossain');

</script>
<template>
    <div>
        <ul>
            <li>
                <NuxtLink to="/">index</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">about</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">contact</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog">blog post page</NuxtLink>
            </li>

            <!-- dynamic route -->
            <p>dynamic route</p>
            <li>
                <NuxtLink :to="`/user-${userName}`">user name</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="`/profile/profile-${profile}`">profile</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="`/profile/${profileId}`">profile id</NuxtLink>
            </li>
        </ul>
    </div>
</template>