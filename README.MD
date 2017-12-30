## Commands

* ```gulp``` - runs tslint, then compiles TS to JS. Warnings or errors occurring during the linter stage will not block the local build, but any errors occuring during the compilation step will block the build and any further tasks.
* ```gulp start``` - runs all of the above steps and starts the electron app.
* ```gulp tslint``` - runs just tslint; mostly there for debugging the linter.

## Latest change

* Realized I don't need Webpack for this.
* Fixed the path issue, starter code now works properly.