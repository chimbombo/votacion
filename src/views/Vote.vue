<!--
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
-->

<template>
    <b-carousel-list v-model="test" :data="items" :items-to-show="3">
        <template slot="item" slot-scope="list">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-5by4">
                        <a @click="info(list.index)"><img :src="list.image"></a>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p class="title is-6">{{ list.title }}</p>
                        <p class="subtitle is-7">@johnsmith</p>
                        <div class="field is-grouped" >
                            <p class="control" v-if="list.rating">
                                <b-rate :value="list.rating" show-score disabled/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </b-carousel-list>
</template>

<script>
export default {
    data() {
        return {
            test: 0,
            items: [
                {
                    title: 'Slide 1',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                    rating: 4.4
                },
                {
                    title: 'Slide 2',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                    rating: 3.5
                },
                {
                    title: 'Slide 3',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                    rating: 5
                },
                {
                    title: 'Slide 4',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png'
                },
                {
                    title: 'Slide 5',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                    rating: 5
                },
                {
                    title: 'Slide 6',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                    rating: 4
                },
                {
                    title: 'Slide 7',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                    rating: 2.7
                },
                {
                    title: 'Slide 8',
                    image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                    rating: 1.5
                }
            ]
        }
    },
    methods: {
        info(value) {
            this.test = value
        }
    }
}
</script>