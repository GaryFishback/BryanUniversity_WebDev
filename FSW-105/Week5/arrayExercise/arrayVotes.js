var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zach", age: 19, voted: false }
]

function reduceFunction(array, functionToRun, placeholder) {
    this.reduceArray = array.reduce(functionToRun, placeholder);
}

function totalVotes(arr) {
    function youngVoters(final, object) {
        if (object.age > 18 && object.age <= 25) { final++ }
        return final
    }
    var reduceVoters1 = new reduceFunction(arr, youngVoters, 0)
    console.log(reduceVoters1.reduceArray)

    function youngVotedOrNot(final, object) {
        if (object.age > 18 && object.age <= 25 && object.voted) { final++ }
        return final
    }
    var reduceVoters2 = new reduceFunction(arr, youngVotedOrNot, 0)
    console.log(reduceVoters2.reduceArray)

    function midVoters(final, object) {
        if (object.age >= 26 && object.age <= 35) { final++ }
        return final
    }
    var reduceVoters3 = new reduceFunction(arr, midVoters, 0)
    console.log(reduceVoters3.reduceArray)

    function midVotedOrNot(final, object) {
        if (object.age >= 26 && object.age <= 35 && object.voted) { final++ }
        return final
    }
    var reduceVoters4 = new reduceFunction(arr, midVotedOrNot, 0)
    console.log(reduceVoters4.reduceArray)
}
totalVotes(voters)