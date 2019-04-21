import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Time from '@/components/Time.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Time.vue', () => {
  let state
  let mutations
  let store

  beforeEach(() => {
    mutations = {
      restore: jest.fn()
    }
    state = {
      history: []
    }
    store = new Vuex.Store({
    mutations,
    state
    })

  })
  
  it('Should commit restore mutation when arrow is clicked', () => {
    const wrapper = mount(Time, {
      store,
      localVue,
      propsData: {
        history_item: {
          title:'new post',
          old_index: 0,
          new_index: 1
        },
        index: 0
      },
    })
    wrapper.find('button.time_btn').trigger('click')
    expect(mutations.restore).toHaveBeenCalled()
  })
})

