import Vue from 'vue'
import StyledHomepage from './styles'

const Homepage = Vue.component('Homepage', {
  render() {
    return (
      <StyledHomepage id="une" class="pente">
        <div class="content__wrapper">
          <div class="cavalier">
            <h1>
              Front end Dev &amp;
              <br />
              UX Strategy.
            </h1>

            <p>
              I like to craft solid and scalable products with great user
              experiences.
            </p>
          </div>

          <figure class="visage">
            <img alt="Photo of Olaolu" src="/img/olaolu.jpg" />
          </figure>
        </div>
      </StyledHomepage>
    )
  },
})

export default Homepage
