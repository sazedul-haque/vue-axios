<template>
	<div class="container">
		<h1>Albums</h1>
		<div class="row">
			<div class="col-sm-4 mb-4" v-for="album in albums.slice(0, 20)">
				<div class="card">
					<img :src="album.url" class="card-img-top" :alt="album.title">
				  	<div class="card-body">
				    	<p class="card-title">{{ album.title }}</p>
				  	</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'albums',
		data() {
			return {
				albums: [],
			}
		},
		mounted () {
		    this.axios
		      	.get('https://jsonplaceholder.typicode.com/photos')
		      	.then(response => (this.albums = response.data))
		}
	}
</script>