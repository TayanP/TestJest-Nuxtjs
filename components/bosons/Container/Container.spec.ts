import { mount, Wrapper } from '@vue/test-utils'
import Container from '@/components/bosons/Container/Container.vue'


describe('Container', () => {
  let wrapper: Wrapper<Container>

  beforeAll(() => {
     wrapper = mount(Container, {
     slots: {
      default: '<i />'
     }
  })
})

  test('deve renderizar o conteúdo do slot', () => {
    expect(wrapper.find('i').exists()).toBe(true)
  })
})
