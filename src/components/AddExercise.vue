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
            placeholder="Enter Exercise name"
            minlength="3"
          />
        </div>

        <div class="form-group">
        <label for="difficultLevel">Difficult Level</label>
        <input
          type="number"
          class="form-control"
          id="difficultLevel"
          required
          v-model="exercise.difficultLevel"
          name="difficultLevel"
          min="1"
          max="10"
          placeholder="Between 1-10"
        />
      </div>

        <div class="form-group">
        <label for="estimatedTime">Estimated Time</label>
        <input
          type="number"
          class="form-control"
          id="estimatedTime"
          required
          v-model="exercise.estimatedTime"
          name="estimatedTime"
          min="1"
          placeholder="Between 1 and more"
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
          placeholder="Youtube link or something similar"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="exercise.description"
          name="description"
          maxlength="500"
          placeholder="Max 500 characters"
        />
      </div>

      <button type="button" class="btn btn-info" @click="saveExercise">Submit</button>
    </div>

    <div v-else>
      <h4>You Submitted Successfully</h4>
      <button type="button" class="btn btn-success" @click="newExercise">Ok</button>
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
            exerciseName: null,
            description: "",
            difficultLevel: null,
            videoPath:"",
            estimatedTime: null
        },
        submitted: false
    };
}, methods: {
    saveExercise() {
        var data = {
            exerciseName: this.exercise.exerciseName,
            difficultLevel: this.exercise.difficultLevel,
            description: this.exercise.description,
            videoPath: this.exercise.videoPath,
            estimatedTime: this.exercise.estimatedTime
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
