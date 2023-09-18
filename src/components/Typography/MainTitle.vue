<template>
  <h3 class="text-center text-h3 font-weight-bold">{{ title }}</h3>
</template>

<script lang="ts" setup>

const { title } = defineProps<{ title: String }>();

</script>
