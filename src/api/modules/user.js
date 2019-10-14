export default ({ request }) => ({
  /**
   * @description 登录
   * @param {Object} data {String} username 用户名
   * @param {Object} data {String} password 密码
   */
  USER_LOGIN ({
    username = '',
    password = ''
  }) {
    return request({
      url: '/api/user/login',
      method: 'post',
      data: {
        user_name: username,
        password: password
      }
    })
  },
  /**
   * @description 登录 token 校验
   */
  USER_CHECK_TOKEN () {
    return request({
      url: '/api/user/check_token',
      method: 'post'
    })
  }
})
