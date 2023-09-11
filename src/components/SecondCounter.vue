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

import {ref} from "vue";

const count = ref(0)

interface IProps {
}

const props = defineProps<IProps>()
</script>