<template>
  <StyledInputGroup :data-id="id" :class="['input-group', { focused }]">
    <label :for="id" v-if="label"> {{ label }}</label>

    <input
      :id="id"
      v-on="listen"
      :placeholder="placeholder"
      @focus="handleFocus"
      v-if="!textarea"
      @blur="handleBlur"
      :type="type"
      :name="name"
      :required="required"
      v-bind="inputAttrs"
    />

    <textarea
      v-bind="inputAttrs"
      @blur="handleBlur"
      @focus="handleFocus"
      :placeholder="placeholder"
      v-else-if="textarea"
      :id="id"
      v-on="listen"
      :name="name"
      :required="required"
      rows="7"
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
  color: rgba(61, 21, 95, 0.7);

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.input-group.focused {
    color: ${theme.colors.electricBlue};
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
  data: () => ({ focused: false }),

  methods: {
    handleFocus(event) {
      this.focused = true
      if (this.listen && typeof this.listen.focus === 'function') {
        this.listen.focus.call(this, event)
      }
    },

    handleBlur(event) {
      this.focused = false
      if (this.listen && typeof this.listen.blur === 'function') {
        this.listen.blur.call(this, event)
      }
    },
  },

  components: {
    StyledInputGroup,
  },

  props: {
    label: String,
    listen: Object,
    name: String,
    placeholder: String,
    inputAttrs: Object,
    required: Boolean,
    id: { type: String, required: true },
    type: { type: String, default: 'text' },
    textarea: { type: Boolean, default: false },
  },
}

StyledInputGroup.name = 'StyledInputGroup'
</script>
