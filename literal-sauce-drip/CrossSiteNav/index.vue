<template>
  <ul class="cross-site-nav">
    <NavItem :href="landingURL" v-if="isWork">Home</NavItem>
    <NavItem :href="workURL" v-else>Work</NavItem>
    <NavItem :href="shelfURL" v-if="isHome || isWork">My Shelf</NavItem>
    <NavItem :href="landingURL" v-else>Home</NavItem>
    <NavItem :href="resumeURL" external>My Résumé</NavItem>
  </ul>
</template>
