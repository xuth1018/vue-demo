<template>
  <div>
    <label>
      <i>请输入员工号:</i>
      <input v-model="empNo">
      <br>
      <button @click="queryEmpNoAES">提交</button>
    </label>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import service from '../utils/http'

export default {
  name: 'Demo',
  data () {
    return {
      empNo: '',
      content: ''
    }
  },
  methods: {
    queryEmpNoAES () {
      console.log('start send request...')
      service.get('/emp/api/crmAESApi/crmEncrypt/123')
        .then(res => {
          console.log('response ', res)
          this.content = res || ''
        })
        .catch(error => console.log(error.message))
    }
  }
}
</script>

<style scoped>

</style>
