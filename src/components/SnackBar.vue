<template>
  <div class="text-center">
    <v-snackbar
      color="success"
      v-model="appStore.showSnackBar"
      :timeout="timeout"
    >
      {{ message }}

      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="appStore.showSnackBar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
const appStore = useAppStore();

const timeout = 3000;

const { message } = defineProps<{ message: String }>();

</script>