<template>
  <StyledBasicContact class="basic-contact">
    <span class="say-hello">Say Hello</span>

    <ul>
      <NavItem href="mailto:hello@olaolu.dev">hello@olaolu.dev</NavItem>
      <NavItem
        external
        href="https://t.me/mrolaolu"
        ariaLabel="t dot me forward slash mrolaolu"
        >t.me/mrolaolu</NavItem
      >
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
  components: { StyledBasicContact, NavItem },
}

StyledBasicContact.name = 'StyledBasicContact'
</script>
