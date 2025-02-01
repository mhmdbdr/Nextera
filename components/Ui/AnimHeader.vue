<template>
  <div class="mainHeader">
    <div class="snapBox">
      <div class="snapTitle">
        <slot name="ff"></slot>
      </div>
    </div>
    <div class="snapBox">
      <div class="snapTitle">
        <slot name="ss"></slot>
      </div>
    </div>
    <div class="snapBox">
      <div class="snapTitle">
        <slot name="tt"></slot>
      </div>
    </div>
    <div class="snapBox">
      <div class="snapTitle">
        <slot name="fo"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

let ctxSpeakers
const gsapAniamtion = () => {
  ctxSpeakers = $gsap.context(() => {
    const tl3 = $gsap.timeline({
      scrollTrigger: {
        trigger: ".mainHeader",
        start: "-300 center",
        end: "+100 center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    })
    tl3
      .to(".snapTitle", {
        x: 0,
        scaleY: 1,
      })
      .to(
        ".mainHeader",
        {
          gap: 0,
        },
        0
      )
  })
}
onMounted(() => {
  gsapAniamtion()
})
onUnmounted(() => {
  if (ctxSpeakers) {
    ctxSpeakers.revert()
  }
})
</script>

<style lang="scss" scoped>
.mainHeader {
  line-height: 1;
  display: grid;
  font-weight: bold;
  white-space: nowrap;
  font-size: 1.6rem;
  grid-template-columns: repeat(4, 55px);
  gap: 15px;
  text-shadow: 0 0 2px var(--text-color);
  color: var(--text-color);
  margin-bottom: 30px;
  .snapBox {
    overflow: hidden;
    position: relative;
    will-change: transform;

    &:nth-child(1) {
      .snapTitle {
        transform: translateX(-30%);
      }
    }

    &:nth-child(2) {
      .snapTitle {
        transform: translateX(20%);
        left: -55px;
      }
    }

    &:nth-child(3) {
      .snapTitle {
        transform: translateX(10%);
        left: -110px;
      }
    }

    &:nth-child(4) {
      .snapTitle {
        transform: translateX(20%);
        left: -165px;
      }
    }

    .snapTitle {
      width: max-content;
      position: relative;
      text-transform: capitalize;
    }
  }
}

@media (767px > width > 425px) {
  .mainHeader {
    font-size: 2rem;
    grid-template-columns: repeat(4, 80px);
    gap: 20px;

    .snapBox {
      &:nth-child(2) {
        .snapTitle {
          left: -80px;
        }
      }

      &:nth-child(3) {
        .snapTitle {
          left: -160px;
        }
      }

      &:nth-child(4) {
        .snapTitle {
          left: -240px;
        }
      }
    }
  }
}

@media (width > 767px) {
  .mainHeader {
    font-size: 3rem;
    grid-template-columns: repeat(4, 120px);
    gap: 25px;

    .snapBox {
      &:nth-child(2) {
        .snapTitle {
          transform: translateX(20%);
          left: -120px;
        }
      }

      &:nth-child(3) {
        .snapTitle {
          transform: translateX(30%);
          left: -240px;
        }
      }

      &:nth-child(4) {
        .snapTitle {
          transform: translateX(30%);
          left: -360px;
        }
      }
    }
  }
}
</style>
