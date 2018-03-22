<template>
        <div class="box" ref="box"></div>
</template>

<script>
    const modal = weex.requireModule('modal');
    const animation = weex.requireModule('animation');
    export default {
        mounted() {
            let el = this.$refs.box;

            animation.transition(el, {
                styles: {
                    left: '200px',
                    top: '200px',
                    transformOrigin: 'center',
                    transform: 'rotate(3600deg)',
//                    transform: {
//                        rotateX: 800
//                    },
                },

                delay: 200,
                duration: 300,
            }, function () {
                console.log(22)
            })
        }
    }

</script>

<style>
    .box {
        width: 200px;
        height: 200px;
        position: absolute;
        left: 0;
        top: 0;
        background-color: blue;
    }
</style>