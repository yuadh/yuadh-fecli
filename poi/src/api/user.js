import request from '@/utils/request';

/**
 * 登录
 * @param {String} username 用户名
 * @param {String} password 密码
 * @returns
 */
export function login(username, password) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      username,
      password,
    }
  })
}
