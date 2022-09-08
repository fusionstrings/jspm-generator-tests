# [Error with Chomp and `@jspm/generator`](https://discord.com/channels/570400367884501026/724211491087056916/999731286266609664)

If `@jspm/generator` is imported, Chomp build throws. The error seems to be originating from here https://github.com/jspm/generator/blob/8f89dc8cb59cf44c146157097c8a00fd8714a39e/src/trace/resolver.ts#L671


## Error case

```sh
 chomp build:error:html
  public/error.html invalidated
🞂 public/error.html
file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator-64b14857.js:1273
        throw new JspmError(`Unable to resolve package ${latestTarget.registry}:${latestTarget.name} to "${latestTarget.range}"${importedFrom(parentUrl)}`);
              ^

JspmError: Unable to resolve package npm:@babel/helpers to "^7.19.0" imported from https://ga.jspm.io/npm:@babel/core@7.19.0/lib/index.js
    at Resolver.resolveLatestTarget (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator-64b14857.js:1273:15)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Installer.installTarget (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator-64b14857.js:2179:24)
    at async TraceMap.resolve (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator-64b14857.js:2606:27)
    at async TraceMap.visit (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator-64b14857.js:2383:26)
    at async file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator-64b14857.js:2418:13
    at async Promise.all (index 13)
    at async TraceMap.visit (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator-64b14857.js:2413:9)
    at async file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator-64b14857.js:2418:13
    at async Promise.all (index 6) {
  jspmError: true,
  code: undefined
}
x public/error.html [1.519082681s]
Unable to complete all tasks.
```

## Success case
It is same dependency as in error case. 

```sh
node src/error.js
```

Here `@jspm/generator` is not one of the dependencies

```sh
chomp build:success:html
```

What's interesting though is that  Github action seems to pass

https://github.com/fusionstrings/jspm-generator-tests/actions

