# Starter setup for an Electron project using TypeScript+React [![Build Status](https://travis-ci.org/olfilato/electron-ts-react-setup.svg?branch=master)](https://travis-ci.org/olfilato/electron-ts-react-setup)

## How to set up

Install yarn, then run ```yarn``` inside the project directory.

## Commands

* ```gulp``` - runs tslint, then compiles TS to JS. Warnings or errors occurring during the linter stage will not block the local build, but any errors occuring during the compilation step will block the build and any further tasks.
* ```gulp start``` - runs all of the above steps and starts the electron app.
* ```gulp tslint``` - runs just tslint; mostly there for debugging the linter.
