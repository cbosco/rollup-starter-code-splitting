# web-components-imports-example

This is an example project using both [native import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [web components](https://www.webcomponents.org/).

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/cbosco/web-components-imports-example
cd web-components-imports-example
npm install
```

Because it outputs native JavaScript modules, there is zero bundler overhead when targeting modern browsers.


## Serving

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:5000](http://localhost:5000).

## License

[MIT](LICENSE).

## Future forks/ideas

- [ ] A watcher should be added to restart the server for ease of development
- [ ] import and web component shims / code splitting async dependency management
- [ ] Typescript compilation fork 
- [ ] Modular/component CSS management

## See also

[rollup-starter-code-splitting](https://github.com/rollup/rollup-starter-code-splitting) - minimal example project with module support

[hybrids](https://github.com/hybridsjs/hybrids) - lightweight web components framework

[systemjs](https://github.com/systemjs/systemjs)

[UNPKG](https://unpkg.com)