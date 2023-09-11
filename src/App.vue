<template>
  <div class="main">
    <h1>Решения задач для ПОЛЕТ</h1>
    <nav class="main__nav">
      <button class="button" @click="router.push('/1')">1</button>
      <button class="button" @click="router.push('/2')">2</button>
      <button class="button" @click="router.push('/3')">3</button>
      <button class="button" @click="router.push('/4')">4</button>
    </nav>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

  </div>
</template>

<script lang="ts" setup>

import router from "@/router";
</script>

<style lang='scss'>
.main {
  &__nav {
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
  }
}
</style>