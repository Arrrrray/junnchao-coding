class Stack {
  constructor() {
    // 定义一个数组存储数据,数组头为栈底,尾为栈顶
    this.stack = [];
  }

  // 入栈:添加一个或多个元素到栈顶
  inStack(...args) {
    this.stack.push(...args);
  }

  // 出栈:移除栈顶的元素,同时返回被移除的元素
  outStack() {
    return this.stack.pop();
  }

  // 返回栈顶元素
  stackTop() {
    return this.stack[this.stack.length - 1];
  }

  // 判空
  isEmpty() {
    return this.stack.length === 0;
  }

  // 清空
  clearStack() {
    this.stack = [];
  }

  // 返回大小
  stackSize() {
    return this.stack.length;
  }

  // 打印所有元素
  printStack() {
    console.log(this.stack.toString());
  }
}

// // 测试
// let new_stack = new Stack();
// // 入栈
// new_stack.inStack(1, 2, 3, 4)
// console.log('打印入栈之后栈中所有元素')
// new_stack.printStack();
// console.log('返回栈顶元素', new_stack.stackTop());
// console.log('返回栈的大小', new_stack.stackSize());
// console.log('判断栈是否为空', new_stack.isEmpty());
// console.log('出栈', new_stack.outStack());
// console.log('打印出栈之后栈中所有元素')
// new_stack.printStack();

// 栈的应用练习
// 判断括号的合法性
// 整体思路:
// 如果只有一个括号,直接不合法
// 如果第一个是")",直接不合法
// 创建一个栈,遍历字符串,如果是"(",将其入栈,当碰到")"的时候,将一个"("出栈,当没有"("可以出栈和")"匹配,直接不合法,最后栈不为空(还有"("没有被匹配),直接不合法
function isLegalBracket(str) {
  // 输入的字符串为空,返回提示信息
  if (str.length === 0) {
    return '请输入要检验的字符串';
  }
  // 只有一个括号,返回false
  if (str.length === 1) {
    return false;
  }
  // 第一个是")",返回false
  if (str[0] === ")") {
    return false;
  }
  let stack = new Stack;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.inStack(str[i]);
    }
    if (str[i] === ")") {
      if (stack.isEmpty()) {
        return false;
      } else {
        stack.outStack();
      }
    }
  }
  return stack.isEmpty();
}

console.log("'(()()((((()))))(()))'中括号的合法性为:",isLegalBracket('(()()((((()))))(()))'))
console.log("'())())(()()(()))()'中括号的合法性为:",isLegalBracket('())())(()()(()))()'))