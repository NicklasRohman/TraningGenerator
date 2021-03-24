<template>
  <div class="container-fluid">
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="exercise.title"
            name="title"
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
            title: "",
            description: "",
            published: false
        },
        submitted: false
    };
}, methods: {
    saveExercise() {
        var data = {
            title: this.exercise.title,
            description: this.exercise.description
        };

        ExerciseDataService.create(data).then(response => {
            this.exercise.id = response.data.id;
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
