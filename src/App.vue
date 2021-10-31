<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">NicRoh</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/exercises" class="nav-link">Exercises</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Exercises</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/randomExercise" class="nav-link">Generate program</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/category" class="nav-link">Categories</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/addCategory" class="nav-link">Add Category</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>