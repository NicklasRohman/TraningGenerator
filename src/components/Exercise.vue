<template>
  <div v-if="currentExercise" class="edit-form">
    <h4>Exercise</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentExercise.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentExercise.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentExercise.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentExercise.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteExercise"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateExercise"
    >
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

    updatePublished(status) {
      var data = {
        id: this.currentExercise.id,
        title: this.currentExercise.title,
        description: this.currentExercise.description,
        published: status
      };

      ExerciseDataService.update(this.currentExercise.id, data)
        .then(response => {
          this.currentExercise.published = status;
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