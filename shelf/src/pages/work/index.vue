<template>
  <Layout
    id="list-of-projects"
    title="Work - Olaolu's shelf"
    description="Selected work including open source projects, experimentals and front-end apps by Olaolu"
  >
    <h1 class="page-heading"><span>/</span>work</h1>

    <div class="post__content">
      <p>
        Hey there! As you probably know, documenting one's past work can be
        pretty tedious 😬.
      </p>

      <p>
        Now, while this page is in the works, I've put so much effort to my
        entire site so it's probably enough to convince you how good my work is.
        Anyways, knock yourself out, this site is hosted on Netlify, uses JSX in
        Vue, Gridsome and Styled Components and the codebase is right on my
        GitHub at
        <a
          target="_blank"
          href="https://github.com/whizkydee/olaolu.dev"
          @click="$ga.event('Work', 'click', 'olaolu.dev repo link')"
          >whizkydee/olaolu.dev
        </a>
        . You can also check out my other open source projects on
        <a
          href="https://github.com/whizkydee"
          target="_blank"
          @click="$ga.event('Work', 'click', 'resume pdf')"
        >
          GitHub
        </a>
        or download a copy of my
        <a
          :href="resumePDF"
          target="_blank"
          @click="
            $ga.event('Work', 'click', 'resume pdf', { transport: 'beacon' })
          "
        >
          résumé </a
        >.
      </p>

      <p>
        Also, I'm currently available for contracts and remote full-time roles.
        Want us to work together? You can send me a mail at
        <a href="mailto:hello@olaolu.dev">hello@olaolu.dev</a> or
        <a
          :href="socialProfiles.twitter"
          target="_blank"
          @click="$ga.event('Work', 'click', 'twitter link')"
        >
          reach me on Twitter</a
        >!
      </p>

      <p>
        If you're still not convinced or you're just curious about some of my
        other work and want to hire me, feel free to send me a mail and we can
        schedule a demo call for sometime where I'll show you the apps I've
        worked on and probably walk you through interesting parts of the code.
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Work',
  },
}
</script>
