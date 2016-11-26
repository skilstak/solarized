#!/usr/bin/env node
var c = require('.')
console.log(c.clear + c.yellow + 'Hello ' + c.cyan + 'world!' + c.reset)
console.log(c.y + 'Hello ' + c.Line + 'world!')
