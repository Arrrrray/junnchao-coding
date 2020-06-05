class Queue {
  constructor() {
    // 定义一个数组存储数据,数组头为队首,尾为队尾
    this.queue = [];
  }

  // 入队:添加一个或多个元素到队列中
  inQueue(...args) {
    this.queue.push(...args);
  }

  // 出队:移除队首的元素,同时返回被移除的元素
  outQueue() {
    return this.queue.shift();
  }

  // 返回队首元素
  queueTop() {
    return this.queue[0];
  }

  // 判空
  isEmpty() {
    return this.queue.length === 0;
  }

  // 清空
  clearQueue() {
    this.queue = [];
  }

  // 返回大小
  queueSize() {
    return this.queue.length;
  }

  // 打印所有元素
  printQueue() {
    console.log(this.queue.toString());
  }
}

// 斐波那契数列
function fibonacci(n) {
  let queue = new Queue();
  let index = 0;
  // 先放⼊入斐波那契序列列的前两个数值 
  queue.inQueue(1);
  queue.inQueue(1);
  while (index < n - 2) {
    // 出队列列⼀一个元素
    let del_item = queue.outQueue();
    // 取队列列头部元素
    let head_item = queue.queueTop();
    let next_item = del_item + head_item;
    // 将计算结果放⼊入队列列 
    queue.inQueue(next_item);
    index += 1;
  }
  queue.outQueue();
  return queue.queueTop();
};
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(99))


// 回文检查器
function palChecker(str) {
  // 创建一个双端队列,将字符串中的字符,依次添加到双端队列中
  let arr = str.split('');
  // 假定是回文字符串
  let isPalindrome = true;
  // 当至少有一个字符并且满足首位相等,则循环
  while (arr.length > 1 && isPalindrome) {
    let first = arr.shift();
    let last = arr.pop();
    if (first !== last) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

console.log(palChecker('abba'))