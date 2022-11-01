<script>
    import {ref} from 'vue'
    const applyFilter = ref(false)
</script>

<template>
    <h4> Company Makes </h4>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineBMW" value = "BMW" v-model="applyFilter"> 
        <label class="form-check-label" for="inlineBMW">BMW</label>
    </div>
    
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineToyota" value = "Toyota" v-model="applyFilter"> 
        <label class="form-check-label" for="inlineToyota">Toyota</label>
    </div>

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineChevrolet" value = "Chevrolet" v-model="applyFilter"> 
        <label class="form-check-label" for="inlineChevrolet">Chevrolet</label>
    </div>

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineFord" value = "Ford" v-model="applyFilter"> 
        <label class="form-check-label" for="inlineFord">Ford</label>
    </div>

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineAudi" value = "Audi" v-model="applyFilter"> 
        <label class="form-check-label" for="inlineAudi">Audi</label>
    </div>

    <h4> Release Year </h4>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inline2011" value = "2011" v-model="applyFilter"> 
        <label class="form-check-label" for="inline2011">2011</label>
    </div>

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inline2012" value = "2012" v-model="applyFilter"> 
        <label class="form-check-label" for="inline2012">2012</label>
    </div>

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inline2013" value = "2013" v-model="applyFilter"> 
        <label class="form-check-label" for="inline2013">2013</label>
    </div>

    <h4> Fuel Type </h4>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineDiesel" value = "Diesel" v-model="applyFilter"> 
        <label class="form-check-label" for="inlineDiesel">Diesel</label>
    </div>

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineGasoline" value = "Gasoline" v-model="applyFilter"> 
        <label class="form-check-label" for="inlineGasoline">Gasoline</label>
    </div>

    <h4> Price Range ($) </h4>
    <div class="slider">
        <input type="range" min="0" max="9000" step="500" value="500" oninput="rangeValue.innerText = this.value">
        <p id="rangeValue">100</p>
    </div>


</template>

