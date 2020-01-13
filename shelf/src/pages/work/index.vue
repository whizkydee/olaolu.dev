<template>
  <StyledWork
    id="list-of-projects"
    title="Work - Olaolu's shelf"
    description="Selected work including open source projects, experimentals and front-end apps by Olaolu"
  >
    <h1 class="page-heading"><span>/</span>work<span>.</span></h1>
    <p class="page-desc">Selected projects I've worked on in the past.</p>

    <section class="work-container">
      <ul id="projects">
        <li v-for="(project, key) in projects" :key="key" class="project">
          <figure v-html="project.logo"></figure>

          <div class="project__info">
            <h5>{{ project.name }}</h5>
            <a
              target="_blank"
              v-if="project.siteName"
              rel="noopener noreferrer"
              :href="project.siteURL"
              class="project__info__siteName"
              >{{ project.siteName }}</a
            >
          </div>
          <a
            :target="!project.internalPage && '_blank'"
            :rel="!project.internalPage && 'noopener noreferrer'"
            :href="project.internalPage ? project.path : project.siteURL"
            class="project__link"
            >Link</a
          >
        </li>
      </ul>
    </section>
  </StyledWork>
</template>

<script>
import projectsData from './data'
import Layout from '~/layouts/Default'
import { hyphenateName } from '~/helpers'
import { default as styled } from 'vue-styled-components'

const StyledWork = styled(Layout)`
  main {
    max-width: 1280px;
  }

  .page-heading {
    margin-bottom: 0;
  }

  .page-desc {
    text-align: center;
    margin-bottom: var(--space);
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
    transition: 0.6s transform, box-shadow cubic-bezier(0.23, 1, 0.32, 1);

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

    figure {
      margin: 0;
      height: 10em;
      display: flex;
      align-items: center;
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
  computed: {
    projects() {
      return projectsData.map(project => ({
        ...project,
        siteURL: !!project.siteName ? 'https://' + project.siteName : null,
        path: '/work/' + hyphenateName(project.name),
      }))
    },
  },

  components: {
    StyledWork,
  },
  metaInfo: {
    title: 'Work',
  },
}
</script>
