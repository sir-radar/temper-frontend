import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import App from '@/App'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App Component', () => {

  let actions
  let store
   
  beforeEach(() => {
    actions = {
      getPosts: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })
  it('should get all posts', () => {
    const wrapper = mount(App, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(actions.getPosts).toHaveBeenCalled()
  })
});
