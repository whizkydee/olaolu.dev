<template>
  <StyledWorkLayout :id="computedId" :title="title" :description="description">
    <h1 class="page-heading">{{ name }}</h1>

    <ClientOnly>
      <carousel
        :autoplay="true"
        :navigationEnabled="true"
        :perPage="1"
        :speed="1000"
        :autoplayTimeout="3000"
        ref="carousel"
        :centerMode="true"
      >
        <slide v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="`${name}: Screen ${index + 1}`" />
        </slide>
      </carousel>
    </ClientOnly>

    <div class="post__content">
      <slot />
    </div>

    <section class="contact__container">
      <Cavalier
        heading="Let's Work together!"
        text="Like my work and want something simlar for your company? Sure, let's get to business!"
      />
      <ContactForm />
    </section>
  </StyledWorkLayout>
</template>

<script>
import DefaultLayout from './Default'
import { hyphenateName } from '~/helpers'
import { default as styled, injectGlobal } from 'vue-styled-components'

injectGlobal`
  :root:not(.is__tabbing) {
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
    max-height: 710px;
    /* background-color: rgba(0, 0, 0, 0.01); */
  }

  .post__content {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);
  }

  .contact__container {
    display: flex;
    margin-top: 6rem;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    .cavalier {
      @media (min-width: 801px) {
        margin-right: 3em;
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

    .contact__form {
      flex-basis: 70%;

      .form__row {
        @media (max-width: 580px) {
          font-size: unset;
        }
      }
    }

    #submit__button {
      align-self: flex-start;

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
    maybeScrollCarousel(event) {
      const { carousel } = this.$refs

      if (
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
      return Array(this.slidesCount)
        .fill('')
        .map((_, index) => {
          index = index + 1
          return `/work-images/${this.computedId}/screen${index}.jpg`
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
    id: { type: String },
    name: { type: String, required: true },
    slidesCount: { type: Number, required: true },
  },
}
</script>
