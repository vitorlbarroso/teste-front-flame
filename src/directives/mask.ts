import Cleave from 'cleave.js';

export default {
  mounted(el, binding) {
    el.cleave = new Cleave(el, binding.value);
  },
  beforeUnmount(el) {
    if (el.cleave) {
      el.cleave.destroy();
    }
  }
};