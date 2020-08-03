<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide carouselSize" data-ride="carousel" >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/feas.png" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="monoName">Nombre</h5>
        <p class="monoDescription">Descripción</p>
        <button type="button" class="btn voteButton">Vote</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/feas.png" alt="Second slide">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="monoName">Nombre</h5>
        <p class="monoDescription">Descripción</p>
        <button type="button" class="btn voteButton">Vote</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/feas.png" alt="Third slide">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="monoName">Nombre</h5>
        <p class="monoDescription">Descripción</p>
        <button type="button" class="btn voteButton">Vote</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon fontIcon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon fontIcon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style>
  .fontIcon{
    height: 100px;
    width: 100px;
    border-radius: 15px;
  }

  .carouselSize{
    width: 1510px;
    margin: auto;
  }

  .monoName{
    font-size: 50px;
    color: black;
  }

  .monoDescription{
    font-size: 30px;
    color: black;
  }

.voteButton{
      background: #B8F2E6;
      display: inline-block;
      color: #252537;
    
      width: 60px;
      height: 50px;
    
      border-radius: 5px;
      
      outline: none;
      border: none;
    
      cursor: pointer;
      text-align: center;
  }
</style>
