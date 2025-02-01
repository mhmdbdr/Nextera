<template>
  <div class="loading-screen">
    <div class="content">
      <div class="line">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="line">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="line">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="line">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="line">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="line">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="line">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="line">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap: gsap } = useNuxtApp()

const LoadingScreenStore = useLoadingStore()

const cntx = ref()

const showLoadingAnimation = () => {
  cntx.value = gsap.context(() => {
    const tl = gsap.timeline()
    tl.set(".loading-screen", { display: "block" }).to(
      ".loading-screen .line .box",
      {
        duration: 0.2,
        scaleY: 1,
        stagger: {
          each: 0.1,
          from: "random",
          grid: "auto",
          axis: "y",
        },
      }
    )
  })
}

const hideLoadingAnimation = () => {
  cntx.value = gsap.context(() => {
    const tl2 = gsap.timeline()
    tl2
      .to(".loading-screen .line .box", {
        duration: 0.2,
        scaleY: 0,
        stagger: {
          each: 0.1,
          from: "random",
          grid: "auto",
          axis: "y",
        },
      })
      .to(".loading-screen", { display: "none" })
  })
}

watch(
  () => LoadingScreenStore.isLoading,
  (newVal) => {
    if (newVal) {
      showLoadingAnimation()
      console.log("loading-screen on")
    } else {
      hideLoadingAnimation()
      console.log("loading-screen off")
    }
  }
)

onUnmounted(() => {
  if (cntx.value) {
    cntx.value.revert()
  }
})
</script>

<style lang="scss" scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: transparent;
  z-index: 10000;
  display: none;
  .content {
    width: 100%;
    height: 100%;
    .line {
      position: relative;
      flex: 1;
      display: flex;
      .box {
        flex: 1;
        background-color: var(--prim-color);
        transform-origin: top;
        transform: scaleY(0);
      }
    }
  }
}
</style>
