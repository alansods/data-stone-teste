<template>
  <div class="text-center">
    <v-snackbar
      color="success"
      v-model="showSnackBar"
      :timeout="timeout"
    >
      {{ snackBarMessage }}

      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="showSnackBar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const { showSnackBar, snackBarMessage } = storeToRefs(useAppStore());

const timeout = 3000;

</script>