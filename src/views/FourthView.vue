<template>
  <div class="first">
    <h2>Через хранение состояния в родителе</h2>
    <button class="toggle-button button" @click="handleToggle()">Сменить состояние</button>
    <ParentForm v-if="toggle" v-model:model-value1="state.form.input1" v-model:model-value2="state.form.input2"/>
    <ParentCounter v-if="!toggle" v-model="state.counter"/>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import ParentForm from "@/components/parent_state/ParentForm.vue";
import ParentCounter from "@/components/parent_state/ParentCounter.vue";

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
