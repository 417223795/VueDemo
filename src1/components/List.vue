<template>
  <ul class="todo-main">
    <!--需要根据todos数据生成多个item，所以这里需要进行遍历-->
    <!--声明了todos属性，所以直接遍历的时候直接使用的是todos，不用使用this.todos-->
    <!-- :todo这里设置的todo数据是给Item里使用的，所以在这里先进行声明-->
    <!--deleteTodo是从App里面传递过来的属性-->
    <item v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          :deleteTodo="deleteTodo"
          :index="index"
    />
  </ul>
</template>

<script>
import Item from './Item.vue'

export default {
  // 声明接收属性
  // 在App父组件里面定义了属性之后，在list里面需要先声明接收的数据，之后才可以使用
  // 这样声明之后，传过来的todos就会成为组件对象的属性，所以上面的内容可以直接使用todos
  props: ['todos', 'deleteTodo'],
  // 这里把Item映射成立组件，所以component里面必须写组件标签
  components: {
    Item
  }
}
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>

<!--组件中的this是组件的实例对象，它不是vm，但是功能相当于vm-->
