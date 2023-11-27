#!/usr/bin/env node
import chalk from 'chalk'
import gradient from 'gradient-string'
import meow from 'meow'
import inquirer from 'inquirer'
import path from 'path'
import process from 'process'
import url from 'url'
import fs from 'fs'
// 配置变量
let cliGradient = gradient('#42d392', '#647eff')
let cliGradient2 = gradient('cyan', '#42d392')
let templates = ["admin", "web", "mobile", "miniapp"]
var templateSyntax = /!\{(\w+)\}!/g;
let helpText = `
  使用方式:
    npx yuadh-fecli  [options]  
  参数说明：
    -a/--app-name 项目应用名称,可选
    -t/--template 项目应用模板[${templates.join('/')}],可选
    -h/--help 脚手架帮助文档,该参数为单独携带使用
    -v/--version 脚手架版本信息,该参数为单独携带使用
  使用示例：
    npx yuadh-fecli  -a my-admin-app -t admin 
  开发者：@yuadh
`

async function run() {
  await new Promise((resolve) => setTimeout(resolve, 400));
  const { pkg, flags, showHelp, showVersion } = meow(helpText, {
    importMeta: import.meta,
    flags: {
      appName: { type: 'string', shortFlag: 'a' },
      template: { type: 'string', shortFlag: 't' },
      help: { type: 'boolean', shortFlag: 'h' },
      version: { type: 'boolean', shortFlag: 'v' },
    }
  })
  console.log(
    chalk.bold(
      cliGradient(`\n>>> 欢迎使用前端脚手架工具${pkg.version}@yuadh\n`)
    )
  )
  if (flags.help)
    showHelp();
  if (flags.version)
    showVersion();
  if (!flags.appName) {
    flags.appName = (await inquirer.prompt([{
      type: 'input',
      name: 'appName',
      message: `输入应用程序名称：`,
      default: `myapp`
    }])).appName
  }
  if (!flags.template) {
    let choices = templates.map(item => {
      return {
        name: item,
        value: item,
      }
    })
    flags.template = (await inquirer.prompt([{
      type: 'list',
      name: 'template',
      message: `请选择创建的模板类型：`,
      choices: choices,
    }])).template
  }

  let { appName, template } = flags
  if (!templates.includes(template)) {
    console.log(
      chalk.red(
        `template: ${template} 为非可选模板[${templates.join(",")}]选项`
      )
    );
    process.exit(1);
  }
  // 注意：此处键入的目录名称，是你使用命令的工作目录
  const projectDir = path.resolve((await inquirer.prompt([{
    type: 'input',
    name: 'dir',
    message: `设置待创建应用的目录名称：`,
    default: `./${flags.appName}`
  }])).dir)
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const templateDir = path.resolve(__dirname, "../templates", template);
  const relativeProjectDir = path.relative(process.cwd(), projectDir);// 根据用户输入目录切换成CLI的工作目录
  const projectDirIsCurrentDir = relativeProjectDir === ""; // 判断用户输入是否存在,默认情况下都会存在projectDir
  const isReady = (await inquirer.prompt([{
    type: 'confirm',
    name: 'isReady',
    message: `检查配置信息无误继续创建？`,
    default: `yes`
  }])).isReady
  if (!isReady) {
    return
  }
  if (!projectDirIsCurrentDir) {
    const dirExists = fs.existsSync(projectDir);
    if (dirExists) {
      console.log(chalk.red(`\nerror:应用目录已存在!`))
      process.exit(1);
    } else {
      fs.mkdirSync(projectDir);
    }
  }
  console.log(chalk.bold(cliGradient2("\n>>> 正在生成配置好的应用....")));
  // const project
  generat_template(templateDir, projectDir, flags)
  const projectName = path.basename(projectDir);
  console.log(chalk.bold(cliGradient(`
  应用${projectName}创建成功，使用以下命令启动~~~~
  cd ${projectName}    ————进入目录
  npm install    ————安装依赖
  npm run dev    ————启动应用
  推荐使用速度更快的 yarn/pnpm 包管理工具`)))
  console.log(chalk.bold(cliGradient2(`\n>>>> Enjoy Coding`)))
}

/**
 * 应用模板生成函数
 * @param {*} source —— 模板文件地址
 * @param {*} target —— 待生成文件地址
 * @param {*} config —— 配置对象信息
 */
function generat_template(source, target, config) {
  const stats = fs.statSync(source);
  // 如果是目录则需要循环创建
  if (stats.isDirectory()) {
    if (path.basename(source) === "node_modules") {
      return;
    }
    //创建目标目录 - 可以递归创建,即没有多层目录情况下可以循环创建
    fs.mkdirSync(target, { recursive: true })
    for (const file of fs.readdirSync(source)) {
      generat_template(path.resolve(source, file), path.resolve(target, file), config)
    }
    return;
  }
  // 如果是 teml_开头的文件则需要替换变量
  const filename = path.basename(source);
  if (filename.startsWith("teml_")) {
    target = path.resolve(path.dirname(target), filename.replace(/^teml_/, ""))
    const templateContent = fs.readFileSync(source, { encoding: "utf-8" })
    const replaceContent = templateContent.replace(templateSyntax, (_, key) => config[key])
    fs.writeFileSync(target, replaceContent, { encoding: "utf-8" })
    return;
  }

  // 非特殊文件直接按照模板创建
  fs.copyFileSync(source, target);
}

run()
