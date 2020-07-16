# example-rollup-inline-systemjs
Working Example and How To Inline SystemJS Loaders Tutorial



## Errors
There is a Error exports is not defined when using the here used System.getRegister method it works like an iife but the entry chunk is then not importable anymore
we can bypass that vie the register name method or via importing with the correct full url


## No Error Example

``` js
//main value
//Module {value: "value", Symbol(Symbol.toStringTag): "Module"}
//Module {value: "value", Symbol(Symbol.toStringTag): "Module"}
//lib-861343f4.js:14 lib value
//Module {Symbol(Symbol.toStringTag): "Module"}
```


lib-861343f4.js
```
//System.getRegister()[1]({},System).execute()
System.import('http://127.0.0.1:8080/dist/lib-861343f4.js')
```


main.js
```js
//System.getRegister()[1]({},System).execute()
System.import('http://127.0.0.1:8080/dist/main.js').then(console.log).catch(console.log)
```


# Conclusion 
We Should use the System.import method so we need to supply the full resolve url of the file we could use something like 
