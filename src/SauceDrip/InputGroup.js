import Vue from 'vue'
import { toPx } from '@mrolaolu/helpers'
import styled from 'vue-styled-components'

const InputGroup = Vue.component('InputGroup', {
  data: () => ({
    focused: false,
  }),

  methods: {
    handleFocus(event) {
      this.focused = true
      if (this.listeners && typeof this.listeners.focus === 'function') {
        this.listeners.focus.call(this, event)
      }
    },

    handleBlur(event) {
      this.focused = false
      if (this.listeners && typeof this.listeners.blur === 'function') {
        this.listeners.blur.call(this, event)
      }
    },
  },

  render() {
    const { id, label, type, name, placeholder, inputAttrs, listeners } = this

    return (
      <StyledInputGroup
        data-id={id}
        class={'input__group' + (this.focused ? ' focused' : '')}
      >
        {this.label && <label for={id}>{label}</label>}

        {!this.textarea && (
          <input
            id={id}
            type={type}
            name={name}
            {...{ on: listeners }}
            onBlur={this.handleBlur}
            placeholder={placeholder}
            {...{ attrs: inputAttrs }}
            onFocus={this.handleFocus}
          />
        )}

        {this.textarea && (
          <textarea
            id={id}
            rows="7"
            name={name}
            {...{ on: listeners }}
            placeholder={placeholder}
            {...{ attrs: inputAttrs }}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
          />
        )}
        {this.$slots.default}
      </StyledInputGroup>
    )
  },

  props: {
    name: String,
    label: String,
    listeners: Object,
    inputAttrs: Object,
    placeholder: String,
    id: { type: String, required: true },
    type: { type: String, default: 'text' },
    textarea: { type: Boolean, default: false },
  },
})

const BORDER_THICKNESS = 1
const StyledInputGroup = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  color: ${props => props.theme.colors.default};

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.focused {
    color: ${props => props.theme.colors['electric-blue']};
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

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 100px ${props => props.theme.colors.lime} inset !important;
    }

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

export default InputGroup
