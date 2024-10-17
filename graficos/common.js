
const getCSS =(variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const TickConfig ={
    family: getCSS('--font'),
    size :16,
    color: getCSS('--primary-color')
}
export {getCSS, TickConfig}