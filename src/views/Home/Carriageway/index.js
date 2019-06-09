import Vue from 'vue'
import StyledCarriageway from './styles'

const Carriageway = Vue.component('Carriageway', {
  render() {
    return (
      <StyledCarriageway>
        <div class="carriageway__content">
          <ul class="lanes">
            <li>
              <Cavalier
                heading="I build &amp; <br/> design stuff"
                text="Open source <br/> projects, web apps <br/> and experimentals."
              />

              <Button url="/repo">See my repo!</Button>
            </li>

            <li>
              <Cavalier
                heading="I write, <br/> sometimes"
                text="About design, <br/> front end dev, <br/> learning and life."
              />

              <Button url="/paper">See my articles!</Button>
            </li>
          </ul>
        </div>
      </StyledCarriageway>
    )
  },
})

export default Carriageway
