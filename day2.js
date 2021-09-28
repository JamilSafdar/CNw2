const datachecker = (string, rank) => {
    if (string === "codenation" && rank === 1) {
        console.log(`This is ${string} and we are ranked at number ${rank}`)
    } else {
        console.log("We are not Code Nation")
    }
}
console.log(datachecker("codenation", 1));