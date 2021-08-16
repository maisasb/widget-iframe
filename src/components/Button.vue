<template>
  <button class="button" :class="[type ? type : '']" @click="handleClick">{{ label }}</button>
</template>
<script>
export default {
  props: {
    label: String,
    handleClick: {
      type: Function,
      default: () => {}
    },
    type: {
      type: String,
      default: "primary",
      validator: (v) => ["primary", "secondary"].includes(v)
    }
  }
};
</script>
<style scoped lang="scss">
.button {
  height: 40px;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
}
.primary {
  background: #297ab5;
  color: white;
  &:hover {
    background: #1c5986;
  }
}
.secondary {
  background: #b52997;
  color: white;
  &:hover {
    background: #8a1d72;
  }
}
</style>
