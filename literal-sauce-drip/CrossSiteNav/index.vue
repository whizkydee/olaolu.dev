<template>
  <ul class="cross__site__nav">
    <NavItem :href="workURL">Work</NavItem>
    <NavItem :href="shelfURL" external v-if="isHome">My Shelf</NavItem>
    <NavItem :href="landingURL" external v-else>Homepage</NavItem>
    <NavItem href="/resume.pdf">My Rèsumè</NavItem>
  </ul>
</template>
