let Lectura_P0 = 0
let P1 = 0
let Lectura_P2 = 0
let P3 = 0
let Lectura_P1 = 0
let P2 = 0
input.onPinPressed(TouchPin.P0, function () {
    Lectura_P0 = pins.analogReadPin(AnalogPin.P0)
    P1 = pins.map(
    Lectura_P0,
    0,
    1023,
    0,
    100
    )
    if (P1 >= 80) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (P1 <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    Lectura_P2 = pins.analogReadPin(AnalogPin.P2)
    P3 = pins.map(
    Lectura_P2,
    0,
    1023,
    0,
    100
    )
    if (P3 >= 80) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else if (P3 <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    Lectura_P1 = pins.analogReadPin(AnalogPin.P1)
    P2 = pins.map(
    Lectura_P1,
    0,
    1023,
    0,
    100
    )
    if (P2 >= 80) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (P2 <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
basic.forever(function () {
	
})
