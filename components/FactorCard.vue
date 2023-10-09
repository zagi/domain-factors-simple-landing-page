<template>
  <div
    class="bg-gray-100 hover:bg-opacity-60 hover:transition-all rounded-md px-5 py-5 flex justify-between items-center"
  >
    <div>
      <CircleProgress
        :percent="chartValue"
        :size="50"
        :border-width="5"
        :border-bg-width="5"
        :fill-color="chartColor"
        v-if="isChart"
      ></CircleProgress>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div class="mb-2 text-2xl font-extrabold">{{ value }}</div>
      <div class="mb font-light text-gray-700 dark:text-gray-400">
        <button
          :data-tooltip-target="`tooltip-top-${index}`"
          data-tooltip-placement="top"
          type="button"
          class="cursor-pointer text-right"
        >
          {{ title }}<sup>i</sup>
      </button>
        <div
          :id="`tooltip-top-${index}`"
          role="tooltip"
          style="right: 10px;"
          class="absolute z-10 invisible inline-block py-2 px-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          {{ desc }}
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CircleProgress from "vue3-circle-progress";
import { onMounted, computed } from "vue";
import { initTooltips } from "flowbite";
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    isChart: {
        type: Boolean,
        default: false
    },
    maxChartValue: {
        type: Number,
        default: 100
    },
    chartColor: {
        type: String,
        default: "#4338ca"
    },
    index: {
      type: String,
      default: "1"
    }
});
const chartValue = computed(() => {
  return props.index == 'moz_rank' ? props.value * 10 : props.value;
})
onMounted(() => {
  initTooltips();
});
</script>
