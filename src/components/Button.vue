<template>
  <v-btn flat variant="text" :block="block" :color="color" :disabled="disabled" :icon="onlyIcon" :loading="isLoading">
    <v-icon :icon="iconName" :size="iconSize" v-if="hasIcon && !onlyIcon" />
    {{ name }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "primary",
      required: false,
    },
    block: {
      type: Boolean,
      default: true,
      required: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    onlyIcon: {
      type: String,
      default: false,
      required: false,
    },
    hasIcon: {
      type: Boolean,
      default: false,
      required: false,
    },
    iconName: {
      type: String,
      required: true,
    },
    iconSize: {
      type: Number,
      default: 24,
      required: false,
    },
  },
});
</script>
