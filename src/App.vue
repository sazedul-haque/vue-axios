<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark justify-content-center mb-4">
      <ul class="nav">
        <li class="nav-iten">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-iten">
          <router-link class="nav-link" to="posts">Posts</router-link>
        </li>
        <li class="nav-iten">
          <router-link class="nav-link" to="albums">Albums</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

