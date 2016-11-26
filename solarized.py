"""Solarized color terminal.

This module contains some mappings for the ANSI terminal escapes support
the 16 colors of the Solarized color palette created by Ethan Schoonover.
"""

base03 = b03 = Base03 = B03 = '\x1b[1;30m'
base03 = b03 = Base03 = B03 = '\x1b[1;30m'
base02 = b02 = Base02 = B02 = '\x1b[0;30m'
base01 = b01 = Base01 = B01 = '\x1b[1;32m'
base00 = b00 = Base00 = B00 = '\x1b[1;33m'
base0 = b0 = Base0 = B0 = '\x1b[1;34m'
base1 = b1 = Base1 = B1 = '\x1b[1;36m'
base2 = b2 = Base2 = B2 = '\x1b[0;37m'
base3 = b3 = Base3 = B3 = '\x1b[1;37m'
yellow = y = Yellow = Y = '\x1b[0;33m'
orange = o = Orange = O = '\x1b[1;31m'
red = r = Red = R = '\x1b[0;31m'
magenta = m = Magenta = M = '\x1b[0;35m'
violet = v = Violet = V = '\x1b[1;35m'
blue = b = Blue = B = '\x1b[0;34m'
cyan = c = Cyan = C = '\x1b[0;36m'
green = g = Green = G = '\x1b[0;32m'
reset = x = Reset = X = '\x1b[0m'
screen = clear = Screen = Clear = s = S  = '\x1b[2J\x1b[H'
line = l = Line = L = '\x1b[2K\x1b[G'

// nice when picking a random color
colors = [ y, o, r, m, v, b, c, g ]
