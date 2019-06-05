import Vue from 'vue'
import PitchSlate from './PitchSlate'
import { ContentView } from '@/components'

const Homepage = Vue.component('Homepage', {
  render() {
    return (
      <ContentView id="homepage">
        <PitchSlate id="une" />
      </ContentView>
    )
  },
})

export default Homepage
