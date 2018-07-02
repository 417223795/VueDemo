<template>
  <div class="todo-footer">
    <label>
      <!--这里定义的是全选时 是否全部选中-->
      <input type="checkbox" v-model="isChecked"/>
    </label>
    <span>
      <!--因为我们可以根据todos数据计算出已完成的个数，所以这里定义  计算属性computed，名称为completedCount-->
       <span>已完成{{completedCount}}</span> / 全部{{todos.length}}
    </span>
    <!--这里判断的是completedCount > 0，大于0的时候显示-->
    <button class="btn btn-danger" v-show="completedCount" @click="deleteCompute">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    // 我们根据数据todos数据可以确定删除哪个，可以计算总数，是否选中等
    todos: Array,
    // 这里是右边删除按钮的函数
    deleteCompute: Function,
    // 这里是选择框的函数
    selectAll: Function
  },
  computed: {
    completedCount () {
      // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
      // reduce() 对于空数组是不会执行回调函数的。
      // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
      // function(total,currentValue, index,arr)
      // total  必需。初始值, 上一次计算结束后的返回值。
      // currentValue 必选，当前元素
      // currentIndex 可选，当前元素的索引
      // arr 可选,当前元素所属的数组对象。
      // initialValue 可选。传递给函数的初始值

      // 此处preTotal上一次计算结束后的返回值todo当前元素
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.completed ? 1 : 0), 0)
    },
    isChecked: {
      get () {
        // this.todos.length === this.completedCount当数据全部选中时 我下面的选中框才选中
        // (this.completedCount > 0) 是为了使没有数据后下面的框不被选中
        return this.todos.length === this.completedCount && (this.completedCount > 0)
      },
      set (isCheckedAll) {
        // 进行全选或者全不选
        this.selectAll(isCheckedAll)
      }
    }
    // 为什么不可以这么写？
    /* isChecked (isCheckedAll) {
      return this.selectAll(isCheckedAll)
    } */
  }
}
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
