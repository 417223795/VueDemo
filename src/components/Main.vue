<template>
  <!--注意这里必须包裹一个div，因为template标签里面只能有一个根元素-->
  <div>
    <h2 v-if="firstView">请输入关键字进行搜索</h2>
    <h2 v-if="loading">正在请求中...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{users.name}}</p>
      </div>
    </div>
  </div>

</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
export default {
  data () {
    return {
      // 一开始设置为空，当发送axios之后获取数据，根据获取的数据里面的内容进行填写数据
      users: [],
      firstView: true,
      loading: false,
      errorMsg: ''
    }
  },
  mounted () {
    // 订阅消息
    PubSub.subscribe('search', (msg, searchName) => {
      // 更新状态数据(请求中)
      // 更新数据请求时 一般把数据不不显示的都设置为隐藏，否则会发生在同一页面显示多个标签的情况
      this.firstView = false
      this.loading = true
      this.users = []
      this.errorMsg = ''
      // query请求，根据查找的name进行查找
      axios.get(`http://api.github.com/search/users?q=${searchName}`)
        .then(response => {
          const result = response.data
          // 注意这里不能使用filter，因为这里需要的不仅仅是筛选，名称改变了，所以需要进行的是遍历
          const users = result.items.map(item => ({
            url: item.html_url,
            avatar_url: item.avatar_url,
            name: item.name
          }))
          this.loading = false
          this.users = users
        })
        .catch(error => {
          this.loading = false
          this.errorMsg = '请求失败！'
          // 因为不适用error会报错，所以这里打印一下
          console.log(error)
        })
    })
  }
}
</script>

<style>

</style>
