import Vue from 'vue'
import StyledCarriageway from './styles'

const Carriageway = Vue.component('Carriageway', {
  props: ['name'],
  render() {
    return (
      <StyledCarriageway name={this.name}>
        <div class="inner__content">
          <ul class="lanes">
            <li>
              <Cavalier
                heading="I build &amp; <br/> design stuff"
                text="Open source <br/> projects, web apps <br/> and experimentals."
              />

              <Button url={this.workURL}>See my work</Button>
            </li>

            <li>
              <Cavalier
                heading="I write, <br/> sometimes"
                text="About design, <br/> frontend dev, <br/> learning and life."
              />

              <Button url={this.shelfURL}>Go to Shelf</Button>
            </li>
          </ul>
        </div>
      </StyledCarriageway>
    )
  },
})

export default Carriageway
