<script lang="ts" setup>
  import { useHead } from '@unhead/vue';

  useHead({
    title: 'Poormans Cloud',
  });
</script>

<template>
  <h1>Poormans cloud</h1>
  <RouterView v-slot="{ Component }">
    <Transition
      mode="out-in"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    >
      <component
        :is="Component"
        class="page animate__animated animate-fastest d-flex flex-column justify-content-center text-center h-100"
      />
    </Transition>
  </RouterView>
</template>
