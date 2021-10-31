<template>
  <div class="container-fluid">
    <div class="submit-form">
      <div v-if="!submitted">

        <div class="form-group">
          <label for="categoryName">Category Name</label>
          <input
            type="text"
            class="form-control"
            id="categoryName"
            required
            v-model="category.categoryName"
            name="categoryName"
            placeholder="Enter category name"
            minlength="3"
          />
        </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="category.description"
          name="description"
          maxlength="500"
          placeholder="Max 500 characters"
        />
      </div>

      <button type="button" class="btn btn-info" @click="saveCategory">Submit</button>
    </div>

    <div v-else>
      <h4>You Submitted Successfully</h4>
      <button type="button" class="btn btn-success" @click="newCategory">Ok</button>
    </div>
  </div>
  </div>
</template>

<script>
import CategoryDataService from "../services/CategoryDataService"

export default ({
name: "add-category",
data() {
    return {
        category: {
            categoryName: null,
            description: "",
            difficultLevel: 1,
            videoPath:"",
            estimatedTime: 1
        },
        submitted: false
    };
}, methods: {
    saveCategory() {
        var data = {
            categoryName: this.category.categoryName,
            difficultLevel: this.category.difficultLevel,
            description: this.category.description,
            videoPath: this.category.videoPath,
            estimatedTime: this.category.estimatedTime
        };

        CategoryDataService.create(data).then(response => {
            this.category.categoryName = response.data.categoryName;
            console.log(response.data);
            this.submitted = true;
        })
        .catch(e => {
            console.log(e);
        });
    },

    newCategory() {
        this.submitted = false;
        this.category = {};
    },
}
})
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}

</style>
