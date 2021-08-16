<template>
  <svg :width="size" :height="size" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 0.999999L6 6L11 1" :stroke="color" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
<script>
export default {
  props: {
    color: String,
    size: {
      type: String,
      default: "12"
    }
  }
};
</script>
