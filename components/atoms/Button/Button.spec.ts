import { mount, Wrapper } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'

describe('Button', () => {
  let wrapper: Wrapper<Button>

  beforeAll(() => {
     wrapper = mount(Button, {
      propsData: {
        text: 'Exemplo',
        type: 'submit'
      }
  })
})

  test('Deve ter o nome da classe do componente', () => {
    expect(wrapper.classes()).toContain('button')
  })

  test('Deve renderizar um texto', () => {
    expect(wrapper.find('button').text()).toBe('Exemplo')
  })

  test('deve definir o tipo', () => {
    expect(wrapper.attributes('type')).toBe('submit')
  })
  test('Deve emitir um evento ao clicar', async () => {

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
