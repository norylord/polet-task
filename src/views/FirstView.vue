<template>
  <div class="first">
    <h2>Через keep-alive и component</h2>
    <button class="toggle-button button" @click="handleToggle()">Сменить состояние</button>
    <keep-alive>
      <component :is="components[toggle]"/>
    </keep-alive>
  </div>
</template>

<script lang="ts" setup>
import FirstForm from "@/components/FirstForm.vue";
import {ref} from "vue";
import SecondCounter from "@/components/SecondCounter.vue";

const toggle = ref('form')
const components = {
  form: FirstForm,
  counter: SecondCounter
}

const handleToggle = () => {
  toggle.value === 'form' ? toggle.value = 'counter' : toggle.value = 'form'
}
</script>
