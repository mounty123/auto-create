<template>
  <el-tabs v-model="tabName">
    <el-tab-pane label="组件库" name="ComponentLibrary"></el-tab-pane>
    <el-tab-pane label="表单模板" name="FormLibrary"></el-tab-pane>
  </el-tabs>
  <div v-if="tabName === 'ComponentLibrary'">
    <ComponentLibrary></ComponentLibrary>
  </div>
  <div v-if="tabName === 'FormLibrary'">
    <FormLibrary></FormLibrary>
  </div>



  
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref, computed, defineProps } from "vue";

import ComponentLibrary from "./component/componentLibrary.vue";
import FormLibrary from "./component/formLibrary.vue";

const tabName = ref("ComponentLibrary");
</script>

<style lang="scss" scoped>
.el-collapse-item__content {
  div {
    display: grid;
    grid-template-columns: 128px 128px;
    column-gap: 6px;
  }
}
.drag-item {
  border: 1px solid #e8e9eb;
  width: 98px;
  font-size: 13px;
  padding: 0 8px;
  margin: 2px 0 6px 0;
  cursor: move;
}
</style>
