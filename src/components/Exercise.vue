<template>
  <div v-if="currentExercise" class="edit-form">
    <h4>Exercise</h4>
    <form>
      <div class="form-group">
        <label for="exerciseName">Exercise Name</label>
        <input
          type="text"
          class="form-control"
          id="exerciseName"
          v-model="currentExercise.exerciseName"
        />
      </div>
      <div class="form-group">
        <label for="description">Difficult Level</label>
        <input
          type="text"
          class="form-control"
          id="difficultLevel"
          v-model="currentExercise.difficultLevel"
        />
      </div>

      <div class="form-group">
        <label for="description">Estimated Time</label>
        <input
          type="text"
          class="form-control"
          id="EstimatedTime"
          v-model="currentExercise.estimatedTime"
        />
      </div>

      <div class="form-group">
        <label for="description">Video Path</label>
        <input
          type="text"
          class="form-control"
          id="videoPath"
          v-model="currentExercise.videoPath"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentExercise.description"
        />
      </div>
      
    </form>

    <button class="badge badge-danger mr-2" @click="deleteExercise">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateExercise">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Exercise...</p>
  </div>
</template>

<script>
import ExerciseDataService from "../services/ExerciseDataService";

export default {
  name: "exercise",
  data() {
    return {
      currentExercise: null,
      message: ''
    };
  },
  methods: {
    getExercise(id) {
      ExerciseDataService.get(id)
        .then(response => {
          this.currentExercise = response.data;
          console.log(response.data);
        })
                .catch(e => {
          console.log(e);
        });
    },

    updateExercise() {
      ExerciseDataService.update(this.currentExercise.id, this.currentExercise)
        .then(response => {
          console.log(response.data);
          this.message = 'The exercise was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteExercise() {
      ExerciseDataService.delete(this.currentExercise.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "exercises" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getExercise(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>