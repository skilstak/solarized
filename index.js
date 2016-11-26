
m = module.exports

m.base03 = m.b03 = m.Base03 = m.B03 = '\x1b[1;30m'
m.base02 = m.b02 = m.Base02 = m.B02 = '\x1b[0;30m'
m.base01 = m.b01 = m.Base01 = m.B01 = '\x1b[1;32m'
m.base00 = m.b00 = m.Base00 = m.B00 = '\x1b[1;33m'
m.base0 = m.b0 = m.Base0 = m.B0 = '\x1b[1;34m'
m.base1 = m.b1 = m.Base1 = m.B1 = '\x1b[1;36m'
m.base2 = m.b2 = m.Base2 = m.B2 = '\x1b[0;37m'
m.base3 = m.b3 = m.Base3 = m.B3 = '\x1b[1;37m'
m.yellow = m.y = m.Yellow = m.Y = '\x1b[0;33m'
m.orange = m.o = m.Orange = m.O = '\x1b[1;31m'
m.red = m.r = m.Red = m.R = '\x1b[0;31m'
m.magenta = m.m = m.Magenta = m.M = '\x1b[0;35m'
m.violet = m.v = m.Violet = m.V = '\x1b[1;35m'
m.blue = m.b = m.Blue = m.B = '\x1b[0;34m'
m.cyan = m.c = m.Cyan = m.C = '\x1b[0;36m'
m.green = m.g = m.Green = m.G = '\x1b[0;32m'
m.reset = m.x = m.Reset = m.X = '\x1b[0m'
m.screen = m.clear = m.Screen = m.Clear = m.s = m.S  = '\x1b[2J\x1b[H'
m.line = m.l = m.Line = m.L = '\x1b[2K\x1b[G'

// nice when picking a random color
m.colors = [ m.yellow, m.orange, m.red, m.magenta, m.violet, m.blue, m.cyan, m.green ]

// yes, that is all, really
