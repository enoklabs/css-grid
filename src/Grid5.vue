<style lang="scss">

    :root {
      --grid-5-gap: 30px;
    }
    .grid-5 {
        display: grid;
        grid-gap: var(--grid-5-gap);  // Dinamically changed in the client-side
        div {
            display: flex;
            background-color: white;
            padding: 10px;
            align-items: center;
            justify-content: center;
        }
    }

    /* For medium devices */
    @media only screen and (min-width: 450px) {
        .grid-5 {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(6, 1fr);
        }
    }

    /* For large devices */
    @media only screen and (min-width: 900px) {
        .grid-5 {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(5, 150px);
        }
    }

    /* toggle fullwidth */
    .fullwidth > div {
        grid-column-start: 2;
        grid-column-end: -2;
    }

</style>





<template>

    <div id="Grid5">

        <filter-bar :title="title" ></filter-bar>


        <div class="container">

            <div id="grid-5" class="grid grid-5">
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

            </div>
        </div>

    </div>

</template>





<script>

    export default {
        data() {
            return {
                title: 'Grid 5',
                fullwidth: false
            }
        }
    }

</script>
