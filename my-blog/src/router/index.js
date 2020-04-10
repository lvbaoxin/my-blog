import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import Add from '@/components/Add'
import BlogDetails from '@/components/BlogDetails';
import Editblog from'@/components/Editblog'
Vue.use(Router)
Vue.use(VueResource)
//全局自定义指令
// Vue.directive("rainbow",{
//   bind(el,binging,vnode){
//     el.style.color= "#" + Math.random().toString(16).slice(2,8);
//   }
// })
Vue.directive("theme",{
  bind(el,binging,vnode){
    if(binging.value == "wide"){
      el.style.width = "500px"
    }
    if(binging.arg =="col"){
      el.style.background ="#eee"
    }
  }
})
//全局过滤器
// Vue.filter("to-uppercase",function(value){
//    return value.toUpperCase()
// })
Vue.filter("snippet",function(value){
   return value.slice(0,200) + "..."
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/add',
      name: 'Add',
      component: Add
    },{
      path: '/blogDetails/:id',
      name: 'BlogDetails',
      component: BlogDetails
    },{
      path: '/Editblog/:id',
      name: 'Editblog',
      component: Editblog
    }
    
  ]
})
