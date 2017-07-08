<template>
  <div id="FilterBar">

    <div class="filter-bar">

      <div class="range-slider">
        <input type="range" value="0" min="0" max="500">
        <span>0</span>
      </div>

      <div class="buttons">
        <button><i class="fa fa-th"></i></button>
        <button><i class="fa fa-th-list"></i></button>
      </div>

    </div>

  </div>
</template>


<script>
  export default {}
</script>



<style lang="scss">

  .filter-bar {
    height: 60px;
    display: flex;
    align-items: center;
  }

  .range-slider,
  .buttons {
    padding: 0 20px;
  }

  .range-slider {
    flex: 1;
    text-align: left;
  }
  .buttons {
    flex: 4;
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

  button, input {
      -webkit-appearance: none;
      border: none;
  }

  button {
    background: rgba(250,250,250, 0.2);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    &:hover {
      background: rgba(250,250,250, 0.3);
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    &:active {
      background: rgba(250,250,250, 0.2);
      box-shadow: 0 0 0 rgba(0,0,0,0), 0 0 0 rgba(0,0,0,0);
    }
  }

  .fa::before {
    font-size: 18px;
  }

</style>
