// Code created by maverick-dev-55
const rtl = { x: 200 }
const ltr = { x: -200 }
const ttb = { y: -200 }
const btt = { y: 200 }
export default (notif)=>{
    switch (notif.position) {
        case 'top-left':
        case 'bottom-left':
            return ltr
        case 'top-right':
        case 'bottom-right':
            return rtl
        case 'bottom-center':
            return btt
        case 'top-center':
            return ttb
    }
}