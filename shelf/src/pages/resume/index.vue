<template>
  <ContentView id="resume">
    <aside>
      <section>
        <a :href="landingURL">olaolu.dev</a>
        <span>Lagos, Nigeria</span>
        <span>(+234) 908-252-9713</span>
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
        <h1>Olaolu <br />Olawuyi</h1>
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
          I’ve worked on tons of web projects over the past 8 years, some of
          which were for the following organizations:
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

            <p v-html="company.outro"></p>
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
}
</script>

<style lang="scss">
html {
  --base-font-size: 16px;

  @media (min-width: 1441px) {
    --base-font-size: 20px;
  }
}
body {
  background-color: #fff;
}

main {
  display: flex;
  user-select: none;
  max-width: unset;
  padding-top: 6.7rem;
  padding-bottom: 6.7rem;
  background-color: var(--bg-color);

  @media (min-width: 1024px) {
    margin: calc(var(--space) * 1.2) 7vw;
  }
}

p,
ul {
  opacity: 0.85;
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

h1 {
  line-height: 1;
  font-size: 4.5rem;
  letter-spacing: -0.03em;
  color: var(--electric-blue);
}

h3 {
  margin: 0;
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

    span {
      opacity: 0.85;
      font-weight: normal;
      color: var(--body-color);

      &:before {
        content: '— ';
      }
    }
  }

  p {
    margin: 0;
  }

  .points {
    margin-top: 1em;
    margin-left: 1em;
    font-size: 1.1em;

    li {
      text-indent: -20px;

      &:not(:last-of-type) {
        margin-bottom: 0.3em;
      }
    }
  }
}
</style>
