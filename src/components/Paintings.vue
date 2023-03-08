
<template>
<!-- This is the pop up  -->
 <!-- <b-modal id="myModal"> -->
    <!-- Hello {{selectedUser.first_name}} {{selectedUser.last_name}} ! -->
  <!-- </b-modal> -->
  <div>
    <b-modal id="paintingsPopUp" v-if="selectedPainting">
      {{selectedPainting.name}}
      <img :src="selectedPainting.src"/>
    </b-modal>    
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h1>{{ titleMap[size] }}</h1>
        </div>
        <div class="col-8">
          <div
            class="painting"
            :key="painting.src"
            v-for="painting in paintingsBySize[size]"
          >
          <!-- V-B-Modal Added this for the pop up modal -->
            <!-- <img :src="painting.src" v-b-modal="'paintingsPopUp'" @click="showPaintingPopUp(painting.src)" /> <br /> -->
            <img :src="painting.src" v-b-modal="'paintingsPopUp'" @click="showPaintingPopUp(painting)" /> <br />
            {{ painting.name }}
            <br />
             <!-- put $ inbetween the !painting.isSold> and the --right here-- {{  -->
            <span v-if="!painting.isSold"> {{ painting.price }} </span>
            <span v-if="painting.isSold">
              SOLD
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paintings",
  data: function() {
    return {
      selectedPainting: null,
      titleMap: {
        SixteenByTwenty: "16x20",
        TwentyByTwentyFour: "20x20",
        ThirtyByThirty: "30x30",
        ThreeByThree: "3x3",
        FourByThree: "4x3",
      },
      paintingsBySize: {
        SixteenByTwenty: [
          {
            src: "../assets/backatthecoloringbookagain.jpg",
            name: "Back At The Coloring Book Again",
          },
          {
            src: "../assets/coldandhot.jpg",
            name: "Cold and Hot",
          },
          {
            src: "../assets/steeringatthesun.jpg",
            name: "Steering At The Sun",
          },
          {
            src: "../assets/cubsandwhitesoxgetalong.jpg",
            name: "Cubs and White Sox Get Along",
          },
          {
            src: "../assets/warminthesouthernhemisphere.jpg",
            name: "Warm In The Southern Hemisphere",
          },
          {
            src: "../assets/hieroglyphics.jpg",
            name: "Hieroglyphics",
          },
          {
            src: "../assets/sunlightinthecavern.jpg",
            name: "Sunlight In The Cavern",
          },
          {
            src: "../assets/northernsky.jpg",
            name: "Northern Sky",
          },
          {
            src: "../assets/warmgrass.jpg",
            name: "Warm Grass",
          },
          {
            src: "../assets/walkingtowardthebeach.jpg",
            name: "Walking Toward The Beach",
          },
          {
            src: "../assets/movequickly.jpg",
            name: "Move Quickly",
          },
          {
            src: "../assets/tropicalbreeze.jpg",
            name: "Tropical Breeze",
          },
          {
            src: "../assets/undertheseahowisee.jpg",
            name: "Under The Sea How I See",
            isSold: true,
          },
          {
            src: "../assets/easylistening.jpg",
            name: "Easy Listening",
            
          },
          {
            src: "../assets/quickdip.jpg",
            name: "Quick Dip",
            
          },
          {
            src: "../assets/galacticstarsunite.jpg",
            name: "Galactic Stars Unite",
            
          },
          {
            src: "../assets/lavenderfields.jpg",
            name: "Lavender Fields",
            
          },
          {
            src: "../assets/coloringbook.jpg",
            name: "Coloring Book",
            
          },
          {
            src: "../assets/mrsaturdaynightoutonthetown.jpg",
            name: "Mr. Sat Night Out On Thet Town",
            
          },
          {
            src: "../assets/freshoutoftheoven.jpg",
            name: "Fresh Out Of The Oven",
            
          },
          {
            src: "../assets/everycolorispossible.jpg",
            name: "Every Color Is Possible",
            
          },
          {
            src: "../assets/justpassingthrough.jpg",
            name: "Just Passing Through",
            
          },
          {
            src: "../assets/blueberryyogurt.jpg",
            name: "Blueberry Yogurt",
            
          },
        ],
        TwentyByTwentyFour: [
          {
            src: "../assets/itscalledwillamettedamnit.jpg",
            name: "Its Called Willamette Damnit",
            
          },
          {
            src: "../assets/coolbreeze.jpg",
            name: "Cool Breeze.jpg",
            
          },
          {
            src: "../assets/sunriseinparadise.jpg",
            name: "Sunrise In Paradise.jpg",
            
          },
          {
            src: "../assets/thecoffeebean.jpg",
            name: "the Coffee Bean",
            isSold: true,

          },
          {
            src: "../assets/campfireauroraborialis.jpg",
            name: "Camp Fire Auroaborialis",
            
          },
          {
            src: "../assets/splat.jpg",
            name: "Splat",
            
          },
        ],
        ThirtyByThirty: [
          {
            src: "/assets/fancytoseeyouhere.jpg",
            name: "Fancy To See You Here",
            
          },
          {
            src: "/assets/globalmap.jpg",
            name: "Global Map",
            isSold: true,
          },
          {
            src: "/assets/evolution.jpg",
            name: "Evolution",
            
          },
          {
            src: "/assets/birthdayface.jpg",
            name: "Birthday Face",
            
          },
        ],
        ThreeByThree: [
          {
            src: "/assets/lookingdownontolavenderfields.jpg",
            name: "Looking Down On to Lavender Fields",
                      },
        ],
        FourByThree: [
          {
            src: "/assets/autumn.png",
            name: "Autumn",
            
          },
        ],
      },
    };
  },
  props: {
    size: String,
  },
  methods: {
    // This is setting the scr for the modal
    showPaintingPopUp(painting) {
      this.selectedPainting = painting
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: 80px;
}
img {
  max-height: 480px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly
}
.main-pic-modal {
  width: 100%;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.painting {
  margin: 2rem;
  padding: 2rem;
  /* border: 1px solid #ddd; */
  border-radius: 20px;
}
.modal{
  background-color: blueviolet;
}

</style>
