<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>Id:</th>
            <th>Name:</th>
            <th>Difficult Level:</th>
            <th>Estimated Time</th>
            <th>Action:</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in exerciese" v-bind:key="index" v-on:click="readTableRow(value)">
            <td>{{value.exerciseId}}</td>
            <td>{{value.exerciseName}}</td>
            <td>{{value.difficultLevel}}</td>
            <td>{{value.estimatedTime}}</td>
            <td>
              <button
                type="button"
                class="btn btn-primary btn-round btn sm"
                data-toggle="modal"
                data-target="#exerciseModal"
                @click="readTableRow(value)"
              >
                <span class="glyphicon glyphicon-wrench">
                  edit
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit Modal -->
    <div
      ref="exerciseModal"
      class="modal fade"
      id="exerciseModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exerciseModalLable"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exerciseModalLable">
              <b>
               {{selectedRow.exerciseName}}
              </b>
            </h3>
          </div>
          <div class="modal-body">
            <p>{{selectedRow.exerciseName}}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dissmiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Layout",
  compunents: {},
  data() {
    return {
      exerciese: null,
      selectedRow: "",
    };
  },
  methods: {
    readTableRow(value) {
      this.selectedRow = value;
    },
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:8080/exercises");
      
      console.log(response.data);

      this.exerciese = response.data;
    } catch (error) {
      if (error) {
        console.log("Server Error: ", error);
      } else if (error.request) {
        console.log("Network Error: ", error);
      } else {
        console.log("Client Error: ", error);
      }
    }
  },
};
</script>

<style scoped>
.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th {
  background-color: skyblue;
}
</style>
