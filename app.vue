<script setup>
useHead({
  title: "Jayyid - Craft your next landing page effortlessly",
  description: "Home page",
});

const loading = ref(true);

onMounted(() => {
  // Get theme from localStorage
  let theme = "default";
  document.documentElement.setAttribute("data-theme", theme);

  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<template>
  <div>
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <Loading v-if="loading && $route.fullPath != '/'" />
      <NuxtPage :key="$route.fullPath" v-else />
    </NuxtLayout>
  </div>
</template>
