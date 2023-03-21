function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

mondayWork();

const wrapAdjective = function (result = "*") {
  const wrapper = "You are"
  return function (emphatic = "special") {
    return `${wrapper} ${result}${emphatic}${result}!`
  }
    
}
  
