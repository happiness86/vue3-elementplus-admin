module.exports = {
  printWidth: 160, // 单行输出（不折行）的（最大）长度
  tabWidth: 2, // 每个缩进级别的空格数
  semi:false, // 是否在语句末尾打印分号
  singleQuote: true, // 是否使用单引号
  trailingComma: 'none', // 去除对象最末尾元素跟随的逗号
  htmlWhitespaceSensitivity: 'ignore', // 指定HTML文件的全局空白区域敏感度,"ignore"-空格被认为是不敏感的
  arrowParens: "avoid", // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  proseWrap: 'always', // 当超出printwidth（上面有这个参数）时就折行
  endOfLine: 'lf',// 换行符使用lf
  // vueIndentScriptAndStyle: true
}