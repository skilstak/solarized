package solarized

const (
	Base03  = "\033[1;30m"
	B03     = Base03
	Base02  = "\033[0;30m"
	B02     = Base02
	Base01  = "\033[1;32m"
	B01     = Base01
	Base00  = "\033[1;33m"
	B00     = Base00
	Base0   = "\033[1;34m"
	B0      = Base0
	Base1   = "\033[1;36m"
	B1      = Base1
	Base2   = "\033[0;37m"
	B2      = Base2
	Base3   = "\033[1;37m"
	B3      = Base3
	Yellow  = "\033[0;33m"
	Y       = Yellow
	Orange  = "\033[1;31m"
	O       = Orange
	Red     = "\033[0;31m"
	R       = Red
	Magenta = "\033[0;35m"
	M       = Magenta
	Violet  = "\033[1;35m"
	V       = Violet
	Blue    = "\033[0;34m"
	B       = Blue
	Cyan    = "\033[0;36m"
	C       = Cyan
	Green   = "\033[0;32m"
	G       = Green
	Reset   = "\033[0m"
	X       = Reset
	Screen  = "\033[2J\033[H"
	S       = Screen
	Line    = "\033[2K\033[G"
	L       = Line
)

var Colors = []string{Y, O, R, M, V, B, C, G}
