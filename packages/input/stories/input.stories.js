import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

// 此处的大括号含义是对象，不是代码块，所以需要外层包一个小括号
export const Text = ()=> ({
  components: {LgInput},
  template: '<lg-input v-model="value"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LgInput },
  template: '<lg-input type="password" v-model="value"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})