import { mount, Wrapper } from '@vue/test-utils'
import List from '@/components/molecules/List/List.vue'


describe('List', () => {
  let wrapper: Wrapper<List>

  beforeAll(() => {
     wrapper = mount(List, {
    propsData: {
      items: ['a', 'b', 'c']
    }
  })
})

  test('deve renderizar a lista', () => {
    /* quero encontrar todas as tags 'li', tamanho da lita seja 3  */
    expect(wrapper.findAll('li').length).toBe(3)
  })
})
