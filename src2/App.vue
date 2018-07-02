<template>
  <div>
    <header className="site-header jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
      <Add addComment="addComment"/>
      <List comments="comments" deleteComment="this.deleteComment"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
