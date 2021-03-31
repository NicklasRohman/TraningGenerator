<template>
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Exercise name"
          v-model="exerciseName"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchExerciseName()"
          >
            Search
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import ExerciseDataService from "../services/ExerciseDataService";

export default {
  name: "search-exercises",
  data() {
    return {
      exercises: [],
      currentExercise: null,
      currentIndex: -1,
      exerciseName: ""
    };
  },
  methods: {

    searchExerciseName() {
      ExerciseDataService.findByExerciseName(this.exerciseName)
        .then(response => {
          this.exercises = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
  