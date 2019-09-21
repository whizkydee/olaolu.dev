<template>
  <div id="app" :style="!ready && 'display: none'">
    <Header currentSection="" id="site-header" noMenuShadow />

    <ContentView :id="id">
      <slot />
    </ContentView>

    <Footer id="site-footer" />
  </div>
</template>

<script>
export default {
  data: () => ({ ready: process.env.NODE_ENV === 'development' }),
  created() {
    // hack to hide display until sauce drip
    // components are rendered and painted
    // onto the page.
    if (typeof window !== 'undefined') {
      window.setTimeout(() => (this.ready = true), 0)
    }
  },
  props: {
    id: String,
  },
}
</script>

<style lang="scss">
#site-header {
  position: unset;
  font-size: 0.72rem;

  #logo {
    color: var(--electric-blue);
  }
}

main {
  margin: 0 auto;
  margin-top: calc(var(--space) * 1.2);
  padding: 0 var(--space);
  max-width: var(--content-width);

  @media (min-width: 651px) {
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
  }
}

.page-heading {
  user-select: none;
  text-align: center;
  font-size: 1.802em;
  margin-bottom: var(--space);

  span {
    opacity: 0.7;
  }
}

#site-footer {
  height: unset;
  margin-top: 7rem;
  font-size: 0.864rem;

  .footer__content {
    padding-top: 5rem;
    padding-bottom: 3rem;
  }
}

#post,
.posts {
  p,
  li,
  time,
  span:not(.token) {
    letter-spacing: 0.011rem;
  }
}
</style>
