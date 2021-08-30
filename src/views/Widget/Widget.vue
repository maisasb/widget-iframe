<template>
  <div v-if="show">
    <div :class="mode === WIDGET_MODES.EMBEBED ? 'widget-embebed' : 'widget-fixed'" class="box" v-if="!minimized">
      <div class="icon-close">
        <Icon name="Close" color="#297ab5" class="cursor-pointer" :handleClick="() => minimizeWidget(true)" />
      </div>
      <Content />
    </div>
    <div v-else class="widget-minimized">
      <Icon name="Open" color="#297ab5" class="cursor-pointer" :handleClick="() => minimizeWidget(false)" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import useIframeControl from "../../hooks/iframe";
import { WIDGET_MODES } from "../../consts/mode";
import Icon from "../../components/Icon.vue";
import Content from "./Content.vue";

export default {
  components: { Icon, Content },
  props: {
    config: Object
  },
  computed: {
    ...mapState({
      customer: (state) => state.widget.customer,
      token: (state) => state.widget.token,
      show: (state) => state.widget.show,
      mode: (state) => state.widget.mode,
      minimized: (state) => state.widget.minimized
    }),
    WIDGET_MODES() {
      return WIDGET_MODES;
    }
  },
  methods: {
    ...mapActions({
      setToken: "widget/setToken",
      setCustomer: "widget/setCustomer",
      showWidget: "widget/show",
      canShowWidget: "widget/canShowWidget",
      setShowAt: "widget/setShowAt",
      setMinimized: "widget/setMinimized"
    }),
    getIframeData() {
      const iframe = useIframeControl();
      iframe.updateDataListener();
      iframe.getTokenKey();
    },
    async setup() {
      this.getIframeData(); //Get data in iframe
      this.canShowWidget();
    },
    minimizeWidget(minimize) {
      this.setMinimized(minimize);
    }
  },
  created() {
    this.setup();
  }
};
</script>
<style scoped>
.box {
  background-color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px solid transparent;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}
.widget-fixed {
  position: fixed;
  bottom: 0px;
  right: 35px;
  max-height: 600px;
  max-width: 450px;
  width: 360px;
  z-index: 99999;
}
.widget-embebed {
  position: relative;
  width: 100%;
  max-height: 600px;
}
.icon-close {
  padding: 10px;
  text-align: right;
}
.cursor-pointer {
  cursor: pointer;
}

.widget-minimized {
  all: unset;
  position: fixed;
  right: 35px;
  bottom: 0;
  width: 56px;
  height: 40px;
  font-family: sans-serif;
  z-index: 2000;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px solid transparent;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
