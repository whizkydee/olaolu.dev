<template>
  <StyledWorkLayout
    :id="'work-' + computedId"
    :title="title"
    :description="description"
  >
    <PageHeader :title="name" hideDecor />

    <ClientOnly>
      <carousel
        :autoplay="true"
        :navigationEnabled="true"
        :perPage="1"
        :speed="1000"
        :loop="true"
        :autoplayTimeout="3000"
        ref="carousel"
        :centerMode="true"
      >
        <slide v-for="(image, index) in images" :key="index">
          <img
            :src="image"
            :alt="`${name}: Screen ${index + 1}.`"
            @click="handleSlideClick"
          />
        </slide>
      </carousel>
    </ClientOnly>

    <div class="post__content">
      <slot />
    </div>

    <section class="contact-container">
      <Cavalier
        heading="Let's work together!"
        text="Like my work and want something similar for your company? Sure, let's get to business!"
      />
      <ContactForm />
    </section>
  </StyledWorkLayout>
</template>

<script>
import DefaultLayout from './Default'
import { hyphenateName } from '~/helpers'
import { openExternalWindow } from '@mrolaolu/helpers'
import { default as styled, injectGlobal } from 'vue-styled-components'

injectGlobal`
  :root:not(.is-tabbing) {
    .VueCarousel-navigation-button:focus,
    .VueCarousel-dot:focus {
      outline: none;
    }
  }
`

const StyledWorkLayout = styled(DefaultLayout)`
  main {
    max-width: 1400px;
  }

  .VueCarousel-slide {
    min-height: 40vw;
    max-height: 42.5vw;
    position: relative;

    img {
      cursor: pointer;
    }
  }

  .post__content {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);
  }

  .contact-container {
    display: flex;
    margin-top: 3rem;
    padding-top: 3rem;
    border-top: 1px solid var(--border-color);

    @media (max-width: 800px) {
      flex-direction: column;
    }

    .cavalier {
      @media (min-width: 801px) {
        margin-right: 3em;
      }

      @media (max-width: 500px) {
        font-size: 0.8em;
      }

      h1 {
        @media (max-width: 1198px) {
          font-size: 3em;
        }

        @media (max-width: 800px) {
          max-width: unset;
        }
      }
    }

    .contact-form {
      flex-basis: 70%;

      .form-row {
        @media (max-width: 580px) {
          font-size: unset;
        }
      }
    }

    #submit-button {
      align-self: flex-start;

      @media (max-width: 500px) {
        font-size: 0.7em;
      }

      @media (min-width: 581px) {
        margin-top: 3em;
      }
    }

    textarea,
    input:not([type='submit']):not([type='button']) {
      font-size: 0.9em;
    }
  }
`

export default {
  name: 'WorkLayout',
  mounted() {
    document.addEventListener('keydown', this.maybeScrollCarousel)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.maybeScrollCarousel)
  },
  methods: {
    handleSlideClick(event) {
      openExternalWindow(event.target.src)
    },

    maybeScrollCarousel(event) {
      const { carousel } = this.$refs

      if (
        document.activeElement !== document.body &&
        event.target !== carousel.$el &&
        !carousel.$el.contains(event.target)
      ) {
        return
      }

      carousel.goToPage(
        event.key === 'ArrowRight' || event.key === 'Right'
          ? carousel.getNextPage()
          : event.key === 'ArrowLeft' || event.key === 'Left'
          ? carousel.getPreviousPage()
          : carousel.currentPage
      )
    },
  },

  computed: {
    computedId() {
      return this.id || hyphenateName(this.name)
    },
    title() {
      return this.name + `- Olaolu's shelf`
    },
    description() {
      return 'Highlights of the work process on ' + this.name + '.'
    },
    images() {
      return Array(this.slideCount)
        .fill()
        .map((_, index) => {
          index = index + 1
          return `/work-images/${this.computedId}/screen${index}.${this.imageFormat}`
        })
    },
  },
  metaInfo() {
    return {
      title: this.name,
    }
  },

  components: {
    StyledWorkLayout,
    Carousel: () =>
      import('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import('vue-carousel')
        .then(m => m.Slide)
        .catch(),
  },
  props: {
    id: {
      type: String,
    },
    tech: {
      type: String,
    },
    loc: {
      type: String,
    },
    period: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    slideCount: {
      type: Number,
      required: true,
    },
    imageFormat: {
      type: String,
      default: 'jpg',
    },
  },
}
</script>
