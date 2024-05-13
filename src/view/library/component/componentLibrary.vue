<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1" title="容器">
        <draggable v-model="containers" item-key="key" @start="onStart" @end="onEnd">
          <template #item="{ element, index }">
            <div class="drag-item">
              <span>
                <svg-icon :icon-class="element.icon"></svg-icon>
                {{ element.options.name }}
              </span>
            </div>
          </template>
        </draggable>
      </el-collapse-item>
      <el-collapse-item name="2" title="基础字段">
        <draggable v-model="basicFields" item-key="key" @start="onStart" @end="onEnd">
          <template #item="{ element, index }">
            <div class="drag-item">
              <span>
                <svg-icon :icon-class="element.icon"></svg-icon>
                {{ element.options.name }}
              </span>
            </div>
          </template>
        </draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref, computed, defineProps } from "vue";
import { containers, basicFields } from "./componentData";
const tabName = ref("ComponentLibrary");

const activeNames = ref(["1", "2"]);

const onStart = () => {};
const onEnd = () => {};
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

