const ThemeChanger = {

    change() {

        themes = ["blue", "dark-blue", "pink", "dark-pink"]

        actualTheme = document.querySelector('body').classList.toString()

        index = themes.indexOf(actualTheme, 0)
        nextIndex = index < 3 ? index + 1 : 0

        document.querySelector('body').classList.remove(themes[index])     
        document.querySelector('body').classList.add(themes[nextIndex])

    }
}

const Timer = {

    run(time) {
        setInterval (() => {
            ThemeChanger.change()
        }, time)
    }
}

let picture = document.querySelector('img')
picture.addEventListener('click', ThemeChanger.change)

TIME_TO_CHANGE = 5
Timer.run(TIME_TO_CHANGE * 1000);