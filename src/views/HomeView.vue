<template>
  <div class="home">
    <button @click="handler()">传值</button>
    <button @click="handlerStore()">store</button>
  </div>
</template>

<script>
// @ is an alias to /src
import eventBus from '../../utils/eventBus.js'

export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      val: '123123'
    }
  },
  mounted () {
  },
  methods: {
    handler () {
      console.log(this.val)
      eventBus.emit('HHH', this.val)
    },
    handlerStore () {
      const storeVal = this.$store.getters.doneTodos
      console.log(storeVal)
      console.log(this.$store.getters.doneTodosCount)
      console.log(this.$store.getters.doneTodosBoolean)
      console.log(this.$store.getters.getTodoById(1))
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      this.$store.commit('increment1', 10)
      console.log(this.$store.state.count)
      this.$store.commit({
        type: 'increment2',
        b: 10
      })
    }
  }
}
</script>
