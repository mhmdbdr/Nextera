<template>
  <div>
    <UiLoadingScreen></UiLoadingScreen>
    <headerMain></headerMain>
    <NuxtPage />
    <footerMain></footerMain>
  </div>
</template>

<script setup>
const LoadingScreenStore = useLoadingStore()

const router = useRouter()
const route = useRoute()

router.beforeEach(() => {
  LoadingScreenStore.startLoading()
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    LoadingScreenStore.stopLoading()
  }
)
</script>

<style lang="scss" scoped></style>
