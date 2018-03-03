<template>
	<div class="login-form">
		<div class="g-form">
			<div class="g-form-line">
				<span class="g-form-label">用户名：</span>
				<div class="g-form-input">
					<input v-model="username" class="g-form-input" placeholder="请输入用户名"></input>
				</div>
				<span class="g-form-error">{{ userErrors.errorText }}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">密码：</span>
				<div class="g-form-input">
					<input v-model="password" type="password" placeholder="请输入密码">
				</div>	
				<span class="g-form-error">{{ passwordErrors.errorText }}</span>		
			</div>
			<div class="g-form-line">
				<div class="g-form-btn">
					<a class="button" @click="onLogin">登录</a>
				</div>
			</div>
			<p>{{ errorText }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				username: '',
				password: '',
				errorText: '',
				loginList: []
			}
		},
		computed: {
			userErrors () {
				let status, errorText
				if (!/@/g.test(this.username)) {
					status = false,
					errorText = '不包含@'
				} else {
					status = true,
					errorText = ''
				}
				if (!this.userFlag) {    // 定义一个flag，开始不存在，
					errorText = '',      // 防止第一次加载的时候，显示errorText
					this.userFlag = true  // 执行一次，便不再执行
				}
				return {status, errorText}
			},
			passwordErrors () {
				let status, errorText  
				if (!/^\w{1,6}$/g.test(this.password)) {   // 长度1-6位.test()正则匹配
					status = false,
					errorText = '密码不是1-6位'
				} else {
					status = true,
					errorText = ''
				}
				if (!this.passwordFlag) { 
					errorText = ''
					this.passwordFlag = true
				}
				return {status, errorText}
			}
		},
		methods: {
			onLogin () {
				if (!this.userErrors.status || !this.passwordErrors.status) {
					this.errorText = '填写有误'
				} else {
					this.errorText = '',
					this.$http.get('/api/loginList')
					.then((res) => {
						this.$emit("has-log", res.data.loginList)
					}, (err) => {
						console.log(err)
					})
				}
			}
		}
	}
</script>

<style scoped>
	
</style>