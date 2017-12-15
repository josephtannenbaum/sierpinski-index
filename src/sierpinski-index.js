function sierpinskiIndex(x, y, max) {   // due to Bartholdi 1995

    var result = 0
    var loopIndex = max
    var oldx = 0

    if (x > y) {
        result += 1
        x = max - x
        y = max - y
    }

    while (loopIndex > 0) {
        result += result
        if (x + y > max) {
            result += 1
            oldx = x
            x = max - y
            y = oldx
        }

        x += x
        y += y
        result += result

        if (y > max) {
            result += 1
            oldx = x
            x = y - max
            y = max - oldx
        }

        loopIndex = Math.floor(loopIndex / 2)
    }

    return result
}
