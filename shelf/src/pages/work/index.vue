<template>
  <StyledWork
    id="work"
    title="Work - Olaolu's shelf"
    description="Selected work including open source projects, experimentals and front-end apps by Olaolu"
  >
    <PageHeader
      title="work"
      desc="Selected projects I've worked on in the past."
    />

    <section class="work-container">
      <ul id="projects" aria-label="Projects.">
        <li v-for="(project, key) in projects" :key="key" class="project">
          <a
            class="project__link"
            :aria-label="project.summaryLinkLabel"
            :target="!project.internalPage && '_blank'"
            :rel="!project.internalPage && 'noopener noreferrer'"
            :href="project.internalPage ? project.path : project.siteURL"
            >{{ project.name }} project summary.</a
          >

          <figure class="project__logo">
            <span v-html="project.logo" aria-hidden="true" />
            <figcaption class="visuallyhidden">{{ project.name }} logo.</figcaption>
          </figure>

          <div class="project__info">
            <h5>{{ project.name }}</h5>
            <a
              target="_blank"
              v-if="project.siteName"
              rel="noopener noreferrer"
              :href="project.siteURL"
              class="project__info__siteName"
              :aria-label="project.name + ' live demo.'"
              >{{ project.siteName }}</a
            >
          </div>
        </li>
      </ul>
    </section>
  </StyledWork>
</template>

<script>
import projectsData from './data'
import Layout from '~/layouts/Default'
import { hyphenateName } from '~/helpers'
import { default as styled, injectGlobal } from 'vue-styled-components'

injectGlobal`
  .is-tabbing .project__link:focus {
    outline: none;

    & + .project__logo {
      filter: contrast(0.8);
    }
  }
`

const StyledWork = styled(Layout)`
  main {
    max-width: 1280px;
  }

  .page-header__heading {
    margin-bottom: 0;
  }

  #projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .project {
    flex-grow: 0;
    flex-shrink: 1;
    overflow: hidden;
    position: relative;
    margin-bottom: 1.2em;
    border-radius: 0.2rem;
    background-color: #fff;
    box-shadow: 0px 8px 6px -6px rgba(235, 234, 242, 0.58);
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transition-property: transform, box-shadow;

    @media (max-width: 659px) {
      width: 100%;
    }

    @media (min-width: 660px) and (max-width: 939px) {
      flex-basis: calc((100% - 1em) / 2);
    }

    @media (min-width: 940px) {
      flex-basis: calc((100% - 2em) / 3);
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 15px 8px 6px -6px rgba(235, 234, 242, 0.58);
    }

    &__logo {
      margin: 0;
      height: 10em;
      display: flex;
      align-items: center;
      transition: filter 0.3s;
      justify-content: center;
      background: rgba(245, 244, 252, 0.62);
    }

    &__info {
      padding: 2em;

      &__siteName {
        white-space: pre;
      }
    }

    h5 {
      margin: 0;
    }

    &__link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80%;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 0;
      transition: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
`

export default {
  components: { StyledWork },
  created() {
    this.showConsoleMarketingBanner()
  },

  computed: {
    projects() {
      return projectsData.map(project => ({
        ...project,
        summaryLinkLabel: project.internalPage
          ? null
          : project.name + ' live demo.',
        siteURL: !!project.siteName ? 'https://' + project.siteName : null,
        path: '/work/' + hyphenateName(project.name),
      }))
    },
  },

  metaInfo: {
    title: 'Work',
  },
}
</script>
