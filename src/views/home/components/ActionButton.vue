<template>
  <div
    class="d-flex flex-column align-center text-center"
    style="gap: 10px;"
  >
    <div class="icon-container" style="cursor: pointer" @click="$router.push(`/${link}`)">
      <v-icon :icon="icon" color="white" size="x-large" ></v-icon>
    </div>
    <strong>{{ title }}</strong>
  </div>
</template>

<script lang="ts" setup>
const { title, icon, link } = defineProps<{
  title: string;
  icon: string;
  link: string;
}>();
</script>

<style scoped>
.icon-container {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1867C0;
  border-radius: 50%;
  transition: background-color 300ms ease;
}

.icon-container:hover {
  background-color: #2b84e9;
}

</style>