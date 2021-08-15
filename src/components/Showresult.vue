<template>
    <div class="card mb-4">
        <span class='mt-2'>Your Score is {{score}}</span>
        <div v-for="item,index of answerValue" :key="index">  
                <div v-if='item.answertype=="correct"' class="text-success card">
                    <span>Question: {{item.Ques}}</span>
                    <span> answer : {{item.answer}}</span>
                </div>          
                <div v-else class="text-danger card">
                    <span>Question: {{item.Ques}}</span>
                    <span>answer : {{item.answer}}</span>
                </div>
        </div>        
     </div> 

</template>

<script>
    export default {
        props:['score',"answerValue"],
    }
</script>
<style lang="scss" scoped>

</style>