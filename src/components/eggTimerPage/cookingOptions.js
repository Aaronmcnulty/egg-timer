const boiledEggTimes = [
  {
    type: "RUNNY YOLK",
    time: 2,
  },
  {
    type: "SOFT BOILED",
    time: 480,
  },
  {
    type: "HARD BOILED",
    time: 600,
  },
];



const poachedEggTimes = [
  {
    type: "RUNNY YOLK",
    time: 300,
  },
  {
    type: "GOOEY YOLK",
    time: 360,
  },
  {
    type: "HARD YOLK",
    time: 600,
  },
];

const instructionsBoiled = [
  
  "Fill a saucepan with water and heat to 100 degrees",
  "Make sure the water is boiling before adding your eggs and starting the timer.",
  
];

const instructionsPoached = [
  
  "Fill a saucepan with water and heat to 100 degrees",
  "Stir the water",
  "Make sure the water is boiling before adding your eggs and starting the timer.",
  
];


export const cookingOptions = [boiledEggTimes,  poachedEggTimes]
export const cookingInstructions = [instructionsBoiled, instructionsPoached]