<template>
  <div class="first">
    <h2>Через v-show</h2>
    <button class="toggle-button button" @click="handleToggle()">Сменить состояние</button>
    <FirstForm v-show="toggle"/>
    <SecondCounter v-show="!toggle"/>
  </div>
</template>

<script lang="ts" setup>
import FirstForm from "@/components/FirstForm.vue";
import {ref} from "vue";
import SecondCounter from "@/components/SecondCounter.vue";

const toggle = ref(false)

const handleToggle = () => {
  toggle.value = !toggle.value
}
</script>
