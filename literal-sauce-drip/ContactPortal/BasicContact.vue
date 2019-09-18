<template>
  <StyledBasicContact class="basic__contact">
    <span class="say__hello">Say Hello</span>

    <ul>
      <NavItem href="mailto:hello@olaolu.dev">hello@olaolu.dev</NavItem>
      <NavItem href="https://t.me/mrolaolu" external>t.me/mrolaolu</NavItem>
    </ul>
  </StyledBasicContact>
</template>

<script>
import NavItem from '../NavItem'
import styled from 'vue-styled-components'

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

export default {
  name: 'BasicContact',
  components: { StyledBasicContact, NavItem },
}

StyledBasicContact.name = 'StyledBasicContact'
</script>
