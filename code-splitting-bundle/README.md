# code-splitting-bundle

This does Not Work at present because we have no good way to append the System.import(URL) Call

## Rules
- Every Entrypoint needs the 2,4kb loader added but executed and assigned to the environment based global once per environment it is loaded in
- import() Related (Only Method that you can use when you got exports in your entrypoints that get reused does not allow to be inlined into html)
  - Every Entrypoint needs to be aware of the final URL it gets Served From 
- getRegister() Related (use the working single-file-bundle example but change output to dir and use the footer with getRegister)
  - is the only one you can use when you inline the entrypoint for example into html
  - Entrypoints are not allowed to have exports