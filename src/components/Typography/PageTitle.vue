<template>
  <h2 class="text-h4 font-weight-bold mb-10 text-primary">{{ title }}</h2>
</template>

<script lang="ts" setup>

const { title } = defineProps<{ title: String }>();

</script>
