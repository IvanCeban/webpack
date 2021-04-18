import * as $ from 'jquery'

// Считает клики по документу
function createAnalytics () {
    let counter = 0
    let isDestroyed = false
    const listener = () => counter++
    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
            isDestroyed = true
        },
        getClicks() {Í
            if(isDestroyed) {
                return 'Analytics is destroyed. Bye bye!!!'
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()