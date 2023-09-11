<template>
  <form class="form">
    <h3>Первая форма</h3>
    <input type="text" class="input" :value="modelValue1" @input="e => $emit('update:modelValue1', e.target.value)">
    <input type="text" class="input" :value="modelValue2" @input="e => $emit('update:modelValue2', e.target.value)">
    <button class="button" type="submit">Отправить</button>
  </form>
</template>

<script lang="ts" setup>
interface IProps {
  modelValue1: string,
  modelValue2: string
}

const props = defineProps<IProps>()

</script>