<template>
    <div>
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src"></image>
            </div>
            <indicator class="indic"></indicator>
        </slider>
    </div>
</template>

<style scoped>
    .image {
        width: 700px;
        height: 700px;
    }
    .slider {
        /*position: relative;*/
        margin-top: 25px;
        margin-left: 25px;
        width: 700px;
        height: 700px;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
    .frame {
        width: 700px;
        height: 700px;
        position: relative;
    }

    .indic {
        /*position: absolute;*/
        /*bottom: 10px;*/
        /*left: 50%;*/
        item-color: red;
        item-selected-color: blue;
        item-size: 50px;
        /*align-self: center;*/
    }
</style>

<script>
    export default {
        data () {
            return {
                imageList: [
                    { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                ]
            }
        }
    }
</script>