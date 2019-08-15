<template>
  <StyledSocialContact class="social__contact">
    <ul>
      <NavItem external :href="twitter" ariaLabel="Olaolu on Twitter">
        TW
      </NavItem>
      <NavItem external :href="github" ariaLabel="Olaolu on GitHub">
        GH
      </NavItem>
      <NavItem external :href="linkedIn" ariaLabel="Olaolu on LinkedIn">
        LN
      </NavItem>
      <NavItem external :href="youtube" ariaLabel="Olaolu's YouTube channel">
        YT
      </NavItem>
    </ul>
  </StyledSocialContact>
</template>

<script>
import styled from 'vue-styled-components'
import { SOCIAL_PROFILES } from '../constants'
const { twitter, linkedIn, github, youtube } = SOCIAL_PROFILES

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

export default {
  name: 'SocialContact',
  data: () => ({ twitter, linkedIn, github, youtube }),
  components: { StyledSocialContact },
}

StyledSocialContact.name = 'StyledSocialContact'
</script>
