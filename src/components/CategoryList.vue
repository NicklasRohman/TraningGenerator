<template>
<div class="container-fluid">
<div class="list row">
  <SearchCategory/>
</div>
  <div class="list row">
    <div class="col-md-6">
      <h4>Categories List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(category, index) in category"
          :key="index"
          @click="setActiveCategory(category, index)"
        >
          {{ category.categoryName }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentCategory">
        <h4>category</h4>
                <div>
          <label><strong>Id:</strong></label> {{ currentCategory.categoryId }}
        </div>
        <div>
          <label><strong>Name:</strong></label> {{ currentCategory.categoryName }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentCategory.description }}
        </div>

        <a class="badge badge-warning"
          :href="'/category/' + currentCategory.categoryId"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a category...</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import categoryDataService from "../services/categoryDataService";
import SearchCategory from "./SearchCategory"

export default {
  name: "category-list",
  components: {
  SearchCategory
  },
  data() {
    return {
      category: [],
      currentCategory: null,
      currentIndex: -1,
      categoryName: ""
    };
  },
  methods: {
    retrieveCategory() {
      categoryDataService.getAll()
        .then(response => {
          this.category = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveCategory();
      this.currentCategory = null;
      this.currentIndex = -1;
    },

    setActiveCategory(category, index) {
      this.currentCategory = category;
      this.currentIndex = index;
    },
    
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
  mounted() {
    this.retrieveCategory();
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