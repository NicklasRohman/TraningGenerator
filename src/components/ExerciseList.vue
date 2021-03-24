<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Exercises List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(exercise, index) in exercises"
          :key="index"
          @click="setActiveExercise(exercise, index)"
        >
          {{ exercise.title }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentExercise">
        <h4>Exercise</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentExercise.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentExercise.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentExercise.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/exercises/' + currentExercise.id"
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
</template>

<script>
import ExerciseDataService from "../services/ExerciseDataService";

export default {
  name: "Exercises-list",
  data() {
    return {
      exercises: [],
      currentExercise: null,
      currentIndex: -1,
      title: ""
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
    
    searchTitle() {
      ExerciseDataService.findByTitle(this.title)
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