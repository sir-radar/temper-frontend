import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueStore from '@/store/store'

test('updates "posts" when "setPosts" is commited', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  expect(VueStore.state.posts.length).toBe(0)
  VueStore.commit('setPosts',[
    {id: 1, title:"post 1"},
    {id: 2, title:"post 2"},
    {id: 3, title:"post 3"},
    {id: 4, title:"post 4"},
    {id: 5, title:"post 5"},
    {id: 6, title:"post 6"},
    {id: 7, title:"post 7"}
  ])
  expect(VueStore.state.posts.length).toBe(5)
})

test('test increment in "history" when "move" is commited', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  expect(VueStore.state.history.length).toBe(0)
  VueStore.commit('move', {index: 2, direction: 'up',post: VueStore.state.posts[0]})
  expect(VueStore.state.history.length).toBe(1)
})

test('test "posts" keeps length when "restore" is commited', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  expect(VueStore.state.posts.length).toBe(5)
  VueStore.commit('restore', {old_index: 2, history_index: 0})
  expect(VueStore.state.posts.length).toBe(5)
})

test('test that getPosts action commits setPosts', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  VueStore.dispatch('getPosts')
  expect(VueStore.state.posts.length).toBe(5)
})