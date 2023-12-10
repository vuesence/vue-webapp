<script setup lang="ts">
import { onMounted, ref } from "vue";
import { api } from "@/services/api";

interface IOption {
  name: string
  value: string
}

const apiData = ref();
const jsonRpcData = ref();

onMounted(async () => {
  jsonRpcData.value = await api.utils.testJsonRpc();
  apiData.value = await api.utils.testRest();
});

const options: IOption[] = [];
</script>

<template>
  <div>
    <h3>Congratulations with scaffolding your vue webapp!</h3>
    <p v-if="options.length">
      Selected options:
    </p>
    <ul>
      <li
        v-for="option in options"
        :key="option.name"
      >
        {{ `${option.name}: ${option.value}` }}
      </li>
    </ul>
    <p><b>API data:</b> {{ apiData }}</p>
    <p><b>JSON-RPC data:</b> {{ jsonRpcData }}</p>
  </div>
</template>
