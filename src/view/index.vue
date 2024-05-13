<template>
  <div>表单设计器</div>
  <div class="content">
    <div class="left-content">
      <Library></Library>
    </div>
    <div class="center-content"></div>
    <div class="right-content">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import Library from "./library/index.vue";
import Setting from "./setting/index.vue";
</script>

<style lang="scss" scoped>
.content {
  display: flex;

  .left-content {
    width: 260px;
  }

  .center-content {
    flex: 1;
  }

  .right-content {
    width: 260px;
  }
}
</style>
