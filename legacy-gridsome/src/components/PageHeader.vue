<template>
  <header class="page-header">
    <h1 class="page-header__heading" v-if="title" :aria-label="title + '.'">
      <span aria-hidden="true">
        <span v-if="!hideDecor">{{ preTitleSymbol }}</span
        >{{ title }}<span v-if="!noDot && !hideDecor">.</span>
      </span>
    </h1>
    <p class="page-header__desc" v-if="desc">
      {{ desc }}
    </p>
  </header>
</template>

<script>
export default {
  props: {
    desc: String,
    title: String,
    noDot: Boolean,
    hideDecor: Boolean,
    preTitleSymbol: { type: String, default: '/' },
  },
}
</script>

<style lang="scss">
.page-header {
  position: relative;
  text-align: center;
  margin-top: 1.1em;
  margin-bottom: var(--space);

  &__heading {
    user-select: none;
    font-size: 1.802em;

    > span > span {
      opacity: 0.7;
    }
  }

  &__desc {
    position: relative;
  }
}

@media (max-width: 650px) {
  :root:not([id^='work-']) .page-header__heading {
    display: none;
  }
}
</style>
