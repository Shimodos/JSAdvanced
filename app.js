'use strict'; // strict mode

class Test {
  static a = 1;
  static hello() {
    console.log('Hello');
  }

  static {
    let b = 5;
    this.a = b;
    console.log('Static block');
  }
}
Test.hello(); // Hello
console.log(Test.a); // 1
