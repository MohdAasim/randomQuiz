<template lang="" >
    <div class='text-center mt-5' >
        <div v-if='this.quiz<max'>
        <div v-if='this.startQuiz'>
            <input v-model='totolQues' placeholder='total question you want'/>
            <br>
            <label class='text-dark mt-4'>Range of random number </label>
            <input v-model='operands'>
            <br>
            <button class='btn btn-primary mt-2' @click='quizBegin'>Start Quiz</button>
          </div>
        <div class='card' v-else >
        <div class='mt-4'><h4>Q. {{ operandOne }}{{this.randomOperator}}{{ operandTwo }} ?</h4></div>
        <input placeholder='Enter your answer here' v-model='answer' type='number'>
        <br>
        <button class="btn btn-info mt-2" @click='logAnswer'>next</button>
        <span class='mt-5'>Your Score is {{score}}</span>
        </div> 
        </div> 
        <div v-else>
            <Showresult :score='score' :answerValue='answerValue' />
        </div>
    </div>
</template>
<script>
import Showresult from "./Showresult.vue";
export default {
  components: {
    Showresult,
  },
  data() {
    return {
      answer:"",
      numberoperandOne: 0,
      operandTwo: 0,
      quiz: 0,
      score: 0,
      totolQues: "",
      max: 20,
      randomOperator: "",
      operands: 10,
      startQuiz: true,
      answerValue: [],
    };
  },

  methods: {
    quizBegin() {
      this.startQuiz = false;
      if (this.totolQues) this.max = this.totolQues;
    },
    forceRerender() {
      this.count += 1;
    },
    logAnswer() {
      let result;
      this.randomOperator == "+"
        ? (result = this.operandOne + this.operandTwo)
        : this.randomOperator == "-"
        ? (result = this.operandOne - this.operandTwo)
        : this.randomOperator == "*"
        ? (result = this.operandOne * this.operandTwo)
        : (result = this.operandOne / this.operandTwo);
      if (result == this.answer && this.answer!=='') {
        this.score++;
        this.answerValue.push({
          Ques: `${this.operandOne}${this.randomOperator}${this.operandTwo}?`,
          answer: result,
          answertype: "correct",
        });
      } else {
        this.score--;
        this.answerValue.push({
          Ques: `${this.operandOne}${this.randomOperator}${this.operandTwo}?`,
          answer: result,
          answertype: "wrong",
        });
      }
      this.quiz++;
      this.createRandom();
    },
    //creating random number and operator
    createRandom() {
      this.answer = "";
      this.operandOne = Math.floor(Math.random() * (this.operands - 1 + 1)) + 1;
      this.operandTwo = Math.floor(Math.random() * (this.operands - 1 + 1)) + 1;
      var myArray = ["+", "-", "*", "/"];
      this.randomOperator = myArray[Math.floor(Math.random() * myArray.length)];
      this.quiz == 0 ? (this.startQuiz = true) : (this.startQuiz = false);
    },
  },
  created() {
    this.createRandom();
  },
};
</script>

