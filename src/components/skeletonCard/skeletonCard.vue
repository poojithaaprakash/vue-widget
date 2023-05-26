<script lang="ts">
import { defineComponent } from "vue";
import CircleRight from "../icons/CircleRight.vue";
import RectangleTop from "../icons/RectangleTop.vue";
import RectangleLeft from "../icons/RectangleLeft.vue";
import RectangleMiddle from "../icons/RectangleMiddle.vue";
import RectangleRight from "../icons/RectangleRight.vue";
import LineSvg from "../icons/LineSvg.vue";

export default defineComponent ({
    name: "SkeletonCard",
    props: {
        mode: { type: Boolean, required: true, default: true },
    },
    components: { CircleRight, RectangleTop, RectangleLeft, RectangleMiddle, RectangleRight, LineSvg }
});
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="rounded-lg bg-gradient-to-r from-[#00FFFF] via-[#8A76FF] to-[#FF00FF] w-[354px] h-[284px]"
    >
      <div
        :class="[
          mode
            ? 'flex flex-col relative rounded-md w-[350px] h-[280px] px-4 py-3 mx-auto my-0.5 bg-[#1C1E29] text-white'
            : 'flex flex-col relative rounded-md w-[350px] h-[280px] px-4 py-3 mx-auto my-0.5 bg-white text-black',
        ]"
      >
        <div
          class="flex w-[180px] h-[55px] m-5 ml-2 rounded-[106px] bg-[#C5C5C5]"
        >
          <div class="circleRight">
            <CircleRight/>
          </div>
          <div class="rectangleTop">
            <RectangleTop class="w-[80px]" />
          </div>
        </div>

        <LineSvg class="w-[170px] ml-4"/>

        <!-- address display -->
        <div>
          <p class="whitespace-normal truncate p-5">invalid input</p>
        </div>

        <div class="flex ml-2">
          <div class="rectangleLeft">
            <RectangleLeft/>
          </div>
          <div class="rectangleMiddle">
            <RectangleMiddle/>
          </div>
          <div class="rectangleRight">
            <RectangleRight/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circleRight {
  padding: 8px;
  animation: scaling 1s infinite;
}

.rectangleTop {
  padding: 16px;
  animation: scaling 1s infinite 0.2s;
}

.rectangleLeft {
  padding: 8px;
  animation: scaling 1s infinite;
}

.rectangleMiddle {
  padding: 8px;
  animation: scaling 1s infinite 0.2s;
}

.rectangleRight {
  padding: 8px;
  animation: scaling 1s infinite 0.4s;
}

@keyframes scaling {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 2;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
