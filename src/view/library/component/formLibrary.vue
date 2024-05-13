<template>
  <div v-for="(item, index) in formTemplates" :key="item.id">
    <div class="form-content">
      <el-popover placement="right" trigger="hover">
        <template #reference>
          <img :src="getImageSrc(item)" style="width: 200px" />
        </template>
        <img :src="getImageSrc(item)" style="height: 600px; width: 720px" />
      </el-popover>
      <div>
        <span class="form-title"> {{ index + 1 }} {{ item.title }} </span>
        <el-button link type="primary" class="form-load-btn" @click="clickForm(item)">加载此模板</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { formTemplates } from "./formData";

import axios from 'axios'

const getImageSrc = (item: any) => {
  const icon = new URL(item.imgUrl, import.meta.url).href;
  return icon;
};

const clickForm = (item: any) => {
  console.log(item);

  axios.get(item.jsonUrl).then(res => {
    console.log(res)

  })
};
</script>

<style lang="scss" scoped>
.form-content {
  border: 1px solid #e8e9eb;
  padding: 10px;
  margin-bottom: 20px;
}
.form-img {
  width: 200px;
}
.form-title {
  font-size: 13px;
}
.form-load-btn {
  float: right;
}
</style>
