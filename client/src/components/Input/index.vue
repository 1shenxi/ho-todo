<template>
  <div class="h-input">
    <input
      :class="classes"
      :value="modelValue"
      type="text"
      @input="handleInput"
      v-bind="$attrs"
    />
  </div>
</template>

<script lang="ts" setup="props">
import {defineProps, computed, defineEmit} from 'vue'

const emit = defineEmit(['input'])

const {border, modelValue} = defineProps({
  border: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  }
})

const classes = computed(() => [
  'h-input__input',
  {
    'h-input--border': border,
  }
])

const handleInput = (e) => {
  emit('input', e.target.value)
}
</script>

<style lang="scss" scoped>
.h-input {
  margin: 0 auto;

  &__input {
    width: 100%;
    padding: 12px 24px;
    font-size: 20px;
    border: none;
    box-sizing: border-box;

    font-size: 24px;
    line-height: 1.4;

    &:focus, &:active {
      outline: none;
    }
  }
}
</style>