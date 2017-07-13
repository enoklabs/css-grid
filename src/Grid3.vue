<style lang="scss">

    .wrapper--3 {
        display: grid;
        grid-gap: 10px;
        div {
            background-color: white;
            padding: 50px;
            word-break: break-all;
            text-align: left;
        }
    }

    .cell-1 {
      grid-column: 1 / 2;
      grid-row: 1 / 5;
    }
    .cell-2 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    .cell-3 {
      grid-column: 2 / 3;
      grid-row: 2 / 5;
    }


</style>





<template>
    <div id="Grid3">

        <h1>{{title}}</h1>

        <div class="container">


            <!-- grid sample 2 -->
            <div class="grid wrapper--3">
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
                title: 'Grid Number 3'
            }
        }
    }

</script>
