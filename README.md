# (WiP) example-rollup-inline-systemjs
Working Example and How To Inline SystemJS Loaders Tutorial



## Examples

- (Working!) single-file-bundle
- (Not Working!) code-splitting-bundle 




#### Example Single file bundle Working!
Single file bundle that uses SystemJS dynamic import with external dependencies for example or if it gets inlined into a script tag inside HTML

```js
//if you use output name you need to include the systemjs loader with extra register named module
import fs from 'fs'
export default {
    input: './src/main.js',
    output: {
        dir: './dist',
        banner: fs.readFileSync('./node_modules/systemjs/dist/s.min.js'),
        footer: `System.getRegister()[1]({},System).execute()`,
        format: 'systemjs',
    }
}
```



#### Example code-splitting-bundle 
multiple Entrypoints Not Working at present!
```js
//Transform SystemJS.min file to assign SystemJS only if it is not already loaded needed to be loaded more then once in multiple entrypoints
const transformMinifiedSystemJSVersion = (minSystemJS)=>{
    let [start,end] = minSystemJS.split('.System=new ');
    const globalVarName = start.charAt(start.length - 1); // 'm'
    return `${start}.System=${globalVarName}.System || new ${end}`
}

// using http-server inside the https://github.com/stealify/example-rollup-inline-systemjs clone project call test.html
const baseUrl = 'http://localhost:8080'

//if you use output name you need to include the systemjs loader with extra register named module
import fs from 'fs'
export default {
    input: './src/main.js',
    output: {
        dir: './dist',
        banner: transformMinifiedSystemJSVersion(fs.readFileSync('./node_modules/systemjs/dist/s.min.js')),
        footer: (fileName)=>`System.import(baseUrl+'/'+fileName)`,
        format: 'systemjs',
    }
}
```

We Need footer and banner to recive fileName
As you can see in this example we will need the resulting fileName to produce the import url

See: https://github.com/rollup/rollup/issues/3678

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



