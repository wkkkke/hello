import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/movie/movie.vue'
import Music from '@/views/music/music.vue'
import Book from '@/views/book/book.vue'
import Photo from '@/views/photo/photo.vue'
import First from '@/views/movie/movie.vue'
import MusicDetail from '@/views/music/musicdetail.vue'
import PhotoDetail from '@/views/photo/photodetail.vue'

// import MusicDetail from '@/views/music/musicDetail.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/movie',
      name: 'movie',
      component: First
    },
    {
      path: '/music',
      name: 'musicdetail',
      component: MusicDetail
    },
    {
      path: '/photo',
      name: 'photodetail',
      component: PhotoDetail
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
