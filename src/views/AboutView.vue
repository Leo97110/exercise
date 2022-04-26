<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handler132()">接收</button>
  </div>
</template>
<script>
import eventBus from '../../utils/eventBus.js'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {

    }
  },
  mounted () {
    eventBus.on('HHH', (e) => console.log('handler', e))
  },
  methods: {
    handler132 () {
      console.log('34254325')
      // eventBus.on('HHH', () => console.log('handler'))
      console.log(this.doneTodosCount)
      console.log(this.doneTodos)
      console.log(this.boolean)
      this.increment()
      console.log(this.$store.state.count)
      this.incrementBy(10)
      console.log(this.$store.state.count)
    },
    // mapMutations方法
    ...mapMutations([
      'increment',
      'incrementBy'
    ]),
    ...mapMutations({
      add: 'increment'
    })
  },
  computed: {
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    },
    ...mapGetters([
      'doneTodos'
    ]),
    ...mapGetters({
      boolean: 'doneTodosBoolean'
    })
  }
}
</script>
