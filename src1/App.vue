<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--也可以使用todo-header这样的小写书写格式-->
      <TodoHeader :addTodo="addTodo"/>
      <!--list里面需要数据todos，传入数据，不能使用v-model，这是给input使用的-->
      <!--注意传入的时候不能直接写todos="todos"，这样传入的只是字符串todos，需要在前面添加:这样传进去的才是数据-->
      <!--这里deleteTodo是给Item用的，但是这里没有Item，所以通过List传过去-->
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer :todos="todos" :deleteCompute="deleteCompute" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>

// 引入使用的组件
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

// 默认向外暴露组件
export default { // 配置对象

  // 定义list里面显示的数据为todos，因为所有的组件里面都需要这个数据，所以数据内容写在App中
  data () {
    return {
      // 这里定义的是todos数据内容
      todos: [
        // 因为所显示的数据里面有两个变化的内容，座椅这里命名两个数据
        {title: 'eat', completed: false},
        {title: 'sleep', completed: true},
        {title: 'play', completed: false}
      ]
    }
  },

  // 组件  这里定义了组件之后，上面的html中也必须引入组件
  components: {
    // 因为h5新语法中 有header的定义，所以这里不能使用header引入
    TodoHeader: Header,
    // h5新语法中没有list定义，所以可以使用
    List,
    TodoFooter: Footer
  },

  // 数据在哪个组件，更新数据的方法就定义在哪个组件
  methods: {
    // addTodo属性是在组件Header里面使用的
    // 这里todo只是一个形参，可以随意定义，但是为了见名思意，我们这里定义的是todo
    // 定义了addTodo方法之后需要在上面Header标签中调用
    addTodo (todo) {
      // 上面template里面使用todos数据时，可以直接使用，不用添加todos，但是script里面使用时，需要添加this
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 这里定义的是删除数据  根据的是todos里面的completed属性来进行删除操作的，没有传入未知数据，所以不用传入参数
    deleteCompute () {
      // 筛选数据，并不会更改原数组，会产生新数组，所以需要用this.todos接收，实现过滤操作
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    // 全选或者全部选
    // 判断是否全选，要看是否所有的数据completed是否全为true或者false，有未知的数据，因为complete数据不确定
    selectAll (isCompleted) {
      this.todos.forEach(data => (data.completed = isCompleted))
    }
  }
}
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
