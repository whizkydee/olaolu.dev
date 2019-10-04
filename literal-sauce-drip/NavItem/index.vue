<template>
  <li>
    <a
      :href="href"
      :class="className"
      v-bind="anchorAttrs"
      :aria-label="ariaLabel"
      :aria-current="ariaCurrent"
      :target="external && '_blank'"
      :rel="external && 'noreferrer noopener'"
      @click="
        e => {
          if (this.href) {
            this.href.charAt(0) === '#' && e.preventDefault()
          }
          if (typeof clickFn === 'function') {
            clickFn.call(this, e)
          }
        }
      "
    >
      <slot />
    </a>
  </li>
</template>

<script>
export default {
  props: {
    href: String,
    clickFn: Function,
    ariaLabel: String,
    className: String,
    anchorAttrs: Object,
    ariaCurrent: [String, Boolean],
    external: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
@media (hover: hover) and (any-pointer: fine) {
  a:not(.nav__bullet) {
    position: relative;

    &:hover:after {
      opacity: 0.2;
      transform: translateX(0.5em);
    }

    &:after {
      content: '';
      width: 20%;
      min-width: 1em;
      height: 100%;
      opacity: 0;
      top: 0;
      right: 0;
      transform: translateX(0);
      transform-origin: left;
      transition: 0.3s;
      position: absolute;
      pointer-events: none;
      background-color: currentColor;
    }
  }
}

.is__tabbing a:not(.nav__bullet):focus {
  outline-width: 2px;
}
</style>
