<template>
  <v-card class="mx-auto" color="white" theme="dark" width="370">
    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            size="70"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar>
        </template>

        <div class="d-flex flex-column" style="gap: 4px">
          <v-list-item-title class="font-weight-bold">Nome: {{ produto.nome }} </v-list-item-title>

          <v-list-item-subtitle>Ativo: {{ produto.ativo ? "Sim" : "Não" }}</v-list-item-subtitle>
        </div>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { Produto } from "@/types/appTypes";

const { produto } = defineProps<{ produto: Produto }>();

</script>
