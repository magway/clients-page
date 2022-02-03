<template>
  <button type="button"
          class="w-full inline-flex justify-center rounded-md border text-base font-medium shadow-sm px-4 py-2 sm:ml-3 sm:w-auto sm:text-sm"
          :class="styleClasses"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    look: {
      type: String,
      default: 'secondary',
    }
  },
  computed: {
    styleClasses() {
      return {
        "border-transparent  bg-indigo-600  text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500": this.look === "primary",
        "border-gray-300  bg-white  text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500": this.look === "secondary"
      }
    }
  }
}
</script>
