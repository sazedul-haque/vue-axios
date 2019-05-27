<template>
	<div>
		<h1>Posts</h1>
		<!-- {{ posts }} -->
		<div v-for="post in posts">
			<h2>{{ post.title }}</h2>
			<p>{{ post.body }}</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'posts',
		data() {
			return {
				posts: {},
			}
		},
		mounted () {
		    this.axios
		      	.get('https://jsonplaceholder.typicode.com/posts')
		      	.then(response => (this.posts = response.data))
		}
	}
</script>