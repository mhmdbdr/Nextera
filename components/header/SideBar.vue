<template>
  <div data-lenis-prevent class="sideBar">
    <div class="row">
      <div class="masonry">
        <div class="masonry-item col-xl-4 col-md-6">
          <div class="box">
            <div class="content">
              <div class="title">your event</div>
              <ul>
                <li class="linkto nalract">
                  <NuxtLink to="/schedule">
                    <span>Schedule</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>Meet our attendees</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="masonry-item col-xl-4 col-md-6">
          <div class="box">
            <div class="content">
              <div class="title">startups</div>
              <ul>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>our startup programme</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>Featured startups</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>Startup journey</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>our impact startups</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="masonry-item col-xl-4 col-md-6">
          <div class="box">
            <div class="content">
              <div class="title">speakers</div>
              <ul>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>Meet our speakers</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>Tracks</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>Apply to speak</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="masonry-item col-xl-4 col-md-6">
          <div class="box">
            <div class="content">
              <div class="title">partners</div>
              <ul>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>our partners</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>Investors</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="masonry-item col-xl-4 col-md-6">
          <div class="box">
            <div class="content">
              <div class="title">media</div>
              <ul>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>Join us</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
                <li class="linkto nalract">
                  <NuxtLink to="/">
                    <span>media partners</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["isOpened"])
const { $gsap: gsap } = useNuxtApp()
const emit = defineEmits(["animationStarts", "animationEnds"])

const isAnimating = ref(false)

watch(
  () => props.isOpened,
  (newVal) => {
    if (isAnimating.value) return
    const tl = gsap.timeline({
      onStart: () => {
        isAnimating.value = true
        emit("animationStarts")
      },
      onComplete: () => {
        isAnimating.value = false
        emit("animationEnds")
      },
    })

    tl.clear()

    if (newVal) {
      tl.set(".sideBar", {
        visibility: "visible",
        transform: "scaleY(0)",
        transformOrigin: "top",
      })
        .set(".sideBar .box", {
          y: 30,
          opacity: 0,
        })
        .to(".sideBar", {
          transform: "scaleY(1)",
          duration: 0.8,
        })
        .to(
          ".sideBar .box",
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=0.1"
        )
    } else {
      tl.to(".sideBar .box", {
        y: 30,
        opacity: 0,
        duration: 0.2,
        stagger: {
          each: 0.03,
          from: "end",
        },
      })
        .to(".sideBar", {
          transform: "scaleY(0)",
          duration: 0.4,
        })
        .set(".sideBar", {
          visibility: "hidden",
        })
    }
  }
)

onMounted(() => {
  gsap.set(".sideBar", {
    visibility: "hidden",
    scaleY: 0,
  })
  gsap.set(".sideBar .box", {
    y: 30,
    opacity: 0,
  })
})
</script>

<style lang="scss" scoped>
.masonry {
  column-count: 3;
}
.masonry-item {
  display: inline-block;
  width: 100%;
}
@media (max-width: 1199px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 767px) {
  .masonry {
    column-count: 1;
  }
}
@media (1000px < width < 1200px) {
  .sideBar {
    padding: 120px 20px 0px !important;
  }
}
@media (width < 1000px) {
  .sideBar {
    padding: 120px 0px 0px !important;
  }
}
@media (width < 768px) {
  .sideBar {
    margin: 10px !important;
    width: calc(100% - 20px) !important;
    height: calc(100svh - 20px) !important;
  }
}
.sideBar {
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: calc(100% - 40px);
  margin: 10px 20px 20px;
  padding: 120px 40px 0px;
  height: calc(100svh - 30px);
  box-sizing: border-box;
  visibility: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .row {
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    overscroll-behavior: contain;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (width < 768px) {
    .box {
      padding: 30px 24px !important;
    }
  }
  @media (width >= 1200px) {
    .box {
      height: 350px !important;
    }
  }
  .box {
    border: 2px solid hsla(0, 0%, 100%, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 40px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    transition-duration: 0.3s;
    &:hover {
      background-color: white;
      .content {
        ul {
          li {
            color: var(--bg-color);
          }
        }
      }
    }
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        color: var(--text-muted-color);
        text-transform: uppercase;
        font-size: 13px;
        margin-bottom: 15px;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 100%;
        gap: 12px;
        li {
          padding: 0;
          text-transform: capitalize;
          font-size: 22px;
          color: var(--text-color);
        }
      }
    }
  }
}
</style>
