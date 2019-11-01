<template>
    <MyComponent :foo="abc" foo="def" />
    <MyComponent foo="abc" :foo="def" />
    <MyComponent foo="abc" foo="def" />
    <MyComponent :foo.a="abc" :foo.b="def" />
    <MyComponent class="abc" :class="def" />
</template>
