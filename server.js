const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

let riddles =[
{
    'difficulty':'Easy',
    'TheRiddle':'What has to be broken before you can use it?',
'Answer':'An Egg You got it ?'
},
{
    'difficulty':'Easy',
    'TheRiddle':' Im tall when Im young, and Im short when Im old. What am I?',
'Answer':'A candle'
},
{
    'difficulty':'Easy',
    'TheRiddle':' Riddle: What month of the year has 28 days?',
'Answer':'All of them since all has 28 or more days Right?'
},
{
    'difficulty':'Easy',
    'TheRiddle':'Riddle: What is full of holes but still holds water?',
'Answer':'A sponge'
},{
    'difficulty':'Easy',
    'TheRiddle':'What question can you never answer yes to?',
'Answer':'Are you asleep Yet?'
},{
    'difficulty':'Easy',
    'TheRiddle':'What is always in front of you but cant be seen?',
'Answer':'The future'
},{
    'difficulty':'Easy',
    'TheRiddle':'Theres a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?',
'Answer':'There arent any—its a one-story house.'
},{
    'difficulty':'Easy',
    'TheRiddle':' What can you break, even if you never pick it up or touch it?',
'Answer':'A promise'
},{
    'difficulty':'Easy',
    'TheRiddle':'What goes up but never comes down?',
'Answer':'Your age'
},{
    'difficulty':'Easy',
    'TheRiddle':'A man who was outside in the rain without an umbrella or hat didnt get a single hair on his head wet. Why?',
'Answer':'he is bald'
},{
    'difficulty':'Easy',
    'TheRiddle':'What gets wet while drying?',
    'Answer':'A towel'
},{
    'difficulty':'Easy',
    'TheRiddle':' I shave every day, but my beard stays the same. What am I?',
'Answer':'A barber'
},{
    'difficulty':'Easy',
    'TheRiddle':'Riddle: You see a boat filled with people, yet there isnt a single person on board. How is that possible?',
'Answer':'they all are married'
},{
    'difficulty':'Easy',
    'TheRiddle':'A man dies of old age on his 25 birthday. How is this possible?',
'Answer':' He was born on February 29. for how did not understand  February 29 comes Each 4 years btw 2024 have one '
},{
    'difficulty':'Easy',
    'TheRiddle':' What building has the most stories?',
'Answer':'The library'
},{
    'difficulty':'Easy',
    'TheRiddle':'I am an odd number. Take away a letter and I become even. What number am I?',
'Answer':'Seven'
},
{
    'difficulty':'medium',
    'TheRiddle':'Two fathers and two sons are sitting on a bench, yet there are only three people sitting. How? ',
'Answer':'Answer: They are a grandfather, father, and son.',
},

{
    'difficulty':'medium',
    'TheRiddle':' If eleven plus two equals one, what does nine plus five equal? ',
'Answer':'Answer: 11 oclock plus 2 hours = 1  oclock9 oclock plus 5 hours = 2 oclock'
},
 {
    'difficulty': 'Medium',
    'TheRiddle': "I can be swallowed, but I can also swallow you. What am I?",
    'Answer': "Pride"
},
 {
    'difficulty': 'Medium',
    'TheRiddle': "I am a word, I am a question, I am a sentence, I am a statement. I am known by all, yet I am uttered by few. What am I?",
    'Answer': "Why"
},
{
    'difficulty': 'Medium',
    'TheRiddle': "I am a box that holds keys without locks, yet they can unlock your mind. What am I?",
    'Answer': "A book"
},

{
    'difficulty':'Hard',
    'TheRiddle':'What begins with T, ends with T, and has T in it? ',
'Answer':'A teapot.'
},{
    'difficulty':'Hard',
    'TheRiddle':'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire word signifies a great woman. What is the word?',
'Answer':' Heroine.'
}, {
    'difficulty': 'Hard',
    'TheRiddle': 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
    'Answer': 'An echo'
  },
   {
    'difficulty': 'Hard',
    'TheRiddle': 'I am taken from a mine, and shut in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?',
    'Answer': 'Pencil lead (graphite)'
  },

   {
    'difficulty': 'Hard',
    'TheRiddle': 'I have cities but no houses, forests but no trees, and rivers but no water. What am I?',
    'Answer': 'A map'
  },
   {
    'difficulty': 'Hard',
    'TheRiddle': 'What has keys but can\'t open locks? What has space but has no room? What has you but can\'t hold you?',
    'Answer': 'A piano'
  },
   {
    'difficulty': 'Hard',
    'TheRiddle': 'I have keys but no locks. I have space but no room. You can enter, but you can never leave. What am I?',
    'Answer': 'A keyboard'
  },
   {
    'difficulty': 'Hard',
    'TheRiddle': 'I can fly without wings, cry without eyes. Wherever I go, darkness follows me. What am I?',
    'Answer': 'A cloud'
  },
  
   {
    'difficulty': 'Hard',
    'TheRiddle': 'I speak without a mouth and hear without ears. I have a name, but I am not alive. What am I?',
    'Answer': 'A book'
  },
  
   {
    'difficulty': 'Hard',
    'TheRiddle': 'I am taken from a mine, and shut in a wooden case. When you need me, you throw me away. What am I?',
    'Answer': 'A matchstick'
  },
{
    'difficulty': 'Hard',
    'TheRiddle': "I can fly without wings. I can cry without eyes. Wherever I go, darkness follows me. What am I?",
    'Answer': "A shadow"
},
{
    'difficulty': 'Hard',
    'TheRiddle': "I have a neck but no head. I have a body but no limbs. What am I?",
    'Answer': "A bottle"
}

, {
    'difficulty': 'Hard',
    'TheRiddle': "What has a heart that doesn't beat?",
    'Answer': "An artichoke"
},
  {
    'difficulty': 'Hard',
    'TheRiddle': "I am a word of letters three, add two and fewer there will be. What am I?",
    'Answer': "Few"
}, {
    'difficulty': 'Hard',
    'TheRiddle': "The more you take, the more you leave behind. What am I?",
    'Answer': "Footsteps"
}, {
    'difficulty': 'Hard',
    'TheRiddle': "I am not alive, but I can grow. I don't have lungs, but I need air. I don't have a mouth, but water kills me. What am I?",
    'Answer': "Fire"
},  {
    'difficulty': 'Hard',
    'TheRiddle': "I can travel the world without leaving my corner. What am I?",
    'Answer': "A stamp"
},
{
    'difficulty':'Hard',
    'TheRiddle':'Riddle: How do eight eights add up to one thousand? ',
'Answer':'888 + 88 + 8 + 8 + 8 = 1000.'
},{
    'difficulty':'Hard',
    'TheRiddle':' Riddle: I can be long or can be short, I can be black, white, brown, or purple. You can find me the world over and I am often the main feature. What am I? ',
'Answer':'Rice.'
},{
    'difficulty':'Hard',
    'TheRiddle':'A woman is sitting in her hotel room and hears a knock at the door. She opens the door to see a man whom shes never met before. He says, “Im sorry, I have made a mistake, I thought this was my room.” He then goes down the corridor and into the elevator. The woman goes back into her room and calls security. What made the woman so suspicious of the man?',
'Answer':'If he really thought it was his hotel room, he would have tried to open the door—not knock on it first.'
},
{
    'difficulty':'Hard',
    'TheRiddle':'Sally lives in a place where six months of the year is mild summer and the temperature drops significantly the other six months. She owns a lake where there is a small island. She wants to build a house on the island and needs to get materials there. She doesn’t have a boat, plane, or anything to transport them to the island. How does Sally solve this problem?',
'Answer':'She waits to take the materials over during the colder months because the lake will freeze over, so she can walk over it.'
},
{
    'difficulty':'unknown',
    'TheRiddle':'unknown',
'Answer':'unknown'
}

]
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  
app.get('/riddle', (req, res) => {
    const selectedDifficulty = req.query.difficulty;
  
    let riddlesByDifficulty = riddles;
  
    // Filter riddles by the selected difficulty if provided
    if (selectedDifficulty) {
      riddlesByDifficulty = riddles.filter(riddle => riddle.difficulty.toLowerCase() === selectedDifficulty.toLowerCase());
    }
  
    // Select a random riddle from the filtered riddles
    const randomRiddle = riddlesByDifficulty[Math.floor(Math.random() * riddlesByDifficulty.length *0.5)];
  
    if (randomRiddle) {
      res.json(randomRiddle);
    } else {
      res.json({
        'difficulty': 'unknown',
        'TheRiddle': 'unknown',
        'Answer': 'unknown'
      });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });