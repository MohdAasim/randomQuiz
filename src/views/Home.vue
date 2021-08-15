<template>
  <div class="container-fluid ">
    <div class="row mt-10 mb-4">
    <div class="col-md-6 col-sm-6 card">
     <Quiz class="mb-4"/>
    </div>
    <div class="col-md-6 col-sm-6 card ">
     <Quiz class="mb-4"/>
    </div>
    </div>
  </div>
</template>
<script>
import Quiz from '../components/Quiz.vue'
export default {
  components: {
    Quiz
  },
};
</script>

<style lang="scss" scoped>
.mt-10{
    margin-top: 10%;
    margin-left:5%;
    margin-right:5%
}
</style>
