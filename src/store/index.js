import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    count: 1
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done)
    },
    doneTodosCount: (state, getters) => getters.doneTodos.length,
    doneTodosBoolean: (state, getters) => getters.doneTodosCount === 1,
    getTodoById: (state) => id => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    increment1 (state, n) {
      state.count += n
    },
    increment2 (state, payload) {
      state.count += payload.a
    }
  },
  actions: {
  },
  modules: {
  }
})
