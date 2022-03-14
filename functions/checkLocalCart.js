export default function checkLocalCart() {
    if (typeof localStorage.cart === "undefined") {
        return 0
    } else {
        return Object.keys(JSON.parse(localStorage.cart)).length
    }
}