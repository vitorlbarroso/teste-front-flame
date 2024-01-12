import Cleave from 'cleave.js'

export default {
  mounted(el: any, binding: any) {
    el.cleave = new Cleave(el, binding.value)
  },
  beforeUnmount(el: any) {
    if (el.cleave) {
      el.cleave.destroy()
    }
  }
}