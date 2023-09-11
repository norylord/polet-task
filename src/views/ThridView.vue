<template>
  <div class="first">
    <h2>Через localStorage</h2>
    <button class="toggle-button button" @click="handleToggle()">Сменить состояние</button>
    <FormLocalStorage v-if="toggle"/>
    <CounterLocalStorage v-if="!toggle"/>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import FormLocalStorage from "@/components/localStorage/FormLocalStorage.vue";
import CounterLocalStorage from "@/components/localStorage/CounterLocalStorage.vue";

const toggle = ref(false)
const state = reactive({
  form: {
    input1: '',
    input2: ''
  },
  counter: 0
})

const handleToggle = () => {
  toggle.value = !toggle.value
}
</script>
