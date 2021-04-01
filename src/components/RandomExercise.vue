<template>
  <div class="container-fluid">
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="numberOfExercises">Number Of Exercises</label>
              <input
                type="number"
                class="form-control"
                id="numberOfExercises"
                required
                v-model="exercise.numberOfExercises"
                name="numberOfExercises"
                min="1"
                max="10"
                value="1"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="minDifficultLevel">Minimum Difficult Level</label>
              <input
                type="number"
                class="form-control"
                id="minDifficultLevel"
                required
                v-model="exercise.minDifficultLevel"
                name="minDifficultLevel"
                min="1"
                max="10"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="maxDifficultLevel">Max Difficult Level</label>
              <input
                type="number"
                class="form-control"
                id="maxDifficultLevel"
                required
                v-model="exercise.maxDifficultLevel"
                name="maxDifficultLevel"
                min="1"
                max="10"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="minEstimatedTime"
                >Min Estimated Time in minutes</label
              >
              <input
                type="number"
                class="form-control"
                id="minEstimatedTime"
                required
                v-model="exercise.minEstimatedTime"
                name="minEstimatedTime"
                min="1"
                max="10"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="maxEstimatedTime"
                >Max Estimated Time in minutes</label
              >
              <input
                type="number"
                class="form-control"
                id="maxEstimatedTime"
                required
                v-model="exercise.maxEstimatedTime"
                name="maxEstimatedTime"
                min="1"
                max="10"
              />
            </div>
          </div>
          <div class="col">
            <button
              type="button"
              class="btn btn-info"
              @click="getRandomExercise"
            >
              Get
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">

<div class="table-responsiv">
  <table class="table table-hover table striped">
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Difficult Level</th>
        <th>Estimated Time</th>
        <th>Video Path</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(exercise, index) in exercisesResults"
      v-bind:key="index">
      <td>{{ exercise.id }}</td>
        <td>{{ exercise.exerciseName }}</td>
        <td>{{ exercise.difficultLevel }}</td>
        <td>{{ exercise.estimatedTime }}</td>
        <td>{{ exercise.videoPath }}</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  </div>
</template>

<script>
import ExerciseDataService from "../services/ExerciseDataService";

export default {
  name: "random-exercise",
  data() {
    return {
      exercise: {
        numberOfExercises: 1,
        minDifficultLevel: 1,
        maxDifficultLevel: 10,
        minEstimatedTime: 1,
        maxEstimatedTime: 10,
      },
      exercisesResults: [],
      submitted: false,
    };
  },
  methods: {
    getRandomExercise() {
      var data = {
        numberOfExercises: this.exercise.numberOfExercises,
        minDifficultLevel: this.exercise.minDifficultLevel,
        maxDifficultLevel: this.exercise.maxDifficultLevel,
        minEstimatedTime: this.exercise.minEstimatedTime,
        maxEstimatedTime: this.exercise.maxEstimatedTime,
      };

      ExerciseDataService.getRandomExercise(data)
        .then((response) => {
          this.exercisesResults = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 80%;
  margin: auto;
}

input {
  width: 50%;
}

</style>
