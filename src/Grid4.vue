<style lang="scss">

    :root {
      --grid-gap: 10px;
    }
    .grid {
        display: grid;
        grid-gap: var(--grid-gap);
        div {
            background-color: white;
            padding: 10px;
            word-break: break-all;
        }
    }

    /* For medium devices */
    @media only screen and (min-width: 500px) {
        .grid--2 {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: 50px;
        }
    }

    /* For large devices */
    @media only screen and (min-width: 900px) {
        .grid--1 {
            grid-template-columns: 1fr 3fr 1fr;
        }
        .grid--2 {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 100px;
        }
        .fullwidth div {
            grid-column-start: 2;
            grid-column-end: -2;
        }
    }

</style>





<template>

    <div id="Grid4">

        <h1>{{title}}</h1>
        <filter-bar :title="title" ></filter-bar>


        <div class="container">

            <div class="grid grid--1">
                <div>Side Left</div>
                <div>
                    <h4>Main Content</h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sapiente harum eligendi porro sequi corrupti, repellat, quisquam, ipsam delectus ipsa mollitia, commodi voluptates quod dolor quos recusandae molestias quae aperiam!</div>
                <div> Side Right</div>
            </div>

            <div class="grid grid--2">
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
                <div>1 fraction</div>
            </div>
        </div>

    </div>

</template>





<script>

    export default {
        data() {
            return {
                title: 'Grid 4'
            }
        }
    }

</script>
