<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 15L12 10L7 15" :stroke="color" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
<script>
export default {
  props: {
    color: String,
    size: {
      type: String,
      default: "24"
    }
  }
};
</script>
