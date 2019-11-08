<template>
    <my-component v-slot="data">
        {{ data }}
    </my-component>
    <my-component>
        <template v-slot:default>
            default
        </template>
        <template v-slot:one>
            one
        </template>
    </my-component>
</template>
