<style lang="scss">

    /* Default grid styles */
    .grid--1{
        display: grid;
        grid-gap: 10px;
        div {
            background-color: white;
            padding: 30px;
            word-break: break-all;
        }
    }

    /* For large devices */
    @media only screen and (min-width: 900px) {


        /********** GRID 1 **********/
        .grid--1 {
            grid-template-columns: 1fr 2fr 3fr;
            grid-template-rows: 1fr 2fr 3fr;
        }


    }

</style>





<template>

    <div id="Grid1">

        <h1>{{title}}</h1>

        <div class="container">


            <!-- grid sample 1 -->
            <div class="grid grid--1">
                <div>1 fraction</div>
                <div>2 fraction</div>
                <div>3 fraction</div>

                <div>1 fraction</div>
                <div>2 Fraction</div>
                <div>3 fraction</div>

                <div>1 fraction</div>
                <div>2 Fraction</div>
                <div>3 Fraction</div>
            </div>
            <!-- End grid wrapper -->


        </div>
    </div>

</template>





<script>

    export default {
        data() {
            return {
                title: 'Grid Fractions (fr)'
            }
        }
    }

</script>
