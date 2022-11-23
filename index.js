
function saturdayFun(activity) {
  if (activity === undefined) {
    activity = `roller-skate`;
  }
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(Work) {
  if (Work === undefined) {
    Work = `go to the office`;
  }
  return `This Monday, I will ${Work}.`;
}

function wrapAdjective(Wrap) {
  if (Wrap === undefined) {
    Wrap = "*";
  }
  const innerFunction = function (nicePhrase) {
    if (nicePhrase === undefined) {
     nicePhrase = "special";
    }
    return `You are ${Wrap}${nicePhrase}${Wrap}!`;
  };
  return innerFunction;
}