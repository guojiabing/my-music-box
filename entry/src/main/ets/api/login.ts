import instance from './axios'

export const login = () => {
  return instance.get('/login/cellphone?phone=17733996325&password=xin7898076')
}