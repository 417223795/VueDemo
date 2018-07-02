<template>
  <div class="todo-header">
    <!--v-model绑定的是input标签里面的内容和inputTodo函数，是双向的，所以也可以用来收集数据-->
    <!--按下回车之后调用方法addTodo所以需要添加监听@keyup.enter="add"-->
    <input type="text"
           placeholder="请输入你的任务名称，按回车键确认"
           v-model="inputTodo"
           @keyup.enter="add"
    />
  </div>
</template>

<script>
export default {
  // 1.这是声明函数最简单的写法 ，只是声明接收属性
  // props: [addTodo]
  // 2.声明属性名 和 属性值
  /* props: {
    addTodo: Function
  } */
  // 3.最完整的写法，具体参照vue文档,required: true 代表是否必要
  props: {
    // addTodo的类型是函数，注意这里需要写Function，大写的Function代表的是类型，function代表的是关键字，不是类型
    addTodo: Function,
    required: true
  },
  // 注意这里的数据data是定义在export default里面的，所以不能使用data：{}的形式来进行定义，new Vue里面才可以这样定义
  data () {
    return {
      // 这里先定义为''的字符串，用来收集数据
      inputTodo: ''
    }
  },
  methods: {
    add () {
      // 先获取在input里面输入的数据
      const inputTodo = this.inputTodo.trim()
      // 数据合法性检查 如果是空串会直接返回
      if (!inputTodo) {
        return
      }
      // 封装todo对象，这里不是随意添加定义的属性，是根据App里面的todos数据设置的
      const todo = {
        title: inputTodo,
        completed: false
      }
      // 添加到todos中
      this.addTodo(todo)
      // 清除输入对象
      this.inputTodo = ''
    }
  }
}
</script>
<!--scoped代表的是本组件内部使用的样式,防止组件内部的样式影响到组件外面-->
<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
