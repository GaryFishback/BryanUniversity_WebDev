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



function totalVotes(arr) {
    function reduceFunction(array, functionToRun, placeholder) {
        this.reduceArray = array.reduce(functionToRun, placeholder);
        return reduceFunction.reduceArray
    }

    function youngVoters(final, object) {
        if (object.age > 18 && object.age <= 25) { final++ }
        return final
    }


    function youngVotedOrNot(final, object) {
        if (object.age > 18 && object.age <= 25 && object.voted) { final++ }
        return final
    }


    function midVoters(final, object) {
        if (object.age >= 26 && object.age <= 35) { final++ }
        return final
    }

    function midVotedOrNot(final, object) {
        if (object.age >= 26 && object.age <= 35 && object.voted) { final++ }
        return final
    }


    function oldVoters(final, object) {
        if (object.age >= 36 && object.age <= 55) { final++ }
        return final
    }


    function oldVotedOrNot(final, object) {
        if (object.age >= 36 && object.age <= 55 && object.voted) { final++ }
        return final
    }
    // let votesObject = {
    //     reduceVoters1: new reduceFunction(arr, youngVoters, 0),
    //     reduceVoters2: new reduceFunction(arr, youngVotedOrNot, 0),
    //     reduceVoters3: new reduceFunction(arr, midVoters, 0),
    //     reduceVoters4: new reduceFunction(arr, midVotedOrNot, 0),
    //     reduceVoters5: new reduceFunction(arr, oldVoters, 0),
    //     reduceVoters6: new reduceFunction(arr, oldVotedOrNot, 0)
    // }

    var reduceVoters1 = new reduceFunction(arr, youngVoters, 0)
    var reduceVoters2 = new reduceFunction(arr, youngVotedOrNot, 0)
    var reduceVoters3 = new reduceFunction(arr, midVoters, 0)
    var reduceVoters4 = new reduceFunction(arr, midVotedOrNot, 0)
    var reduceVoters5 = new reduceFunction(arr, oldVoters, 0)
    var reduceVoters6 = new reduceFunction(arr, oldVotedOrNot, 0)
        // console.log(reduceVoters1.reduceArray)
        // console.log(reduceVoters2.reduceArray)
        // console.log(reduceVoters3.reduceArray)
        // console.log(reduceVoters4.reduceArray)
        // console.log(reduceVoters5.reduceArray)
        // console.log(reduceVoters6.reduceArray)

    let votesObject = {
        youth: reduceVoters1.reduceArray,
        youngVotes: reduceVoters2.reduceArray,
        mids: reduceVoters3.reduceArray,
        midVotes: reduceVoters4.reduceArray,
        olds: reduceVoters5.reduceArray,
        oldVotes: reduceVoters6.reduceArray
    }
    console.log(votesObject)


}
totalVotes(voters)

module.exports = totalVotes;