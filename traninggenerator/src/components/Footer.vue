<template>
  <div>
    <footer class="container-fluid text-center">
      <p>Made By Nicklas Rohman last updated {{ updateTime }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateTime: "2021-03-19",
    };
  },
  methods: {},
};
</script>
