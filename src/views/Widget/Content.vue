<template>
  <div class="container">
    <div class="question-title">O que você achou das modificações que fizemos em nosso site?</div>
    <center class="button-container">
      <Button label="Muito bom" :handleClick="() => send('Muito bom')" />
      <Button label="Não gostei" type="secondary" :handleClick="() => send('Não gostei')" />
    </center>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Button from "../../components/Button.vue";

export default {
  components: { Button },
  methods: {
    ...mapActions({
      postMessage: "widget/postMessage"
    }),
    send(message) {
      this.postMessage(message);
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  padding: 0 15px 15px 15px;
}
.question-title {
  color: #333;
  font-size: 16px;
  margin-bottom: 15px;
}
.button-container {
  & > button {
    margin-right: 20px;
  }
}
</style>
