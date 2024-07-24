<template>
  <button
    :class="['p-3 rounded-md transition-colors duration-300', buttonClass, {
      'bg-blue-500 text-white hover:bg-blue-600': !buttonClass
    }]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TodoButton',
  props: {
    buttonClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>
</style>
