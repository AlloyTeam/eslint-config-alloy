<template>
    <component :is="currentComponnet" />
    <component v-bind:is="currentComponnet" />
</template>
