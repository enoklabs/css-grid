<style lang="scss">

    .filter-bar {
        height: 60px;
        display: flex;
        align-items: center;
    }

    .buttons,
    .title {
        padding: 0 20px;
        margin: 0;
    }

    .title {
        flex: 5;
        color: white;
        text-align: left;
    }

    .buttons {
        flex: 1;
        text-align: right;
    }

    input {
        width: 170px;
        height: 20px;
        background: linear-gradient(to right, #fff 0%, #fff 100%);
        background-size: 155px 4px;
        background-position: center;
        background-repeat: no-repeat;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            background: #4DB2D6;
            position: relative;
            border-radius: 20px;
            z-index: 3;
        }
    }

    button,
    input {
        -webkit-appearance: none;
        border: none;
    }

    button {
        background: rgba(250, 250, 250, 0.2);
        height: 40px;
        width: 40px;
        border-radius: 50%;
        color: white;
        &:hover {
            background: rgba(250, 250, 250, 0.3);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        }
        &:active {
            background: rgba(250, 250, 250, 0.2);
            box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0);
        }
    }

    .fa::before {
        font-size: 18px;
    }

    .range-slider {
        flex: 1;
        padding: 0 10px;
        height: 20px;
        width: 100px;
    }

    .range-slider-inner {
        display: inline-block;
        position: relative;
        height: 100%;
        width: 100%;
    }

    .range-slider-rail,
    .range-slider-fill {
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        height: 4px;
        border-radius: 2px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .range-slider-rail {
        width: 100%;
        background-color: #e2e2e2;
    }

    .range-slider-fill {
        background-color: #21fb92;
    }

    .range-slider-knob {
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        box-sizing: border-box;
        height: 20px;
        width: 20px;
        border: 1px solid #f5f5f5;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .range-slider-hidden {
        display: none;
    }

    .slider-label {
        width: 100px;
        padding: 0;
        margin: 10px;
        color: white;
        font-weight: bold;
    }

</style>





<template>

    <div id="FilterBar">

        <div class="filter-bar">

            <h2 class="title">{{title}}</h2>

            <span class="slider-label">grid-gap: <b>{{sliderValue}}</b> </span>

            <!-- Range Slider with default settings -->
            <range-slider class="slider" min="0" max="20" step="1" v-model="sliderValue" @input="changeGap">
            </range-slider>

            <div class="buttons">
                <button><i class="fa fa-th"></i></button>
                <button><i class="fa fa-th-list"></i></button>
            </div>

        </div>

    </div>

</template>





<script>

    import RangeSlider from 'vue-range-slider'

    export default {
        props: ['title', 'gap'],
        data: function() {
            return {
                sliderValue: 5
            }
        },
        components: {
            RangeSlider
        },
        methods: {
            changeGap() {

                // Find the '--grid-gap' css variable and update it to sliderValue
                document.documentElement.style.setProperty('--grid-gap', this.sliderValue + 'px');
            }
        }
    }

</script>
