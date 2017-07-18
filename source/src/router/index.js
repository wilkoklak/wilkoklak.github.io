import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Blog from '@/components/Blog'
import About from '@/components/About'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
			path: '/post/:id',
			name: 'post',
			component: Post
		},
		{
			path: '/blog',
			name: 'blog',
			component: Blog
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '*',
			name: '404',
			component: NotFound
		}
  ]
})
