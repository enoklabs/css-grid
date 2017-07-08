<style lang="scss">

  .nav {
    list-style-type: none;
    padding: 0;

    li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    a {
      color: white;
      font-weight: bold;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

</style>




<template>

    <div id="MainNav">

        <header>
            <div class="cssgrid">
                <img src="src/assets/cssgrid.svg" alt="cssgrid">
            </div>

            <ul class="nav">
                <li><a href="#/grid1">Grid 1</a></li>
                <li><a href="#/grid2">Grid 2</a></li>
                <li><a href="#/grid3">Grid 3</a></li>
                <li><a href="#/grid4">Grid 4</a></li>
            </ul>

        </header>

    </div>

</template>




<script>

</script>
