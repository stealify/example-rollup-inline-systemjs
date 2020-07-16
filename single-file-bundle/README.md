# Working example when bundle gets not reused else where

In Case that you produce output with the file: option you can have 2 Methods

## Single File Bundle Output

Is based on a single input file. Can be Imported by SystemJS Packages ideal for a lib.

```js
// In this example it would be
const fullUrlWhereTheFileGetsServed = 'https://localhost:8080/single-file-bundle/dist/main.js'

//if you use output name you need to include the systemjs loader with extra register named module
import fs from 'fs'
export default {
    input: './src/main.js',
    output: {
        file: 'dist/main.js',
        banner: fs.readFileSync('../node_modules/systemjs/dist/s.min.js'),
        footer: `System.import(${fullUrlWhereTheFileGetsServed})`, 
        format: 'systemjs',
    }
}
```


## Inlined Single File Bundle

That means: Your Entrypoint does not export anything is only sideEffect based.

```js
{ 
    output: { 
        footer: `System.getRegister()[1]({},System).execute()`,   
    } 
}
```