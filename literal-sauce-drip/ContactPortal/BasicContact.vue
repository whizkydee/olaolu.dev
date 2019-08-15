<template>
  <StyledBasicContact class="basic__contact">
    <span class="say__hello">Say Hello</span>

    <ul>
      <NavItem href="mailto:hello@olaolu.me">hello@olaolu.me</NavItem>
      <NavItem href="tel:+234808XXXXXXX">+234 808 XXX XXXX</NavItem>
    </ul>
  </StyledBasicContact>
</template>

<script>
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
  components: { StyledBasicContact },
}

StyledBasicContact.name = 'StyledBasicContact'
</script>
