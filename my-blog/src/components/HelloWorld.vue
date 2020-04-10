<template>
  <div class="hello">
    <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
          <router-link class="blog-nav-item" to="/">主页</router-link>
          <router-link class="blog-nav-item" to="/add">写博客</router-link>
        </nav>
        

      
     </div>
     
    </div>
    <br>
    <div class="container">
      <div class="container">
        <div class="form-group">
    <label for="text">搜索</label>
    <input type="text" class="form-control" id="text" placeholder="search" v-model="search" v-theme:col1="'wide1'"><!--v-theme:col1="'wide1'"是自定义指令-->
  </div>
  <label for="text">全部博客</label>
      <div class="panel panel-default" v-for="(blog,key) in searchby(blogs,search)" v-bind:key="key">
        <div class="panel-heading">
         <router-link :to="'/blogDetails/'+blog.id"> <h2 class="panel-title" v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
        </div>
        <h5 class="panel-body">{{blog.textarea | snippet}}</h5>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      blogs:[],
      search:""
    }
  },
  methods:{
    searchby(blogs,search){
      return this.blogs.filter(function(user){
        return user.title.match(search)
      })
    }
  },
  filters:{
    "to-uppercase":function(value){
      return value.toUpperCase()
    }
  },
  directives:{
    "rainbow":{
      bind(el,binging,vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8);
      }
    }
  },
  created(){
    this.$http.get("http://localhost:3000/posts")
        .then(function(data){
          this.blogs=data.body.slice(0,10);
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
