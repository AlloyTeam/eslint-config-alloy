<template>
    <div v-slot="data">
        {{ data }}
    </div>
    <my-component v-slot:one="data">
        {{ data }}
    </my-component>
    <my-component v-slot="data">
        {{ data }}
        <template v-slot:one>
            one
        </template>
    </my-component>
    <div>
        <template v-slot:one>
            one
        </template>
    </div>
</template>
