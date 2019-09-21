<template>
  <svg
    width="72"
    height="22"
    viewBox="0 0 72 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke="#4831d4"
      stroke-width="2"
      stroke-miterlimit="0"
      :d="
        direction === 'right'
          ? 'M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8'
          : 'M72.807 11.199H2.093M11.933 1.399l-9.8 9.8 9.8 9.8'
      "
    />
  </svg>
</template>

<script>
export default {
  name: 'BowArrow',
  props: {
    direction: {
      default: 'right',
      validator: v => ['left', 'right'].indexOf(v) !== -1,
    },
  },
}
</script>
