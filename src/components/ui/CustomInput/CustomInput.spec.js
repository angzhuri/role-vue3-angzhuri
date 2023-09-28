import { mount } from '@vue/test-utils'
import CustomInput from './CustomInput.vue'

describe('CustomInput', () => {
  it('renders correctly', () => {
    const wrapper = mount(CustomInput, {
      props: {
        modelValue: '',
        placeholder: ''
      }
    })

    expect(wrapper.exists()).toBe(true)

    const inputElement = wrapper.find('input')
    expect(inputElement.element.value).toBe('')
    expect(inputElement.attributes('placeholder')).toBe('')

    inputElement.setValue('Test Input Value')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()

    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['Test Input Value'])

    wrapper.unmount()
  })
})
