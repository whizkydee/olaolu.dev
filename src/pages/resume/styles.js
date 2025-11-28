import Layout from '~/layouts/Default'
import { default as styled, css, injectGlobal } from 'vue-styled-components'

const StyledResume = css`
  position: relative;

  #main {
    max-width: unset;
    display: flex;
    padding-top: 6.7rem;
    padding-bottom: 6.7rem;
    position: relative;
    background-color: var(--bg-color);

    @media (max-width: 790px) {
      flex-direction: column;
      padding-right: var(--space);
    }

    @media (min-width: 1024px) {
      margin-top: 0;
    }

    @media (min-width: 1200px) {
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
    margin-bottom: 1rem;
    font-size: 4.5rem;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--electric-blue);
  }

  h3 {
    margin: 0;
  }

  .meta {
    position: absolute;
    right: 2em;
    top: 2em;
    display: flex;
    font-size: 0.9em;

    a {
      position: relative;
      align-items: center;
      font-weight: normal;
      color: rgba(71, 71, 71, 0.9);

      &:not([hidden]) {
        display: flex;

        @media (min-width: 791px) {
          &[href^='mailto:'] {
            display: none;
          }
        }
      }

      &:not(:last-of-type) {
        margin-right: 1em;
      }

      &.linkedin {
        color: #0077b5;
        ${({ isPDF }) =>
          isPDF &&
          css`
            margin-right: 0;
          `}
      }

      &:last-of-type svg {
        opacity: 0.8;
        margin-right: 0.3em;
      }

      svg {
        width: 1em;
        height: 1em;
        flex-shrink: 0;

        path {
          fill: currentColor;
        }
      }
    }
  }

  #resume-outlines {
    display: flex;
    flex-shrink: 0;
    position: relative;

    @media (max-width: 790px) {
      font-size: 0.9em;
      justify-content: space-between;

      ul {
        display: flex;
        flex-wrap: wrap;
      }

      li {
        &:before {
          display: none;
        }

        &:not(:last-of-type):after {
          content: ',';
          margin-right: 0.2em;
        }
      }
    }

    @media (min-width: 791px) {
      flex-direction: column;
    }

    @media (min-width: 791px) and (max-width: 999px) {
      margin-right: 3rem;
    }

    @media (min-width: 1000px) {
      margin-right: 6rem;
    }

    section {
      position: relative;

      @media (max-width: 790px) {
        &:first-of-type {
          display: none;
        }

        &:last-of-type {
          margin-left: 1em;
        }
      }

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
    @media (min-width: 791px) {
      max-width: 80vw;
    }

    .company > p,
    > section > p,
    .company .points,
    #profile-summary > p {
      @media (min-width: 791px) and (max-width: 999px) {
        max-width: 90%;
      }

      @media (min-width: 1000px) {
        max-width: 70%;
      }
    }

    > section {
      position: relative;

      &:not(:last-of-type) {
        margin-bottom: 5em;
      }
    }

    p {
      font-size: 1.2em;
    }
  }

  #projects {
    margin-bottom: 14em;

    p {
      font-size: 1.1em;

      a {
        margin: 0 0.2em;
      }
    }
  }

  #profile-summary {
    position: relative;
    margin-bottom: 5rem;

    &:after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: var(--border-color);

      @media (min-width: 791px) {
        margin-left: -8%;
      }

      @media (min-width: 791px) and (max-width: 1199px) {
        width: 115%;
      }

      @media (min-width: 1200px) {
        width: 118%;
      }
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

      @media (max-width: 790px) {
        flex-direction: column;
        margin-bottom: 1em;

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }

    .period {
      flex-shrink: 0;

      @media (min-width: 791px) {
        margin-left: auto;
        margin-right: 2em;
      }
    }

    h4 {
      margin-top: 0;
      line-height: 1.4;
      margin-right: 1em;

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
        text-indent: -0.97em;

        &:not(:last-of-type) {
          margin-bottom: 0.3em;
        }
      }
    }

    .outro {
      margin-top: 1em;
    }
  }

  #logo {
    position: absolute;
    width: 7em;
    bottom: 2em;

    @media (max-width: 790px) {
      left: 2.5em;
    }

    @media (min-width: 791px) {
      left: 4em;
    }

    path {
      fill: var(--electric-blue);
    }
  }
`

injectGlobal`
  #skip-link {
    top: -9em;

    &:focus {
      top: -6em;
    }
  }
`

export default Object.assign(
  { name: 'StyledResume' },
  styled(Layout, {
    isPDF: Boolean,
  })([StyledResume])
)
