<template>
  <li className="list-group-item">
    <div className="handle">
      <a href="javascript:;" @click="delete">删除</a>
    </div>
    <p className="user"><span >{comment.username}</span><span>说:</span></p>
    <p className="centence">{comment.content}</p>
  </li>
</template>

<script>

</script>
