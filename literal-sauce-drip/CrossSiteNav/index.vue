<template>
  <ul
    v-if="isShelf"
    itemscope
    class="cross-site-nav"
    itemtype="http://schema.org/SiteNavigationElement"
  >
    <NavItem :href="landingURL">Home</NavItem>
    <NavItem :href="workURL">My Work</NavItem>
    <NavItem :href="resumeURL" external>My Résumé</NavItem>
  </ul>

  <ul
    v-else
    itemscope
    class="cross-site-nav"
    itemtype="http://schema.org/SiteNavigationElement"
  >
    <NavItem :href="landingURL" v-if="isWork">Home</NavItem>
    <NavItem :href="workURL" v-else>My Work</NavItem>
    <NavItem :href="shelfURL" v-if="isHome || isWork">My Shelf</NavItem>
    <NavItem :href="landingURL" v-else>Home</NavItem>
    <NavItem :href="resumeURL" external>My Résumé</NavItem>
  </ul>
</template>
