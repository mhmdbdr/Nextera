<template>
  <div class="homePage">
    <div class="heroSec">
      <div class="heroModule">
        <div class="videoSec">
          <video
            src="assets/videos/homepage.webm"
            loop
            muted
            autoplay
            playsinline
          ></video>
        </div>
        <div class="textSec">
          <div class="title">
            <div class="part1">ensure your Bitcoin</div>
            <div class="part2">
              <span>reachs</span>
              <span></span>
              <span>the people</span>
            </div>
            <div class="part3">who matter most</div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-11 offset-lg-2 offset-1">
              <div class="infoSec">
                <p>
                  Be first to access the future of banking with an all-in-one
                  app that enables you to secure, transact, and grow your
                  Bitcoin wealth. We put financial freedom in your hands with
                  unparalleled security for your holdings, effortless sending
                  and spending, and unique earning opportunities including
                  interest on your Bitcoin, paid out daily.
                </p>
                <span>Join us to protect and grow your Bitcoin wealth</span>
                <span class="linkto alract">
                  <NuxtLink to="/">
                    <span>apply for membership</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about">this is alot of worrrrrrrrdsssssssssss</div>
  </div>
</template>

<script setup>
const { $ScrollTrigger, $gsap, $viewport } = useNuxtApp()

let ctx
const gsapFunc = () => {
  ctx = $gsap.context(() => {
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: ".heroModule",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    })

    const mm = $gsap.matchMedia()

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isDesktop: "(min-width: 1024px) and (max-width: 1439px)",
        isLargeDesktop: "(min-width: 1440px)",
      },
      (context) => {
        const { isMobile, isTablet, isDesktop, isLargeDesktop } =
          context.conditions

        tl.to(".videoSec video", {
          y: 0,
          scale: 1,
          borderRadius: "0",
        })
          .to(
            ".textSec .title",
            {
              width: isLargeDesktop
                ? "50vw"
                : isDesktop
                ? "50vw"
                : isTablet
                ? "60vw"
                : "85vw",
              top: "20%",
              ease: "none",
            },
            0
          )
          .to(
            ".textSec .row",
            {
              bottom: "0px",
              ease: "none",
            },
            0
          )
      }
    )
  })
}

onMounted(() => {
  gsapFunc()
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})
</script>

<style lang="scss" scoped>
.homePage {
  height: 4000px;
  background-color: black;
  .heroSec {
    position: relative;
    width: 100%;
    height: 200vh;
    .heroModule {
      position: relative;
      width: 100%;
      height: 200vh;
      .videoSec {
        position: absolute;
        height: 100%;
        width: 100%;
        video {
          position: sticky;
          top: 0;
          width: 100vw;
          height: 100vh;
          max-width: 100%;
          border-radius: 20px;
          object-fit: cover;
          transform: translate3d(0, 300px, 0px) scale(0.5);
        }
      }
      .textSec {
        position: sticky;
        height: 100vh;
        width: 100%;
        top: 0;
        display: flex;
        align-items: flex-end;
        .title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          line-height: 0.9;
          white-space: nowrap;
          width: 90vw;
          font-size: 2rem;
          top: 30%;
          text-transform: capitalize;

          @media (min-width: 768px) and (max-width: 1023px) {
            width: 75vw;
            font-size: 3rem;
          }

          @media (min-width: 1024px) and (max-width: 1439px) {
            width: 60vw;
            font-size: 3rem;
          }

          @media (min-width: 1440px) {
            width: 60vw;
            font-size: 5rem;
          }
          .part1,
          .part2,
          .part3 {
            @media (max-width: 426px) {
              text-align: center;
            }
          }
          .part2 {
            display: flex;
            justify-content: center;
            gap: 5px;
            span:nth-child(2) {
              display: none;
            }
            span:nth-child(3) {
              color: var(--prim-color);
            }
            @media (min-width: 426px) {
              align-items: center;
              justify-content: space-between;
              gap: 0;
              span:nth-child(2) {
                display: inline-block;
                flex-basis: 100%;
                margin: 0 10px;
                height: 2px;
                background-color: white;
              }
              span:nth-child(3) {
                color: white;
              }
            }
            span:nth-child(3) {
              font-family: "Noto Serif", serif;
            }
          }
          .part3 {
            @media (min-width: 426px) {
              text-align: end;
            }
          }
        }
        .row {
          margin-right: 0;
          margin-left: 0;
          position: absolute;
          left: 0;
          bottom: -500px;
        }
        .infoSec {
          color: white;
          margin: 20px 0 20px;
          @media (min-width: 1024px) {
            margin: 20px 0 70px;
          }
          p {
            line-height: 1.3;
            margin-bottom: 30px;
          }
          & > span:nth-of-type(1) {
            display: block;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
  .about {
    min-height: 300px;
    background-color: gray;
  }
}

@media (max-width: 767px) {
  .textSec {
    .title {
      .part2 {
        span:nth-child(2) {
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
