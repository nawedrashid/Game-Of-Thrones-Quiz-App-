var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score = 0;
var highscores = [
  {
    name: "Nawed",
    score: 28
  },
  {
    name: "Tarun",
    score: 24
  },
  {
    name: "Rahul",
    score: 20
  }
]
var queslvl1 = [
  {
    question:"How many kingdoms are there in Westeros ? ",
    answer:"7"
  },
  {
    question:"Who is the King of Westeros in the beginning of show ?  ",
    answer:"Robert Baratheon"
  },
  {
    question:"Who is the Warden of North in the beginning of show ? ",
    answer:"Eddard Stark"
  },
  {
    question:"How many Stark children are there ? ",
    answer:"5"
  },
  {
    question:"What is the name of the largest dragon ?  ",
    answer:"Drogon"
  }
]
var queslvl2 = [
  {
    question:"What is the name of John Snow's direwolf ? ",
    answer:"Ghost"
  },
  {
    question:"What is the name of the event where Robb Stark dies ? ",
    answer:"Red Wedding"
  },
  {
    question:"What is the name of place where Daenerys got unsullied army ? ",
    answer:"Astapor"
  },
  {
    question:"What is the name of faceless man Arya Stark met ? ",
    answer:"Jaqen H'ghar"
  },
  {
    question:"Who is the leader of White Walkers ? ",
    answer:"Night King"
  },
]
var queslvl3 = [
  {
    question:"What is the name of John Snow's Sword ? ",
    answer:"Longclaw"
  },
  {
    question:"What is the name of the Leader of Second Sons ? ",
    answer:"Daario Naharis"
  },
  {
    question:"Who first called John the king of the north ? ",
    answer:"Lyanna Mormount"
  },
  {
    question:"Where John first saw the Night King ? ",
    answer:"Hardhome"
  },
  {
    question:"What is the real name of John Snow ? ",
    answer:"Aegon Targaryen"
  }
];
function welcome(){
  var username = readlineSync.question(chalk.blue("What is your name ? "));
  console.log("--------------------");
  console.log(chalk.blue("Welcome ")+chalk.bold.italic(username)+chalk.blue(" to the ")+chalk.bold.italic("Game Of Thrones Quiz."));
  console.log("--------------------");
  console.log(chalk.blue("In this quiz there are three difficulty levels and each level have 5 questions each having a score of 2."));
  console.log("--------------------");
  console.log(chalk.blue("To clear the first level you have to score atleast 6 and to clear second level a score of 14 is required"));
  console.log("--------------------");
  console.log(chalk.blue("Good Luck"));
}
function play(question, answer){
  var useranswer = readlineSync.question(chalk.blue(question));
  if(useranswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("Right!"));
    score = score + 2;
  }
  else{
      console.log(chalk.red("Wrong!"));
  }
  console.log(chalk.blue("Current Score: ",score));
  console.log("-------------")
}
function gamelvl1()
{
  if(score<6)
  {
    console.log(chalk.bgBlue(" Let's begin Level 1 "));
    console.log("--------------------");
    for(var i=0; i<queslvl1.length; i++)
    {
      var currentquestion = queslvl1[i];
      play(currentquestion.question,        currentquestion.answer)
    }
  }
}
function gamelvl2()
{
  if(score>=6)
  {
    console.log(chalk.bgBlue(" Let's begin Level 2 "));
    console.log("--------------------");
    for(var i=0; i<queslvl2.length; i++)
    {
      var currentquestion = queslvl2[i];
      play(currentquestion.question,        currentquestion.answer)
    }
  }
  else
  console.log(chalk.bgRed(" Score not enough for level 2 "));
}
function gamelvl3()
{
  if(score>=14)
  {
    console.log(chalk.bgBlue(" Let's begin Level 3 "));
    for(var i=0; i<queslvl3.length; i++)
    {
      var currentquestion = queslvl3[i];
      play(currentquestion.question,        currentquestion.answer)
    }
  }
  else if(score>=6&&score<14)
  console.log(chalk.bgRed(" Score not enough for level 3 "));
}
function showscore(){
  console.log(chalk.blue("YAY! You Scored: "),score);
  console.log("--------------------");
}
function highscore(){
  console.log(chalk.blue("Check out the High Scores"));
  highscores.map(score=>console.log(score.name," : ",score.score))
  if(score>20&&score<=24)
   console.log("Congratulation!! "+chalk.blue("You beat Rahul. Send me a Screenshot and I'll update the highscores"));
  else if(score>24&&score<=28)
   console.log("Congratulation!! "+chalk.blue("You beat Rahul and Tarun. Send me a Screenshot and I'll update the highscores"));
   else if(score>28)
    console.log("Congratulation!! "+chalk.blue("You beat everyone. Send me a Screenshot and I'll update the highscores"));
}
welcome();
gamelvl1();
gamelvl2();
gamelvl3();
showscore();
highscore();