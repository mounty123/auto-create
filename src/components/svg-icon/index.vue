<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
    <title v-if="!!props.title">{{ props.title }}</title>
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  iconClass: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
});

const svgClass = computed(() => {
  return props.className ? `svg-icon ${props.className}` : "svg-icon";
});

const iconName = computed(() => {
  return `#icon-${props.iconClass}`;
});
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1.1em;
    height: 1.1em;
    margin-left: 0.35em;
    margin-right: 0.35em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    display: inline-block;
  }
</style>
