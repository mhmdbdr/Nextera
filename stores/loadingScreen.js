export const useLoadingStore = defineStore("loadingScreen", () => {
  const isLoading = ref(false)

  const startLoading = () => {
    isLoading.value = true
  }
  const stopLoading = () => {
    isLoading.value = false
  }

  return { stopLoading, startLoading, isLoading }
})
