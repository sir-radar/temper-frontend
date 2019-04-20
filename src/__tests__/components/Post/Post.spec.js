import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Post from '@/components/Post.vue'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Post Component', () => {

  let mutations
  let store

  beforeEach(() => {
    mutations = {
      move: jest.fn()
    }
    store = new Vuex.Store({
      mutations
    })
  })
  it('should get all posts up', () => {
    const wrapper = mount(Post, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    wrapper.find('.fas').trigger('click')
    expect(mutations.move).toHaveBeenCalled()
  })

  it('should get all posts down', () => {
    const wrapper = mount(Post, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    wrapper.find('.arrow').trigger('click')
    expect(mutations.move).toHaveBeenCalled()
  })
})

