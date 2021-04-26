<template>
  <li :class="className" class="navitemstyle" :id="id">
    <slot></slot>
  </li>
</template>

<script>
import { v4 as uuid } from "uuid";

export default {
  props: {
    className: {
      type: String,
      default: "nav-item",
    },
    id: {
      type: String || Number,
      default: uuid(),
    },
  },
};
</script>

<style lang="scss">
.navitemstyle {
  display: flex;
  flex-direction: column;
}
</style>
