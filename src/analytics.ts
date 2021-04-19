import * as $ from 'jquery'

// Считает клики по документу
function createAnalytics (): object {
    let counter = 0
    let isDestroyed: boolean = false
    const listener = (): number => counter++
    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
            isDestroyed = true
        },
        getClicks() {
            if(isDestroyed) {
                return 'Analytics is destroyed. Bye bye!!!'
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics()