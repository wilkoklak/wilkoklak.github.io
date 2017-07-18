<template lang="html">
  <div class='wrapper center xs-padding'>
		<div v-if='error' class='error'>
			<span class='fa fa-exclamation-circle'></span> An error has occured!
		</div>
		<div v-else-if='loading' class='loading'>
			<span class='fa fa-spinner fa-spin'></span>
		</div>
		<div v-else>
			<div class='post' v-for='(post, index) in posts'>
				<h3><router-link :to="{ name: 'post', params: {id: index} }">{{ post.title }}</router-link></h3>
				<small>{{ post.dt | timeStr }}</small>
				<vue-markdown>{{ post.short }}</vue-markdown>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: null,
			loading: true,
			error: false
		}
	},
	mounted() {
		this.$http.get('/static/posts/index.json')
		.then(res => {
			this.posts = res.body
			this.loading = false
		}, err => {
			this.error = true
		})
	}
}
</script>

<style lang="sass">
</style>
