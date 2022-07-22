# [Error with Chomp and `@jspm/generator`](https://discord.com/channels/570400367884501026/724211491087056916/999731286266609664)

If `@jspm/generator` is imported, Chomp build throws. The error seems to be originating from here https://github.com/jspm/generator/blob/8f89dc8cb59cf44c146157097c8a00fd8714a39e/src/trace/resolver.ts#L671


## Error case

```sh
 chomp build:error:html
🞂 public/error.html
file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator.js:1840
    throw new JspmError(`Unable to resolve ${main ? main + ' in ' : ''}${pkgUrl} resolving ${originalSpecifier}${importedFrom(parentUrl)}.`, 'MODULE_NOT_FOUND');
          ^

JspmError: Unable to resolve https://ga.jspm.io/npm:semver@6.3.0/ resolving semver imported from https://ga.jspm.io/npm:semver@6.3.0/.
    at Resolver.legacyMainResolve (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator.js:1840:11)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Resolver.resolveExport (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator.js:1632:45)
    at async TraceMap.resolve (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator.js:2069:59)
    at async TraceMap.visit (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator.js:1851:26)
    at async file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator.js:1879:13
    at async Promise.all (index 20)
    at async TraceMap.visit (file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator.js:1874:9)
    at async file:///Users/user/@jspm/jspm-generator-tests/node_modules/@jspm/generator/dist/generator.js:1879:13
    at async Promise.all (index 3) {
  jspmError: true,
  code: 'MODULE_NOT_FOUND'
}
x public/error.html [3.26758714s]
Unable to complete all tasks.
```

## Success case

Here `@jspm/generator` is not one of the dependencies

```sh
chomp build:success:html
```

What's interesting though is that  Github action seems to pass

https://github.com/fusionstrings/jspm-generator-tests/actions