<template>
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by category name"
          v-model="categoryName"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchCategoryName()"
          >
            Search
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import categoryDataService from "../services/categoryDataService";

export default {
  name: "search-category",
  data() {
    return {
      category: [],
      currentCategory: null,
      currentIndex: -1,
      categoryName: ""
    };
  },
  methods: {

    searchCategoryName() {
      categoryDataService.findByCategoryName(this.categoryName)
        .then(response => {
          this.category = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
  