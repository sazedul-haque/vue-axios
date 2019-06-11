<template>
	<div class="container">
		<h1>Posts</h1>
		<div class="row">
			<div class="col-sm-6 mb-4" v-for="post in posts">
				<div class="card">
				  	<div class="card-body">
					    <h3 class="card-title">{{ post.title }}</h3>
					    <p class="card-text">{{ post.body }}</p>
					    <a href="#" class="btn btn-secondary">View More</a>
				  	</div>
				</div>
			</div>
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