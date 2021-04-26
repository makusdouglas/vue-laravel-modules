<template>
  <span class="item-container">
    <span class="item-title">
      <slot></slot>
      <a
        :href="href"
        :class="className"
        :data-toggle="datatoggle"
        :data-target="datatarget"
      >
        {{ name }}
      </a>
    </span>
    <span>
      <chevron-down
        v-if="selected || className == 'nav-link text-truncate collapsed'"
        :size="16"
      />
      <chevron-left v-else-if="chevron" :size="16" />
    </span>
  </span>
</template>
<script>
import ChevronLeft from "vue-material-design-icons/ChevronLeft";
import ChevronDown from "vue-material-design-icons/ChevronDown";
import CircleIcon from "vue-material-design-icons/CircleOutline";
export default {
  props: {
    className: { default: "nav-link text-truncate" },
    href: { default: "#" },
    datatoggle: { default: "" },
    datatarget: { default: "" },
    preicon: {
      type: [String, Object],
      default: "circle-icon",
    },
    name: {
      required: true,
      default: "Nav item",
    },
    selected: {
      default: false,
    },
    chevron: {
      default: false,
    },
  },
  computed: {},
  components: {
    ChevronLeft,
    ChevronDown,
    CircleIcon,
  },
};
</script>
<style lang="scss">
.item-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

