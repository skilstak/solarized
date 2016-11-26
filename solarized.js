#!/usr/bin/env node

const c = require('.')
const util = require('util')

var _colors = [
    [c.b03, 'BASE03 ', 'c.base03  c.b03 c.B03', '#002B36', '\\033[1;30m'],
    [c.b02, 'BASE02 ', 'c.base02  c.b02 c.B02', '#073642', '\\033[0;30m'],
    [c.b01, 'BASE01 ', 'c.base01  c.b01 c.B01', '#586E75', '\\033[1;32m'],
    [c.b00, 'BASE00 ', 'c.base00  c.b00 c.B00', '#657B83', '\\033[1;33m'],
    [c.b0,  'BASE0  ', 'c.base0   c.b0  c.B0 ', '#839496', '\\033[1;34m'],
    [c.b1,  'BASE1  ', 'c.base1   c.b1  c.B1 ', '#93A1A1', '\\033[1;36m'],
    [c.b2,  'BASE2  ', 'c.base2   c.b2  c.B2 ', '#EEE8D5', '\\033[0;37m'],
    [c.b3,  'BASE3  ', 'c.base3   c.b3  c.B3 ', '#FDF6E3', '\\033[1;37m'],
    [c.y,   'YELLOW ', 'c.yellow  c.y   c.Y  ', '#B58900', '\\033[0;33m'],
    [c.o,   'ORANGE ', 'c.orange  c.o   c.O  ', '#CB4B16', '\\033[1;31m'],
    [c.r,   'RED    ', 'c.red     c.r   c.R  ', '#DC322F', '\\033[0;31m'],
    [c.m,   'MAGENTA', 'c.magenta c.m   c.M  ', '#D33682', '\\033[0;35m'],
    [c.v,   'VIOLET ', 'c.violet  c.v   c.V  ', '#6C71C4', '\\033[1;35m'],
    [c.b,   'BLUE   ', 'c.blue    c.b   c.B  ', '#268BD2', '\\033[0;34m'],
    [c.c,   'CYAN   ', 'c.cyan    c.c   c.C  ', '#2AA198', '\\033[0;36m'],
    [c.g,   'GREEN  ', 'c.green   c.g   c.G  ', '#859900', '\\033[0;32m'],
    [c.b3,  'SCREEN ', 'c.screen  c.s   c.S  ', '       ', '\\033[2J\\033[H'],
    [c.b3,  'LINE   ', 'c.line    c.l   c.L  ', '       ', '\\033[2K\\033[G']
]

process.stdout.write(c.clear)

for (var i = 0; i < _colors.length; i++) {
  let s = _colors[i]
  let rc = (i % 2) ? c.b1 : c.b01
  console.log(util.format('%s%s%s',s[0],s[1],rc, ...s.slice(2)))
}




