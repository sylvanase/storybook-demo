import input from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('lg-input', () => {
  test('input-text', () => {
    // 在内存中挂在组件
    const wrapper = mount(input)
    // 判断页面中是否包含 input type="text"
    expect(wrapper.html()).toContain('input type="text"')
  })
  
  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')
  })

  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    // 生成的组件对应的值是否是admin
    expect(wrapper.props('value')).toBe('admin')
  })

  test('input-snapshot', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
