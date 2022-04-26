// 2.0
// import Vue from 'vue'
// const eventBus = new Vue()
// export default eventBus
// 3.0
import Mitt from 'mitt'
const eventBus = new Mitt()
export default eventBus
