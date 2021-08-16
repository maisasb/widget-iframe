<template>
  <component :is="name" v-bind="$props" @click.native="handleClick" />
</template>
<script>
export default {
  components: {
    Close: () => import("./icons/Close"),
    Open: () => import("./icons/Open")
  },
  props: {
    name: { type: String, required: true },
    color: String,
    size: String,
    handleClick: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
