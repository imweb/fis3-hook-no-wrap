# fis3-hook-commonjs

使用@noWrap注释标识文件不需要被`fis3-hook-commonjs`包裹

## demo

```js
/**
 * @noWrap
 */
// js file
// ...
```

```js
// fis-conf.js
fis.hook('commonjs')
    .hook('no-wrap');
```
