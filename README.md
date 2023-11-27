`yaudh-fecli` 是一个前端应用模板脚手架工具。其配置了前端开发的常用工具库如：ElementUI组件库、Vuex状态管理、VueRouter官方路由、Axios网络请求库、Eslint+Prettier等代码规范和Commit提交工具等等....大大减少了前端应用的配置初始化时间。 可选模板为`admin`、`web`、`mobile`、`miniapp`

- admin ： 中后台项目 —— 较少的交互和样式，注重中后台业务相关功能偏向业务用户
- web： 应用型项目 —— 对UI和交互有较高要求，注重用户的体验和功能偏向普通用户
- mobile： 移动端项目 ——  对集成移动端适配较高要求的，计划flutter、react native创建模板
- miniapp：小程序项目 ——  应用于各类小程序的需求场景，计划uniapp、trao、原生创建模板
  <a name="rsSqX"></a>

## 快速开始

**⭐环境要求**

- Node 版本 > 16

因为是前端项目脚手架工具， 使用 JavaScript 编写的脚本程序。<br />所以启动必需安装 `Node`，而不使用 `shell`脚本编写<br />**quick-start：输入以下命令即可开始配置你的前端应用程序**

```javascript
npx yuadh-fecli create
```

初次使用，会提示需要安装相关依赖。回车即可<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/33553715/1701072102679-33d2d9ab-ab70-45a4-b8ef-f53fc1bc33de.png#averageHue=%23171717&clientId=ueb087cc8-d789-4&from=paste&height=60&id=u2590ffdf&originHeight=60&originWidth=365&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1365&status=done&style=none&taskId=u4ee7d869-f7dd-462b-bbaa-86ba838d887&title=&width=365)<br />按照提示信息创建你的应用配置信息：<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/33553715/1701072172179-f0a454a0-13de-422f-aa21-f35601c66ff3.png#averageHue=%23202020&clientId=ueb087cc8-d789-4&from=paste&height=105&id=u9f199f4a&originHeight=105&originWidth=351&originalType=binary&ratio=1&rotation=0&showTitle=false&size=4819&status=done&style=none&taskId=u6adbe2c0-afd4-441a-b13a-5766756eaea&title=&width=351)<br />正常情况下， 环境和配置无误的情况下就正常生成了你的应用程序<br />只需要和一般的前端项目一样安装依赖，启动项目即可

```javascript
yarn #安装依赖    
yarn dev #启动项目
```


<a name="VNGWt"></a>

## 更多用法

**可以使用带参形式减少配置步骤**<br />**使用方式：**`npx yuadh-fecli  [options] `<br />**参数说明：**

- `-a/--app-name 项目应用名称,可选`
- `-t/--template 项目应用模板[admin/web/mobile/miniapp],可选`
- `-h/--help 脚手架帮助文档,该参数为单独携带使用`
- ` -v/--version 脚手架版本信息,该参数为单独携带使用`

**使用示例：**`npx yuadh-fecli  -a my-admin-app -t admin `


<a name="a2yPk"></a>

## 迭代计划

- [ ] 更加规范模板的代码风格：`Eslint`+`Prettier`+`stylelint`
- [ ] 更加规范模板仓库git的Commit提交：`Husky`+`Lint-Staged` + `Commitlint` + `Commitizen`
- [ ] 添加 `web`、`mobile`、`miniapp`等更多模板
- [ ] 接入 `docker`、`gitlab-CI/CD`多环境、云原生等....
- [ ] 学习接入更多优秀的脚手架工具模块等...
  <a name="zMfhl"></a>

## 开源地址

