<template>
  <div v-if="currentCategory" class="edit-form">
    <h4>Category</h4>
    <form>
      <div class="form-group">
        <label for="categoryName">Category Name</label>
        <input
          type="text"
          class="form-control"
          id="CategoryName"
          v-model="currentCategory.categoryName"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentCategory.description"
        />
      </div>
      
    </form>

    <button class="badge badge-danger mr-2" @click="deleteCategory">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateCategory">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Category...</p>
  </div>
</template>

<script>
import CategoryDataService from "../services/CategoryDataService";

export default {
  name: "category",
  data() {
    return {
      currentCategory: null,
      message: ''
    };
  },
  methods: {
    getCategory(id) {
      CategoryDataService.get(id)
        .then(response => {
          this.currentCategory = response.data;
          console.log(response.data);
        })
                .catch(e => {
          console.log(e);
        });
    },

    updateCategory() {
      CategoryDataService.update(this.currentCategory.categoryId, this.currentCategory)
        .then(response => {
          console.log(response.data);
          this.message = 'The category was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteCategory() {
      CategoryDataService.delete(this.currentCategory.categoryId)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "category" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getCategory(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>