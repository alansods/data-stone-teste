<template>
  <v-card class="mx-auto" color="white" theme="dark" min-width="370">
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
          <v-list-item-title class="font-weight-bold">Nome: {{ cliente.nome }} </v-list-item-title>

          <v-list-item-subtitle>Ativo: {{ cliente.ativo ? "Sim" : "Não" }}</v-list-item-subtitle>
          <v-list-item-subtitle>Documento: {{ cliente.documento }} </v-list-item-subtitle>
          <v-list-item-subtitle
            >E-mail: {{ cliente.email }}</v-list-item-subtitle
          >
          <v-list-item-subtitle>Telefone: {{ cliente.telefone }}</v-list-item-subtitle>
        </div>
      </v-list-item>
    </v-card-actions>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn block @click="$router.push(`/cliente/${cliente.id}`)">
        Ver mais detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { Cliente } from "@/types/appTypes";

const { cliente } = defineProps<{ cliente: Cliente }>();

</script>
