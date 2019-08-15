<template>
  <li>
    <a
      :href="href"
      :class="className"
      :aria-label="ariaLabel"
      :aria-current="ariaCurrent"
      :target="external && '_blank'"
      :rel="external && 'noreferrer noopener'"
      @click="
        e => {
          this.href.charAt(0) === '#' && e.preventDefault()
          typeof clickFn === 'function' && clickFn.call(this, e)
        }
      "
    >
      <slot />
    </a>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    href: String,
    clickFn: Function,
    ariaLabel: String,
    className: String,
    ariaCurrent: [String, Boolean],
    external: { type: Boolean, default: false },
  },
}
</script>
