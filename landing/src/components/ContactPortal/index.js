import Vue from 'vue'
import styled from 'vue-styled-components'
import { SOCIAL_PROFILES } from '@/constants'

export default {
  Basic: Vue.component('BasicContact', {
    render() {
      return (
        <StyledBasicContact class="basic__contact">
          <span class="say__hello">Say Hello</span>

          <ul>
            <Link href="mailto:hello@olaolu.me">hello@olaolu.me</Link>
            <Link href="tel:+234808XXXXXXX">+234 808 XXX XXXX</Link>
          </ul>
        </StyledBasicContact>
      )
    },
  }),

  Social: Vue.component('SocialContact', {
    render() {
      const { twitter, linkedIn, github, youtube } = SOCIAL_PROFILES

      return (
        <StyledSocialContact class="social__contact">
          <ul>
            <Link external href={twitter} ariaLabel="Olaolu on Twitter">
              TW
            </Link>
            <Link external href={github} ariaLabel="Olaolu on GitHub">
              GH
            </Link>
            <Link external href={linkedIn} ariaLabel="Olaolu on LinkedIn">
              LN
            </Link>
            <Link external href={youtube} ariaLabel="Olaolu's YouTube channel">
              YT
            </Link>
          </ul>
        </StyledSocialContact>
      )
    },
  }),
}

const StyledBasicContact = styled.div`
  font-size: 1em;
  line-height: 2.5;
  position: relative;

  ul {
    font-size: 1.15em;
  }

  a {
    color: currentColor;
  }
`

const StyledSocialContact = styled.div`
  position: relative;

  li {
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 2.5em;
    }
  }

  a {
    color: currentColor;
  }
`

StyledBasicContact.name = 'StyledBasicContact'
StyledSocialContact.name = 'StyledSocialContact'
