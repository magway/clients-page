<template>
  <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
  <input :value="modelValue" @input="updateInput" class="py-2 px-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="text">
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: [String, Number],
    label : String
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
