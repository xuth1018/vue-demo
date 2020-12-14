<template>
  <div>
    <label>
      <i>请输入员工号:</i>
      <input v-model="empNo">
      <br>
      <button @click="queryEmpNoAES">提交</button>
    </label>
    <p>{{ content }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import service from '../utils/http'
import store from '../store/index'

export default {
  name: 'Demo',
  data () {
    return {
      empNo: '',
      content: ''
    }
  },
  store: store,
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    queryEmpNoAES () {
      console.log('start send request...')
      service.get('/emp/api/crmAESApi/crmEncrypt/123')
        .then(res => {
          console.log('response ', res)
          if (res.data && res.data.msgcode === '00') {
            this.content = res.data.empno
          }
        })
        .catch(error => console.log(error.message))
      store.commit('increment')
      console.log(store.state.count)
    }
  }
}
</script>

<style scoped>

</style>
