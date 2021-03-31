<template>
<div class="container-fluid">
<div class="list row">
  <SearchExercise/>
</div>
  <div class="list row">
    <div class="col-md-6">
      <h4>Exercises List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(exercise, index) in exercises"
          :key="index"
          @click="setActiveExercise(exercise, index)"
        >
          {{ exercise.exerciseName }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentExercise">
        <h4>Exercise</h4>
                <div>
          <label><strong>Id:</strong></label> {{ currentExercise.exerciseId }}
        </div>
        <div>
          <label><strong>Name:</strong></label> {{ currentExercise.exerciseName }}
        </div>
        <div>
          <label><strong>Difficult Level:</strong></label> {{ currentExercise.difficultLevel }}
        </div>
                <div>
          <label><strong>Estimated Time:</strong></label> {{ currentExercise.estimatedTime }}
        </div>
                <div>
          <label><strong>Video Path:</strong></label> {{ currentExercise.videoPath }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentExercise.description }}
        </div>

        <a class="badge badge-warning"
          :href="'/exercises/' + currentExercise.exerciseId"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a exercise...</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ExerciseDataService from "../services/ExerciseDataService";
import SearchExercise from "./SearchExercise"

export default {
  name: "Exercises-list",
  components: {
  SearchExercise
  },
  data() {
    return {
      exercises: [],
      currentExercise: null,
      currentIndex: -1,
      exerciseName: ""
    };
  },
  methods: {
    retrieveExercises() {
      ExerciseDataService.getAll()
        .then(response => {
          this.exercises = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveExercises();
      this.currentExercise = null;
      this.currentIndex = -1;
    },

    setActiveExercise(exercise, index) {
      this.currentExercise = exercise;
      this.currentIndex = index;
    },
    
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
  mounted() {
    this.retrieveExercises();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>