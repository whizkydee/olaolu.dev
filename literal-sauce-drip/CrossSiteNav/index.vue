<template>
  <ul class="cross-site-nav" v-if="isShelf">
    <NavItem :href="landingURL">Home</NavItem>
    <NavItem :href="workURL">My Work</NavItem>
    <NavItem :href="resumeURL" external>My Résumé</NavItem>
  </ul>

  <ul class="cross-site-nav" v-else>
    <NavItem :href="landingURL" v-if="isWork">Home</NavItem>
    <NavItem :href="workURL" v-else>My Work</NavItem>
    <NavItem :href="shelfURL" v-if="isHome || isWork">My Shelf</NavItem>
    <NavItem :href="landingURL" v-else>Home</NavItem>
    <NavItem :href="resumeURL" external>My Résumé</NavItem>
  </ul>
</template>
