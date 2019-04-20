import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Time from '@/components/Time.vue'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Time Component', () => {

  let mutations
  let store

  beforeEach(() => {
    mutations = {
      restore: jest.fn()
    }
    store = new Vuex.Store({
      mutations
    })
  })

  it('should be in order of action commited not reversed', () => {
    const wrapper = mount(Time, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    wrapper.find('time_btn').trigger('click')
    expect(mutations.restore).toHaveBeenCalled()
  })
})