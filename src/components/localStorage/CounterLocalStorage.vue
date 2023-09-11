<template>
  <div class="counter">
    Текущее состояние: {{count}}
    <div class="counter__buttons">
      <button class="button" @click="count++">+</button>
      <button class="button" @click="count--">-</button>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {onMounted, ref, watch} from "vue";

const count = ref(0)

watch(() => count.value, () => {
  localStorage.setItem('count', JSON.stringify(count.value))
})

onMounted(() => {
  if (localStorage.getItem('count'))
    count.value = JSON.parse(localStorage.getItem('count'))
})
</script>