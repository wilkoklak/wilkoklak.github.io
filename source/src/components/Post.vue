<template lang="html">
  <div class='wrapper center xs-padding'>
		<div v-if='error' class='error'>
			<span class='fa fa-exclamation-circle'></span> An error has occured!
		</div>
		<div v-else-if='loading' class='loading'>
			<span class='fa fa-spinner fa-spin'></span>
		</div>
		<article v-else>
			<h1>{{ post.title }}</h1>
			<small>{{ post.dt | timeStr }}</small>
			<main>
				<vue-markdown :breaks='false'>{{ post.markdown }}</vue-markdown>
			</main>
		</article>
	</div>
</template>

<script>
export default {
	data() {
		return {
			post: null,
			loading: true,
			error: false
		}
	},
	mounted() {
		this.$http.get('/static/posts/index.json')
		.then(res => {
			let posts = res.body
			this.post = posts[this.$route.params.id]
			this.$http.get(`/static/posts/${this.post.file}`)
			.then(res => {
				this.post.markdown = res.body
				this.loading = false
			}, error => {
				this.error = true
			})
		}, error => {
			this.error = true
		})
	}
}
</script>

<style lang="sass">
</style>
