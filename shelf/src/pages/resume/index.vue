<template>
  <ContentView id="resume">
    <aside>
      <section>
        <a href="/">olaolu.dev</a>
        <span>Lagos, Nigeria</span>
        <a href="mailto:hello@olaolu.dev">hello@olaolu.dev</a>
      </section>

      <section>
        <h3>Core Technologies:</h3>
        <ul>
          <li v-for="(tech, index) in data.technologies" :key="index">
            {{ tech }}
          </li>
        </ul>
      </section>

      <section>
        <h3>Others:</h3>
        <ul>
          <li
            v-for="(proficiency, index) in data.otherProficiencies"
            :key="index"
          >
            {{ proficiency }}
          </li>
        </ul>
      </section>
    </aside>

    <article>
      <header id="profile-summary">
        <h1 id="name">Olaolu <br />Olawuyi</h1>
        <h2>Expert Front end developer and UI Engineer.</h2>
        <p>
          Engineer valued for driving high-performance and elegant web
          experiences and applications. I design high-quality, user-friendly and
          scalable web products.
        </p>
      </header>

      <section id="experience">
        <h3 class="heading">Experience</h3>

        <p>
          I’ve worked on a handful of web projects over the past
          {{ new Date().getFullYear() - 2011 }} years, some of which were for
          the following organizations:
        </p>

        <ul id="companies">
          <li
            v-for="(company, index) in data.companies"
            :key="index"
            class="company"
          >
            <header>
              <h4>
                {{ company.name }} <span>{{ company.role }}</span>
              </h4>
              <span class="period">{{ company.period }}</span>
            </header>

            <p>{{ company.intro }}</p>

            <ul class="points">
              <li v-for="(point, index) in company.points" :key="index">
                {{ point }}
              </li>
            </ul>

            <p v-html="company.outro" class="outro" />
          </li>
        </ul>
      </section>
    </article>
  </ContentView>
</template>

<script>
import data from './data'
import { createMeta } from '~/helpers'

export default {
  data: () => ({ data }),

  metaInfo() {
    return {
      title: `My Rèsumè`,
      meta: [
        ...createMeta.urls(this.resumeURL, 1),
        ...createMeta.titles(`Olaolu's Rèsumè`, 1),
        { name: 'og:locale', content: 'en_US' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@mrolaolu' },
        { name: 'twitter:creator', content: '@mrolaolu' },
      ],
    }
  },
}
</script>

<page-query>
</page-query>

<style lang="scss">
#resume {
  --base-font-size: 16px;

  @media (min-width: 1441px) {
    --base-font-size: 20px;
  }

  body {
    transition: none;
    background-color: #fff;
  }

  a,
  h3,
  h4 {
    font-weight: bold;
    display: inline-block;

    &:not(.color-off) {
      color: var(--electric-blue);
    }
  }

  a,
  .heading {
    &:after {
      content: '';
      background: var(--lime);
      height: 0.4em;
      width: 109%;
      display: block;
      margin-top: -0.6rem;
      margin-left: -4%;
    }
  }
}
</style>

<style lang="scss" scoped>
#app {
  display: flex;
  max-width: unset;
  user-select: none;
  padding-top: 6.7rem;
  padding-bottom: 6.7rem;
  background-color: var(--bg-color);

  @media (min-width: 1024px) {
    margin: calc(var(--space) * 1.2) 7vw;
  }
}

p,
ul {
  color: rgba(71, 71, 71, 0.75);
}

ul li {
  position: relative;

  &:before {
    width: 0.4em;
    content: '';
    height: 0.4em;
    margin-right: 0.3em;
    vertical-align: 10%;
    display: inline-block;
    filter: contrast(1.2);
    background: currentColor;
  }
}

#name {
  margin-top: 0;
  line-height: 1;
  font-size: 4.5rem;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
  color: var(--electric-blue);
}

h3 {
  margin: 0;
}

aside {
  flex-shrink: 0;
  position: relative;
  margin-right: 6rem;

  section {
    position: relative;

    &:not(:last-of-type) {
      margin-bottom: 2em;
    }

    h3 {
      font-size: 1.2em;
    }

    span {
      display: block;
    }
  }
}

article {
  max-width: 80vw;
  position: relative;

  .company > p,
  #experience > p,
  .company .points,
  #profile-summary > p {
    max-width: 70%;
  }

  p {
    font-size: 1.2em;
  }
}

#profile-summary {
  position: relative;
  margin-bottom: 5rem;

  &:after {
    content: '';
    position: absolute;
    width: 118%;
    height: 1px;
    background-color: var(--border-color);
    margin-left: -8%;
  }

  h2 {
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 3em 0 2em;
  }
}

#companies {
  position: relative;
}

.company {
  position: relative;

  &:before {
    display: none;
  }

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  header {
    display: flex;
  }

  .period {
    flex-shrink: 0;
    margin-left: auto;
    margin-right: 2em;
  }

  h4 {
    margin-top: 0;
    line-height: 1.4;

    span {
      font-weight: normal;
      color: rgba(71, 71, 71, 0.75);

      &:before {
        content: '— ';
      }
    }
  }

  p {
    margin: 0;
  }

  .outro,
  .points {
    font-size: 1.1em;
  }

  .points {
    margin-top: 1em;
    margin-left: 1em;

    li {
      text-indent: -20px;

      &:not(:last-of-type) {
        margin-bottom: 0.3em;
      }
    }
  }

  .outro {
    margin-top: 1em;
  }
}
</style>
