<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineProps, ref } from 'vue';
const props = defineProps({
    monster:{
      type:Object
     },
  })
console.log(monster)

</script>

<template>

<div class="col-4 col-md-2 mb-2 mb-md-5">
                    <div class="card">
                        <img :src="monster.image" alt="" class="card-img-top h-100">
                        <div class="card-body">
                            <h3 class="card-title mbr-section-subtitle mbr-fonts-style"><strong>{{ monster.name }} </strong></h3>
                            <ul class="list mbr-fonts-style display-7">
                                <li>[Drops 1]</li>
                                <li>[Drops 2]</li>
                                <li>[Drops 3]</li>
                            </ul>
                            <div class="mbr-section-btn"><a class="justify-content-center btn btn-primary display-4">
                                VOIR</a></div>
                        </div>
                    </div>
                </div>

</template>

<style scoped>


</style>