//if you use output name you need to include the systemjs loader with extra register named module
import fs from 'fs'
export default {
    input: './src/main.js',
    output: {
        dir: 'dist',
        banner: fs.readFileSync('../node_modules/systemjs/dist/s.min.js'),
        footer: `System.getRegister()[1]({},System).execute()`,
        format: 'systemjs',
    }
}
