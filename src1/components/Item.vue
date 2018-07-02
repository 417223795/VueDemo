<template>
  <!--bgColor定义的是动态的数据，所以需要在下面data里面进行定义-->
  <!--li有一个动态的样式设定，鼠标经过时改变颜色-->
  <!--鼠标移入移出有两种写法：1.mouseenter与mouseleave 2.mouseover与mouseout(这个一般不使用因为有两个div嵌套时，进入里面的div时会触发外面div的mouseout事件)-->
  <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <!--把input标签和todo.completed属性相关联起来，input标签里面添加数据使用的是 v-model-->
      <!--注意使用v-model绑定数据是双向的，即checkbox选不选中会影响todo.completed里面的数值是true还是false-->
      <input type="checkbox" v-model="todo.completed"/>
      <!--这里是引入todo里面的数据-->
      <span>{{todo.title}}</span>
    </label>
    <!-- v-show="isShow"定义按钮是否隐藏-->
    <!--deleteTodo里面不知道删除哪个数据 所以还需要一个index，所以从Item里面传入index数据-->
    <!--注意这里是点击之后执行deleteTodo，所以不能写为:deleteTodo="deleteTodo(index)",这样会直接执行函数，导致一开始里面就没有数据-->
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo(index)" >删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    deleteTodo: Function,
    index: Number
  },
  data () {
    return {
      // 设置按钮初始值
      isShow: false,
      bgColor: 'white'
    }
  },
  methods: {
    // isEnter是可以随意定的，此处是为了见名思意,此时的isEnter是bool值
    handleEnter (isEnter) {
      if (isEnter) {
        this.isShow = true
        this.bgColor = 'pink'
      } else {
        this.isShow = false
        this.bgColor = 'white'
      }
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
