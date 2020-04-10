<template>
  <div class="BlogDetails">
    <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
          <router-link class="blog-nav-item" to="/">主页</router-link>
          <router-link class="blog-nav-item" to="/add">写博客</router-link>
        </nav>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 blog-main">
            <div class="blog-post">
              <h2 class="blog-post-title">{{blog.title}}</h2>
              
              <p class="blog-post-meta">
                <span><ul class="list-inline">分类：<li v-for="categorie in blog.categories" :key="categorie">{{categorie}}</li></ul></span>
                <span>作者：{{blog.author}}</span>
              </p>
              
              <hr />
              <p>{{blog.textarea}}</p>
              <div class="pull-right">
              <router-link class="btn btn-warning btn-sm" :to="'/Editblog/'+ blog.id">编辑</router-link>
              <button type="button" class="btn btn-danger btn-sm" @click="delblog()">删除</button>
              </div>
            </div>
            <!-- /.blog-post -->
          </div>
          <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
          <div class="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetails",
  data() {
    return {
      id:this.$route.params.id,
      blog:{}
    };
  },
  methods:{
    delblog(){
      this.$http.delete("http://localhost:3000/posts/"+ this.id)
      .then(function(res){
        //console.log(res)
        this.$router.push({path:"/"})
      })
    }
  },
  created(){
    this.$http.get("http://localhost:3000/posts/" + this.id)
        .then(function(data){
          //console.log(data.body)
          this.blog = data.body

        })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
