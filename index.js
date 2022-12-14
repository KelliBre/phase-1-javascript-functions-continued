// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(mondayActivity = "go to the office"){
    return `This Monday, I will ${mondayActivity}.`
}

function wrapAdjective(visualFlair = "*"){

    return function(adjective = "special"){
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
};