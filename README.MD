## Commands

* ```gulp``` - runs tslint, then compiles TS to JS. Warnings or errors occurring during the linter stage will not block the local build, but any errors occuring during the compilation step will block the build and any further tasks.
* ```gulp start``` - runs all of the above steps and starts the electron app.
* ```gulp tslint``` - runs just tslint; mostly there for debugging the linter.

## TODO
* Add Webpack support
    + Needed for the future and to fix the current issue where compiled files referencing static assets can't resolve paths properly (prevents electron from rendering index.html at the moment)