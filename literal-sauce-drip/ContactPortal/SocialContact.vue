<template>
  <StyledSocialContact class="social__contact">
    <ul>
      <NavItem external :href="sp.twitter" ariaLabel="Olaolu on Twitter">
        TW
      </NavItem>
      <NavItem external :href="sp.github" ariaLabel="Olaolu on GitHub">
        GH
      </NavItem>
      <NavItem external :href="sp.linkedIn" ariaLabel="Olaolu on LinkedIn">
        LN
      </NavItem>
      <NavItem external :href="sp.youtube" ariaLabel="Olaolu's YouTube channel">
        YT
      </NavItem>
    </ul>
  </StyledSocialContact>
</template>

<script>
import NavItem from '../NavItem'
import styled from 'vue-styled-components'

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
  computed: {
    sp() {
      return this.socialProfiles
    },
  },

  components: {
    NavItem,
    StyledSocialContact,
  },
}

StyledSocialContact.name = 'StyledSocialContact'
</script>
