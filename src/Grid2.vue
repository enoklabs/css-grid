<style lang="scss">

    .wrapper {
        display: grid;
        grid-gap: 10px;
        div {
            background-color: white;
            padding: 10px;
            word-break: break-all;
        }
    }

    /* For medium devices */
    @media only screen and (min-width: 500px) {
        .grid--2 {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }
    }


    /* For large devices */
    @media only screen and (min-width: 900px) {



        /********** grid sample 2 **********/
        .grid--2 {
            grid-template-columns: repeat(16, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }


    }

</style>





<template>
    <div id="Grid2">

        <h1>{{title}}</h1>

        <div class="container">

            <!-- grid sample 2 -->
            <div class="grid wrapper grid--2">
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>

                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>

                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>

                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
                <div>1 fr</div>
            </div> <!-- End grid wrapper -->

        </div>

    </div>
</template>





<script>

    export default {
        data() {
            return {
                title: 'Grid Number 2'
            }
        }
    }

</script>
