basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
})
