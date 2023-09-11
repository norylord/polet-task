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

interface IProps {
  modelValue: number
}

const props = defineProps<IProps>()

const count = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])
watch(() => count.value, () => {
  emit('update:modelValue', count.value)
})
</script>
