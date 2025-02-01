<template>
  <div class="homePage">
    <div class="heroSec">
      <div class="heroModule">
        <div class="videoSec">
          <video
            src="assets/videos/homePage.webm"
            loop
            muted
            autoplay
            playsinline
            poster="assets/imgs/heroVid_poster.png"
          ></video>
        </div>
        <div class="textSec">
          <div class="title">
            <div class="part1">Empowering Connections,</div>
            <div class="part2">
              <span>Driving</span>
              <span></span>
              <span>Tomorrow's</span>
            </div>
            <div class="part3">Boldest Ideas</div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 offset-lg-2 offset-md-1">
              <div class="infoSec">
                <p class="splitText">
                  Politico has said we run "the world's premier tech
                  conference", the Atlantic that Web Summit is "where the future
                  goes to be born", and the New York Times that we assemble "a
                  grand conclave of the tech industry's high priests".
                </p>
                <span
                  >Web Summit brings together 70,000+ people, and the companies
                  redefining the tech industry.</span
                >
                <span class="linkto alract">
                  <NuxtLink to="/">
                    <span>Book tickets for 2025</span>
                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                  </NuxtLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about sec">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mb-lg-0 mb-5 offset-lg-1">
            <div class="text">
              <div id="split" class="title">what is Nextera?</div>
              <div class="info">
                <p class="splitp">
                  Politico has said we run "the world's premier tech
                  conference", the Atlantic that Web Summit is "where the future
                  goes to be born", and the New York Times that we assemble "a
                  grand conclave of the tech industry's high priests".
                </p>
                <p class="splitp">
                  At a time of great uncertainty for many industries and,
                  indeed, the world itself, we gather policymakers, heads of
                  state, and the founders and CEOs of technology companies and
                  fast-growing startups, to ask a simple question: Where to
                  next?
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img-container">
              <img src="/assets//imgs/aboutSec.jpg" alt="aboutImg" />
              <div class="numInfo">
                <div class="num">70,000+</div>
                <span>attendees </span>
              </div>
              <div class="numInfo">
                <div class="num">1,000+</div>
                <span>investors</span>
              </div>
              <div class="numInfo">
                <div class="num">3,000+</div>
                <span>companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="speakersSec sec">
      <div class="container">
        <div class="speakers">
          <UiAnimHeader>
            <template #ff> partners with us </template>
            <template #ss> partners with us </template>
            <template #tt> partners with us </template>
            <template #fo> partners with us </template>
          </UiAnimHeader>
          <div class="content">
            <div class="speakerCard">
              <NuxtLink to="/">
                <figure>
                  <svg
                    class="distort"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <filter id="distortionFilter">
                        <feTurbulence
                          type="turbulence"
                          baseFrequency="0.1"
                          numOctaves="5"
                          seed="2"
                          result="noise"
                        />
                        <feDisplacementMap
                          in="SourceGraphic"
                          in2="noise"
                          scale="30"
                          xChannelSelector="R"
                          yChannelSelector="G"
                        />
                      </filter>
                    </defs>
                    <image
                      filter="url(#distortionFilter)"
                      class="distort__img"
                      xlink:href="assets/imgs/homePage/speakers/speaker_4.png"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </svg>
                  <figcaption class="info">
                    <div class="name">Pharrell Williams</div>
                    <div class="pos">Artist and Entrepreneur</div>
                  </figcaption>
                </figure>
              </NuxtLink>
            </div>
            <div class="speakerCard">
              <NuxtLink to="/">
                <img
                  src="assets/imgs/homePage/speakers/speaker_1.png"
                  alt="speakerCard"
                />
                <div class="info">
                  <div class="name">Pharrell Williams</div>
                  <div class="pos">Artist and Entrepreneur</div>
                </div>
              </NuxtLink>
            </div>
            <div class="speakerCard">
              <NuxtLink to="/">
                <img
                  src="assets/imgs/homePage/speakers/speaker_2.png"
                  alt="speakerCard"
                />
                <div class="info">
                  <div class="name">Pharrell Williams</div>
                  <div class="pos">Artist and Entrepreneur</div>
                </div>
              </NuxtLink>
            </div>
            <div class="speakerCard">
              <NuxtLink to="/">
                <img
                  src="assets/imgs/homePage/speakers/speaker_3.jpg"
                  alt="speakerCard"
                />
                <div class="info">
                  <div class="name">Pharrell Williams</div>
                  <div class="pos">Artist and Entrepreneur</div>
                </div>
              </NuxtLink>
            </div>
            <div class="speakerCard">
              <NuxtLink to="/">
                <img
                  src="assets/imgs/homePage/speakers/speaker_5.jpg"
                  alt="speakerCard"
                />
                <div class="info">
                  <div class="name">Pharrell Williams</div>
                  <div class="pos">Artist and Entrepreneur</div>
                </div>
              </NuxtLink>
            </div>
            <div class="speakerCard">
              <NuxtLink to="/">
                <img
                  src="assets/imgs/homePage/speakers/speaker_6.png"
                  alt="speakerCard"
                />
                <div class="info">
                  <div class="name">Pharrell Williams</div>
                  <div class="pos">Artist and Entrepreneur</div>
                </div>
              </NuxtLink>
            </div>
            <div class="speakerCard">
              <NuxtLink to="/">
                <img
                  src="assets/imgs/homePage/speakers/speaker_7.jpg"
                  alt="speakerCard"
                />
                <div class="info">
                  <div class="name">Pharrell Williams</div>
                  <div class="pos">Artist and Entrepreneur</div>
                </div>
              </NuxtLink>
            </div>
            <div class="speakerCard">
              <NuxtLink to="/">
                <img
                  src="assets/imgs/homePage/speakers/speaker_9.jpg"
                  alt="speakerCard"
                />
                <div class="info">
                  <div class="name">Pharrell Williams</div>
                  <div class="pos">Artist and Entrepreneur</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap: gsap, $SplitType: SplitType } = useNuxtApp()

const ctx = ref()

const gsapFunc = () => {
  ctx.value = gsap.context(() => {
    // hero-aniamtion-start

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroModule",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    })

    const mm = gsap.matchMedia()

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
          translateY: 0,
          scale: 1,
          borderRadius: "0",
        })
          .to(
            ".textSec .title",
            {
              width: isLargeDesktop
                ? "65vw"
                : isDesktop
                ? "65vw"
                : isTablet
                ? "65vw"
                : "85vw",
              translateZ: (-50, 0, 0),
              ease: "none",
            },
            0
          )
          .to(
            ".textSec .row",
            {
              translateY: 0,
              ease: "none",
            },
            0
          )
      }
    )

    // hero-aniamtion-end

    // about-animation-start

    new SplitType("#split", { types: "words" })
    new SplitType(".splitp", { types: "line, words" })

    gsap.from(".numInfo", {
      scrollTrigger: {
        trigger: ".img-container",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
      },
      translateY: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
    })
    gsap.from(".about .title .word", {
      scrollTrigger: {
        trigger: ".about .title",
        start: "+100 bottom",
        bottom: "bottom bottom",
      },
      y: 20,
      stagger: 0.1,
      duration: 1,
      autoAlpha: 0,
      ease: "back.out(1.7)",
    })
    gsap.effects.textShow(".info p .line")

    // about-animation-end

    // speakers-animation-start

    const cards = gsap.utils.toArray(".speakerCard").map((target) => {
      gsap.from(target, {
        y: 30,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: target,
          start: "top 75%",
          end: "bottom bottom",
        },
      })
    })

    gsap.effects.feTurbulence("figure", {
      filterSelector: "#distortionFilter",
    })

    // speakers-animation-end
  })
}

onMounted(() => {
  gsapFunc()
})

onUnmounted(() => {
  ctx.value.revert()
})
</script>

<style lang="scss" scoped>
.homePage {
  height: 10000px;
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
          transform: translate3d(-50%, 40%, 0);
          color: var(--text-color);
          line-height: 1;
          white-space: nowrap;
          width: 90vw;
          font-size: 1.5rem;
          top: 20%;
          text-transform: capitalize;

          @media (min-width: 768px) and (max-width: 1023px) {
            width: 75vw;
            font-size: 3rem;
            line-height: 0.9;
          }

          @media (min-width: 1024px) and (max-width: 1439px) {
            width: 70vw;
            font-size: 4rem;
            line-height: 0.9;
          }

          @media (min-width: 1440px) {
            width: 70vw;
            font-size: 5rem;
            line-height: 0.9;
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
              font-weight: bold;
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
                background-color: var(--text-color);
              }
              span:nth-child(3) {
                color: var(--text-color);
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
          bottom: 0;
          transform: translateY(500px);
        }
        .infoSec {
          color: var(--text-color);
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
    .row {
      display: flex;
      align-items: center;
      .text {
        color: var(--text-muted-color);
        @media (width <= 576px) {
          .title {
            font-size: 35px !important;
          }
        }
        .title {
          font-size: 45px;
          font-weight: bold;
          color: var(--text-color);
          text-transform: capitalize;
          clip-path: polygon(0 0, 100% 0, 100% 75%, 0 75%);
        }
      }
      .img-container {
        position: relative;
        img {
          max-width: 100%;
          width: 100%;
        }
        @media (width < 576px) {
          .numInfo {
            padding: 10px 15px !important;
          }
        }
        .numInfo {
          position: absolute;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 15px 20px;
          backdrop-filter: blur(5px);
          border-radius: 10px;
          @media (991px < width < 1200px) {
            .num {
              font-size: 1.8rem !important;
            }
          }
          @media (width < 576px) {
            .num {
              font-size: 1.2rem !important;
            }
          }
          .num {
            font-size: 2.5rem;
            font-weight: bold;
          }
          &:nth-last-of-type(1) {
            top: 7%;
            left: 3%;
            .num {
              color: var(--prim-color);
            }
          }
          &:nth-last-of-type(2) {
            top: 50%;
            right: 3%;
            .num {
              color: var(--muted-color);
            }
          }
          &:nth-last-of-type(3) {
            bottom: 5%;
            left: 15%;
            .num {
              color: var(--link-color);
            }
          }
        }
      }
    }
  }
  .speakersSec {
    padding-top: 30px;
    background: linear-gradient(
      180deg,
      var(--bg-color) 55%,
      var(--prim-color) 92%,
      var(--muted-color) 100%
    );
    background-size: 200% 200%;
    animation: gradient 5s ease infinite;
    @media (width > 991px) {
      .speakers {
        .content {
          grid-template-columns: repeat(5, 1fr) !important;
        }
      }
    }
    @media (991px > width > 767px) {
      .speakers {
        .content {
          grid-template-columns: repeat(4, 1fr) !important;
        }
      }
    }
    @media (767px > width > 575px) {
      .speakers {
        .content {
          grid-template-columns: repeat(3, 1fr) !important;
        }
      }
    }
    .speakers {
      .content {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
        .speakerCard {
          margin-bottom: 20px;
          a {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 10px;
            figure {
              width: 100%;
              height: 100%;
              margin: 0;
            }
            .distort {
              width: 100%;
              height: 100%;
              display: block;
            }
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: var(--shadow-color);
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
              z-index: 2;
            }
            &:hover {
              &::before {
                opacity: 1;
              }
              img {
                transform: scale(1.1);
              }
              .info {
                bottom: 15px;
                opacity: 1;
              }
            }
            img,
            image {
              max-width: 100%;
              width: 100%;
              transition-duration: 0.3s;
              z-index: 1;
              object-fit: cover;
            }
            .info {
              position: absolute;
              opacity: 0;
              bottom: 0px;
              left: 10px;
              transition-duration: 0.3s;
              z-index: 3;
              color: var(--text-color);
              font-size: 1.1rem;
              text-transform: capitalize;
            }
          }
        }
      }
    }
  }
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
