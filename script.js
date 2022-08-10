window.onload = () => {
    let theme = sessionStorage.getItem('theme')
    let darkMode = theme != null && theme === 'dark' ? true : false
    let body = document.querySelector('body')
    let themeToggler = document.querySelector('.theme-toggler')

    const setDarkMode = () => {
        body.classList.add('dark')
        sessionStorage.setItem('theme', 'dark')
        themeToggler.innerHTML = 'try it in light mode'
        darkMode = true
    }

    const setLightMode = () => {
        body.classList.remove('dark')
        sessionStorage.setItem('theme', 'light')
        themeToggler.innerHTML = 'try it in dark mode'
        darkMode = false
    }

    const setModeAtLoad = () => {
        if (theme !== null) {
            if (theme === 'dark') {
                setDarkMode()
                return
            }
        }
        setLightMode()
    }

    const toggleTheme = () => {
        if (!darkMode) {
            setDarkMode()
            return
        }
        setLightMode()
    }

    setModeAtLoad()

    themeToggler.onclick = toggleTheme
}