---
title: 'Reverse a string. Easiest way'
date: '2022-01-15'
---

### Reverse a string. Easiest way

How do you reverse a string real quick and easy.

```js
var str = 'good weather'
var reverse = str.split('').reverse().join('') //"rehtaew doog"
```

What just happened?
We first used split() to break our string into a array. Array's have a reverse() built in method to reverse an array. Once it is reversed, we used join() to get our reversed string. We chained the functions in a single line to get the result.
