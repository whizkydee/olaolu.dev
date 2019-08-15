<template>
  <StyledInputGroup
    :data-id="id"
    :class="'input__group' + (focused ? ' focused' : '')"
  >
    <label :for="id" v-if="label">{{ label }}</label>

    <input
      :id="id"
      :type="type"
      :name="name"
      v-on="listen"
      v-if="!textarea"
      @blur="handleBlur"
      v-bind="inputAttrs"
      @focus="handleFocus"
      :placeholder="placeholder"
    />

    <textarea
      :id="id"
      rows="7"
      :name="name"
      v-on="listen"
      @blur="handleBlur"
      v-bind="inputAttrs"
      @focus="handleFocus"
      v-else-if="textarea"
      :placeholder="placeholder"
    />
    <slot />
  </StyledInputGroup>
</template>

<script>
import theme from '../theme'
import { toPx } from '@mrolaolu/helpers'
import styled from 'vue-styled-components'

const BORDER_THICKNESS = 1
const StyledInputGroup = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  color: ${theme.colors.default};

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.focused {
    color: ${theme.colors['electric-blue']};
  }

  label {
    margin-bottom: 5px;
  }

  textarea,
  [type='tel'],
  [type='text'],
  [type='email'],
  [type='search'],
  [type='password'] {
    border: 0;
    padding: 0.6em;
    padding-left: 0;
    position: relative;
    color: currentColor;
    background: transparent;
    border-bottom: ${toPx(BORDER_THICKNESS)} solid currentColor;

    &:after {
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      width: 100%;
      position: absolute;
      height: ${toPx(BORDER_THICKNESS)};
    }
  }
`

export default {
  name: 'InputGroup',

  data: () => ({
    focused: false,
  }),

  methods: {
    handleFocus(event) {
      this.focused = true
      if (this.inputAttrs && typeof this.inputAttrs.focus === 'function') {
        this.inputAttrs.focus.call(this, event)
      }
    },

    handleBlur(event) {
      this.focused = false
      if (this.inputAttrs && typeof this.inputAttrs.blur === 'function') {
        this.inputAttrs.blur.call(this, event)
      }
    },
  },

  components: {
    StyledInputGroup,
  },

  props: {
    name: String,
    label: String,
    listen: Object,
    inputAttrs: Object,
    placeholder: String,
    id: { type: String, required: true },
    type: { type: String, default: 'text' },
    textarea: { type: Boolean, default: false },
  },
}

StyledInputGroup.name = 'StyledInputGroup'
</script>