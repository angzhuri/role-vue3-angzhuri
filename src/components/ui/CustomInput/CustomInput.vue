<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      value: '',
      debounce: 0 as number | ReturnType<typeof setTimeout>
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newValue) {
        this.value = newValue
      }
    }
  },
  methods: {
    updateValue(event: Event) {
      const target = event.target as HTMLInputElement
      clearInterval(this.debounce)
      this.debounce = setTimeout(() => {
        this.$emit('update:modelValue', target.value)
      }, 500)
    }
  }
})
</script>

<template>
  <div class="custom-input">
    <div class="custom-input__main">
      <input type="text" v-model="value" @input="updateValue" :placeholder="placeholder" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-input {
  &__main {
    width: 100%;
    height: 50px;
    border: 1px solid rgb(0, 0, 0);

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 16px;
      font-weight: 400;
      padding: 0 10px;
      border-radius: 8px;
    }
  }
}
</style>
