export const useHeaderStore = defineStore("header", () => {
  const isSidebarOpen = ref(false)

  const closeSidebar = () => {
    isSidebarOpen.value = false
  }
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }
  return { isSidebarOpen, closeSidebar, toggleSidebar }
})
