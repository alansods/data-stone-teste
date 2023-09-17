<template>
  <v-dialog v-model="showDialog" width="auto">
    <v-card>
      <v-card-title>
        Aviso!
      </v-card-title>
      <v-card-text>
        {{ message }}
      </v-card-text>
      <v-card-actions class="mt-5">
        <v-spacer></v-spacer>
        <v-btn color="red" variant="elevated" @click="confirmDelete">
          Deletar
        </v-btn>
        <v-btn variant="text" @click="confirmCancel">
          Cancelar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const { showDialog } = storeToRefs(useAppStore());

const emit = defineEmits(['confirm-delete'])

const { message } = defineProps(["message"]);

const confirmDelete = ():void => {
  emit("confirm-delete");
}

const confirmCancel = ():void => {
  showDialog.value = false
}
</script>
