<template>
  <div class="container-fluid">
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="exerciseName">Exercise Name</label>
          <input
            type="text"
            class="form-control"
            id="exerciseName"
            required
            v-model="exercise.exerciseName"
            name="exerciseName"
          />
        </div>

        <div class="form-group">
        <label for="difficultLevel">Difficult Level</label>
        <input
          class="form-control"
          id="difficultLevel"
          required
          v-model="exercise.difficultLevel"
          name="difficultLevel"
        />
      </div>

        <div class="form-group">
        <label for="estimatedTime">Estimated Time</label>
        <input
          class="form-control"
          id="estimatedTime"
          required
          v-model="exercise.estimatedTime"
          name="estimatedTime"
        />
      </div>

      <div class="form-group">
        <label for="videoPath">Video Path</label>
        <input
          class="form-control"
          id="videoPath"
          required
          v-model="exercise.videoPath"
          name="videoPath"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="exercise.description"
          name="description"
        />
      </div>

      <button @click="saveExercise" class="btn btn success">Submit</button>
    </div>

    <div v-else>
      <h4>You Submitted Successfully</h4>
      <button class="btn btn-success" @click="newExercise">Add</button>
    </div>
  </div>
  </div>
</template>

<script>
import ExerciseDataService from "../services/ExerciseDataService"

export default ({
name: "add-exercise",
data() {
    return {
        exercise: {
            id: null,
            exerciseName: "",
            description: "",
            difficultLevel: 1,
            videoPath:"",
            estimatedTime: 1
        },
        submitted: false
    };
}, methods: {
    saveExercise() {
        var data = {
            exerciseName: this.exercise.exerciseName,
            description: this.exercise.description,
            difficultLevel: this.exercise.difficultLevel
        };

        ExerciseDataService.create(data).then(response => {
            this.exercise.exerciseName = response.data.exerciseName;
            console.log(response.data);
            this.submitted = true;
        })
        .catch(e => {
            console.log(e);
        });
    },

    newExercise() {
        this.submitted = false;
        this.exercise = {};
    }
}
})
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
