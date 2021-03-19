<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
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
                Exercise.Name
              </b>
            </h3>
          </div>
          <div class="modal-body">
            <p>Exercise.Name</p>
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
      const response = await axios.get("");
      console.log(response);
      this.exerciese = response.data.elements;
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
