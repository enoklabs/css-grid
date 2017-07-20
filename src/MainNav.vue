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

        <header class="header">
            <div class="cssgrid">
                <img src="src/assets/cssgrid.svg" alt="cssgrid">
            </div>

            <ul class="nav">
                <li><a href="#/grid1">Fractions</a></li>
                <li><a href="#/grid2">Repeat Function</a></li>
                <li><a href="#/grid3">Grid Template</a></li>
                <li><a href="#/grid4">Grid Area</a></li>
                <li><a href="#/grid5">Grid Gap</a></li>
            </ul>

        </header>

    </div>

</template>
