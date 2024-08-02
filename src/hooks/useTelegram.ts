

export function useTelegram() {
    // @ts-ignore
    const tg = window.Telegram.WebApp;
    const closeApp = () => {
        tg.close()
    }
    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }
    return {
        tg,
        closeApp,
        user: tg.initDataUnsafe?.user,
        onToggleButton
    }
}