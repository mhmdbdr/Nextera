<template>
  <div class="mBtn" :class="{ notext: notext, withtext: !notext }">
    <div v-if="!notext" class="text">
      <slot name="text" />
    </div>
    <div class="icons">
      <slot name="icons" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["notext"])
</script>
<style lang="scss" scoped>
.mBtn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 100px;
  background-color: hsla(0, 0%, 100%, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;
  min-height: 40px;
  border: 1px solid hsla(0, 0%, 100%, 0.06);
  .icons {
    display: flex;
    align-items: center;
  }
  .text,
  .icons {
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    padding-bottom: 120%;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate3d(-50%, 0, 0) scale3d(0, 0, 0);
    background-color: var(--accent-hover-color);
    z-index: 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -1px;
    left: 0;
    transform: translate3d(0, -100%, 0);
    transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
    background-color: var(--accent-hover-color);
  }
  &:hover {
    .text {
      animation: upscale 0.2s forwards, initstate 0.2s 0.2s forwards;
    }
    &::after {
      transform: translate3d(-50%, -50%, 0) scaleX(1);
      transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1),
        background 0.3s cubic-bezier(0.4, 0.64, 0.68, 1);
      pointer-events: none;
    }
    &::before {
      transform: translateZ(0);
      transition: transform 0s linear 0.4s,
        background 0.3s cubic-bezier(0.4, 0.64, 0.68, 1);
      pointer-events: none;
    }
  }
  @media (width >= 1024px) {
    &.notext {
      width: 60px !important;
      padding: 16px 22px !important;
      min-height: 50px !important;
    }
  }
  &.notext {
    width: 48px;
    padding: 13px 14px;
  }
  &.withtext {
    height: 50px;
    min-width: 175px;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    .text {
      color: white;
      text-transform: capitalize;
    }
  }
}
@keyframes upscale {
  100% {
    transform: translate3d(0, -105%, 0) scaleY(1.5);
    opacity: 0;
  }
}
@keyframes initstate {
  0% {
    transform: translate3d(0, 105%, 0) scaleY(1.5);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scaleY(1);
  }
}
</style>
