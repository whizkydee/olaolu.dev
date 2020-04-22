import Vue from 'vue'
import StyledCarriageway from './styles'

const Carriageway = Vue.component('Carriageway', {
  props: ['name'],
  render() {
    return (
      <StyledCarriageway name={this.name}>
        <div class="inner-content">
          <div class="lanes">
            <div class="lane">
              <Cavalier
                heading="I build &amp; <br/> design stuff"
                text="Open source <br/> projects, web apps <br/> and experimentals."
              />

              <Button url={this.workURL}>See my work</Button>
            </div>

            <div class="lane">
              <Cavalier
                heading="I write, <br/> sometimes"
                text="About design, <br/> frontend dev, <br/> learning and life."
              />

              <Button url={this.shelfURL}>Read my Articles</Button>
            </div>
          </div>
        </div>
      </StyledCarriageway>
    )
  },
})

export default Carriageway
