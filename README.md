# node-backend-framwork
ES6 restful-api express

1. npm init -y

2. `npm install express body-parser morgan cors`, Not need babel, just use require
     - express
     - morgan: 默认日志系统
     - body-parser: 将请求body解析到req.body
     - cookie-parser: 解析cookie
     - compression: 请求压缩中间件
     - method-override: 扩展请求方法
     - helmet: 此中间件通过设置请求头的方式做安全配置
     - cors: 支持跨域模块
     - Winston: 详细的API log中间件，补充morgan
     - express-winston: 
     - joi: 类似proto-type，用来做参数校验
     - dotenv: 

3. add eslint to this project
     - npm install eslint -D
     - npm run lint -- --init
     - choose the answer you want,it's easy.

4. add application portal app.js
     - logger/ morgan & winston
     - errorHandle/ 统一
     - ENV/ dotenv将文件中的环境变量读入process，通过config环境暴露给程序
     - route/ 路由配置



