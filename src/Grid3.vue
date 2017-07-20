<style lang="scss">
    @import './assets/prism.css';

    .wrapper--3 > div {
        background-color: white;
        text-align: left;
        display: flex;
        align-items: center;
    }


    .wrapper--3 {
        display: grid;
        grid-gap: 10px;

        // define the grid template: 2 columns, 3 rows
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }

    .cell-1 {
      grid-column: 1 / 2;
      grid-row: 1 / 4;
    }
    .cell-2 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    .cell-3 {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
    }

</style>





<template>
    <div id="Grid3">

        <h1>{{title}}</h1>

        <div class="container">


            <!-- grid sample 3 -->
            <div class="grid wrapper--3">
                <div class="cell-1">
                    <pre><code class="language-css">
                        .cell-1 {
                          grid-column: 1 / 2;
                          grid-row: 1 / 3;
                        }</code></pre>
                </div>

                <div class="cell-2">
                    <pre><code class="language-css">
                      .cell-2 {
                        grid-column: 2 / 3;
                        grid-row: 1 / 2;
                      }</code></pre>
                </div>

                <div class="cell-3">
                    <pre><code class="language-css">
                      .cell-3 {
                        grid-column: 2 / 3;
                        grid-row: 2 / 4;
                      }</code></pre>
                </div>
            </div>


        </div>

    </div>
</template>





<script>

    export default {
        data() {
            return {
                title: 'Grid Number 3'
            }
        }
    }

</script>
