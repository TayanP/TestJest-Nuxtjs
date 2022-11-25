import { mount, Wrapper } from '@vue/test-utils'
import Input from '@/components/atoms/Input/Input.vue'


describe('Input', () => {
  let wrapper: Wrapper<Input>

  beforeAll(() => {
     wrapper = mount(Input, {
      propsData: {
        placeholder: 'Foo'
      }
  })
})
  test('deve setar o placeholder', () => {
    expect(wrapper.attributes('placeholder')).toBe('Foo')
  })

  test('Deve emitir um evento quando o valor alterar', async () => {
    await wrapper.setValue('Foo')

    expect(wrapper.emitted('input')).toHaveLength(1)
  })
})
