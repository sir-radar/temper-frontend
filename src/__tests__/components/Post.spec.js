import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Post from '@/components/Post.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Post.vue', () => {
  let state
  let mutations
  let store

  beforeEach(() => {
    mutations = {
      move: jest.fn()
    }
    state = {
      posts: []
    }
    store = new Vuex.Store({
    mutations,
    state
    })

  })

  it('Should commit move mutation when arrow is clicked', () => {
    const wrapper = mount(Post, {
      propsData: {
        post: {title:'new post'},
        index: 0
      },
      store,
      localVue
    });
    wrapper.find('i').trigger('click')
    expect(mutations.move).toHaveBeenCalled()
  })
})

