function home() {
    console.log("executing home() in handler")
}

function review() {
    console.log("executing review() in handler")
}

exports.home = home
exports.review = review