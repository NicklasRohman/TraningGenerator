import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/exercises",
      name: "exercises",
      component: () => import("../components/ExerciseList")
    },
    {
      path: "/exercises/:id",
      name: "exercise-details",
      component: () => import("../components/Exercise")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddExercise")
    },
    {
      path: "/randomExercise",
      name: "randomExercise",
      component: () => import("../components/RandomExercise")
    },
    {
        path: "/",
        alias: "/category",
        name: "category",
        component: () => import("../components/CategoryList")
    },
    {
        path: "/addCategory",
        name: "addCategory",
        component: () => import("../components/AddCategory")
    }

  ]
});