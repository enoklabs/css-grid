<style lang="scss">

    .wrapper--4 {
        header, footer { padding: 40px; }
        main, aside { padding: 150px; }

        display: grid;
        grid-gap: 4px;

        // define the grid template: 2 columns, 3 rows
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        grid-template-areas:
          "header header header header"
          "main main main sidebar"
          "footer footer footer footer";


          header {
            grid-area: header;
            background-color: #B3E5FC;
          }
          main {
            grid-area: main;
            background-color: #F5F5F5;
          }
          aside {
            grid-area: sidebar;
            background-color: #D1C4E9;
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
                <aside>  Sidebar </aside>
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
