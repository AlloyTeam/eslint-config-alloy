<template>
  <ListComponent>
    <template v-slot:name="props">
      {{ props.title }}
    </template>
    <template slot="name" slot-scope="props">
      {{ props.title }}
    </template>
  </ListComponent>
</template>
