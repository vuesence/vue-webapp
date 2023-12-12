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
    <h2>Congratulations with scaffolding your vue webapp!</h2>
    <hr>
    <h3 v-if="options.length">
      Selected options:
    </h3>
    <ul>
      <li
        v-for="option in options"
        :key="option.name"
      >
        <span class="name">{{ option.name }}</span>
        <span class="value">{{ option.value }}</span>
      </li>
    </ul>
    <hr />
    <h3>API data:</h3> <p>{{ apiData }}</p>
    <hr />
    <h3>JSON-RPC data:</h3>
    <p class="json-rpc-data">
      {{ jsonRpcData }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
ul {
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 2em;
  li {
    padding: .4rem;
    display: flex;
    &:nth-child(even) {
      background-color: var(--vp-c-bg-alt);
    }
    span {
      width: 50%;
    }
  }
}
.json-rpc-data {
  max-width: 80vw;
  overflow-x: auto;
}
</style>
