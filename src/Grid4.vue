<style lang="scss">

    .wrapper--4 {
        header, footer { padding: 30px; }

        display: grid;
        grid-gap: 4px;

        // define the grid template: 2 columns, 3 rows
        grid-template-columns: 250px 1fr;
        grid-template-rows: 1fr 5fr 1fr;
        grid-template-areas:
          "sidemenu header" //use the grid-area by it's name
          "sidemenu main"
          "sidemenu footer";


        header {
          grid-area: header;  //declare the grid-area name
          background-color: #B3E5FC;
        }
        main {
          grid-area: main;
          background-color: #FFFFFF;
        }
        aside {
          grid-area: sidemenu;
          background-color: #dddddd;
        }
        footer {
          grid-area: footer;
          background-color: #FFF9C4;
        }
    }



</style>





<template>
    <div id="Grid4">

        <h1>{{title}}</h1>

        <div class="container">


            <!-- grid sample 4 -->
            <div class="grid wrapper--4">

                <header> Header  </header>
                <main>   Main    </main>
                <aside>  Side-Menu </aside>
                <footer> Footer  </footer>

            </div>


        </div>

    </div>
</template>





<script>

    export default {
        data() {
            return {
                title: 'Grid Area'
            }
        }
    }

</script>
