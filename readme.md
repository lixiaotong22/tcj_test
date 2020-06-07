### 这是一个集成webpack打包html,css,js的demo

可以此为脚手架，搭建项目。

说明：

```
1. 打包后的项目文件输出到根目录下的 /dist
2. css文件在js中通过require引入
3. html引入打包好的bundle.js在webpack.config.js中配置
```

运行：
```
npm i //安装依赖
npm run build //使用webpack编译打包
npm run dev //运行web项目，默认localhost:8080
```

