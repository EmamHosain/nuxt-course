<template>
    <div>
        <ClientOnly>
            <h1>home page</h1>
            <template #fallback>
                <p>Loading...</p>
            </template>
        </ClientOnly>
    </div>
</template>