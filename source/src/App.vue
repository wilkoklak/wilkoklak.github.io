<template>
  <div id="app">
		<header>
			<div class='center'>
				<div class='brand xs-padding'>
					<img id='avatar' src='static/img/me.jpg'>
					<h1>Wilkoklak</h1>
				</div>
			</div>
			<nav>
				<div class='center'>
					<ul>
						<li><router-link to='/'><span class='fa fa-home'></span> Home</router-link></li>
						<li><router-link to='/blog'><span class='fa fa-file-text'></span> Blog</router-link></li>
						<li><router-link to='/about'><span class='fa fa-info-circle'></span> About</router-link></li>
					</ul>
				</div>
			</nav>
		</header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='sass'>
@import styles/global

#app > header
	padding-top: 1rem
	overflow: auto
	// border-bottom: 1px solid $color-border
	background-image: url('/static/img/background.jpg')
	background-size: cover
	color: $color-white
	box-shadow: 0 0 2px 2px $color-shadow
	h1
		margin: 0
		text-align: right
		line-height: 128px
	.brand
		margin-bottom: 1rem
	nav
		background-color: $color-blue
	ul
		margin: 0
		padding: 0
		list-style-type: none
		overflow: auto
		li
			float: left
		a
			display: block
			line-height: 50px
			color: $color-white
			text-decoration: none
			padding: 0 1rem
			&:hover
				background-color: lighten($color-blue, 5)
#avatar
	border-radius: 100%
	height: 128px
	float: left
	border: 8px solid #fff
</style>
