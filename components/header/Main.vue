<template>
  <div class="header">
    <div class="container">
      <div class="navCont">
        <div class="bookBtn">
          <UiBtn :notext="$viewport.isLessThan('desktop')" class="UiBtn noT">
            <template #text>book tickets</template>
            <template #icons>
              <font-awesome-icon icon="fa-solid fa-ticket" />
            </template>
          </UiBtn>
        </div>
        <NuxtLink to="/">
          <transition name="logoTrans">
            <div v-show="isLogoVisible || isOpened" class="logo">
              <img src="assets/imgs/logoirl.png" alt="" />
            </div>
          </transition>
        </NuxtLink>
        <div class="noTBtns">
          <div v-if="!$viewport.isLessThan('desktop')" class="partnerBtn">
            <UiBtn :notext="$viewport.isLessThan('desktop')" class="UiBtn">
              <template #text>
                <div class="text">partner with us</div>
              </template>
              <template #icons>
                <font-awesome-icon icon="fa-regular fa-handshake" />
              </template>
            </UiBtn>
          </div>
          <div class="menu">
            <UiBtn @click="clickell" :notext="true" class="UiBtn toSide">
              <template #icons>
                <font-awesome-icon
                  :class="{ active: !headerStore.isSidebarOpen }"
                  icon="fa-solid fa-grip-lines"
                />
                <font-awesome-icon
                  :class="{ active: headerStore.isSidebarOpen }"
                  icon="fa-solid fa-xmark"
                />
              </template>
            </UiBtn>
          </div>
        </div>
      </div>
    </div>
    <headerSideBar
      @animationStarts="animationStarts"
      @animationEnds="animationEnds"
      :isOpened="headerStore.isSidebarOpen"
    />
  </div>
</template>

<script setup>
const scrollY = ref(0)
const isLogoVisible = ref(false)
const isOpened = ref(false)
const isAnimating = ref(false)

const headerStore = useHeaderStore()
const router = useRouter()

const animationStarts = () => {
  isAnimating.value = true
}
const animationEnds = () => {
  isAnimating.value = false
}
const clickell = () => {
  if (isAnimating.value) return
  headerStore.toggleSidebar()
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

router.beforeEach((to, from) => {
  headerStore.closeSidebar()
})

onMounted(() => {
  if (window.scrollY === 0) {
    scrollY.value = true
  }
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})

watch(scrollY, (newValue, oldValue) => {
  isLogoVisible.value = newValue < oldValue || oldValue === 0
})
</script>

<style lang="scss" scoped>
@media (width >= 1024px) {
  .header {
    height: 150px !important;
    margin-top: 0 !important;
  }
}
.header {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 25px;
  height: fit-content;
  z-index: 100;
  .navCont {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 100;
      transform: translate(-50%, -50%);
      @media (width < 768px) {
        img {
          width: 170px !important;
        }
      }
      img {
        max-width: 100%;
        width: 200px;
        height: 52px;
      }
    }
    @media (width < 575px) {
      .bookBtn {
        .UiBtn {
          margin-left: 10px;
        }
      }
    }
    .noTBtns {
      display: flex;
      align-items: center;
      justify-content: center;
      .partnerBtn {
        margin-right: 5px;
        .UiBtn {
          .text {
            margin-right: 10px;
          }
        }
      }
      @media (width < 575px) {
        .menu {
          .UiBtn {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
.logoTrans-enter-active,
.logoTrans-leave-active {
  transition-duration: 0.8s;
}

.logoTrans-leave-to {
  opacity: 0;
  transform: translate(-50%, -80px) !important;
}
.logoTrans-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%) !important;
}
.logoTrans-enter-to,
.logoTrans-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%);
}
</style>
