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
  
  "Fill a saucepan with water, enough to cover your eggs completely",
  "Put the saucepan on the hob and heat the water to boiling",
  "Add your eggs to the boiling water (use a spoon to lower them in for safety)",
  "Start the egg timer and leave the eggs to cook", 
  "When the timer runs out, remove the saucepan from the hob and drain the water", 
  "Your eggs are ready to eat!"

  
];

const instructionsPoached = [
  
  "Fill a saucepan with water and heat to 100 degrees",
  "Stir the water",
  "Make sure the water is boiling before adding your eggs and starting the timer.",
  
];


export const cookingOptions = [boiledEggTimes,  poachedEggTimes]
export const cookingInstructions = [instructionsBoiled, instructionsPoached]