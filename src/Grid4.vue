<style lang="scss">

    .wrapper--4 {
        div {
            background-color: white;
            padding: 50px;
            word-break: break-all;
            text-align: left;
        }

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
    <div id="Grid4">

        <h1>{{title}}</h1>

        <div class="container">


            <!-- grid sample 3 -->
            <div class="grid wrapper--4">
                <div class="cell-1">
                    <pre>
                        .cell-1 {
                          grid-column: 1 / 2;
                          grid-row: 1 / 3;
                        }
                    </pre>
                </div>
                <div class="cell-2">cell .cell-2</div>
                <div class="cell-3">cell .cell-3</div>
            </div>


        </div>

    </div>
</template>





<script>

    export default {
        data() {
            return {
                title: 'Grid Number 4'
            }
        }
    }

</script>
