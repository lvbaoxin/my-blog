<template>
  <div class="add">
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
      <form>
        <h3>写博客</h3>
        <br />
        <div class="form-group">
          <label for="text">标题</label>
          <input type="text" class="form-control" v-model="blog.title" placeholder="标题" />
        </div>
        <div class="form-group">
          <label for="textarea">内容</label>
          <textarea name v-model="blog.textarea" rows="10" class="form-control"></textarea>
        </div>
        <div class="form-grop">
          <label for="exampleInputPassword1">分类</label>
          <div class="checkbox">
            <label class="checkbox-inline">
              <input type="checkbox" id value="体育" v-model="blog.categories" /> 体育
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" value="新闻" v-model="blog.categories" /> 新闻
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox3" value="电影" v-model="blog.categories" /> 电影
            </label>
          </div>
        </div>

        <div class="form-grop">
          <label for="exampleInputPassword1">作者</label>
          <select class="form-control" v-model="blog.author">
            <option v-for="author in authors" v-bind:key="author">{{author}}</option>
          </select>
        </div>
        <br />
        <button class="btn btn-default" v-on:click.prevent="add">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      blog: {
        title: "",
        textarea: "",
        categories: [],
        author: ""
      },
      authors: ["列夫", "雨果"],
      alert: false
    };
  },
  methods: {
    add: function() {
      this.$http
        .post("http://localhost:3000/posts", this.blog)
        .then(function(data) {
          //console.log(data);
          alert("您的博客发布成功！");
          this.$router.push({ path: "/" });
        });
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
