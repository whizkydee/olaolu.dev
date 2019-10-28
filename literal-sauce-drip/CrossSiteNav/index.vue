<template>
  <ul class="cross__site__nav">
    <NavItem :href="landingURL" v-if="isWork">Home</NavItem>
    <NavItem :href="workURL" v-else>Work</NavItem>
    <NavItem :href="shelfURL" v-if="isHome || isWork">My Shelf</NavItem>
    <NavItem :href="landingURL" v-else>Home</NavItem>
    <NavItem href="/resume.pdf">My Rèsumè</NavItem>
  </ul>
</template>
