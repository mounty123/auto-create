<template>
  <el-tabs v-model="tabName">
    <el-tab-pane label="组件设置" name="ComponentSetting">组件设置</el-tab-pane>
    <el-tab-pane label="表单设置" name="TableSetting">表单设置 </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
const tabName = ref("ComponentSetting");
</script>

<style lang="scss" scoped></style>
