<template>
  <div v-if="currentTag" class="edit-form">
    <h4>Tag</h4>
    <form>
      <div class="form-group">
        <label for="tagName">Tag Name</label>
        <input
          type="text"
          class="form-control"
          id="TagName"
          v-model="currentTag.tagName"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentTag.description"
        />
      </div>
      
    </form>

    <button class="badge badge-danger mr-2" @click="deleteTag">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateTag">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tag...</p>
  </div>
</template>

<script>
import TagDataService from "../services/TagDataService";

export default {
  name: "tag",
  data() {
    return {
      currentTag: null,
      message: ''
    };
  },
  methods: {
    getTag(id) {
      TagDataService.get(id)
        .then(response => {
          this.currentTag = response.data;
          console.log(response.data);
        })
                .catch(e => {
          console.log(e);
        });
    },

    updateTag() {
      TagDataService.update(this.currentTag.tagId, this.currentTag)
        .then(response => {
          console.log(response.data);
          this.message = 'The tag was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTag() {
      TagDataService.delete(this.currentTag.tagId)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "tag" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTag(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>