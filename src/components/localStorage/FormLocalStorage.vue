<template>
  <form class="form">
    <h3>Первая форма</h3>
    <input type="text" class="input" v-model="state.form.input1">
    <input type="text" class="input" v-model="state.form.input2">
    <button class="button" type="submit">Отправить</button>
  </form>
</template>

<script lang="ts" setup>

import {onMounted, reactive, watch} from "vue";

const state = reactive({
  form: {
    input1: '',
    input2: ''
  }
})

interface IProps {
  form?: {
    input1: string,
    input2: string
  }
}

const props = defineProps<IProps>()

watch(() => state.form, () => {
  localStorage.setItem('state', JSON.stringify(state.form))
}, {deep: true})

onMounted(() => {
  if (localStorage.getItem('state'))
    state.form = JSON.parse(localStorage.getItem('state'))
})
</script>