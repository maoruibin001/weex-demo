<template>
    <div ref="r3">
        <!--<text>hello</text>-->
        <text  @click="copy">{{msg}}</text>
        <text @click="getClip()">getClip</text>
    </div>
</template>

<script>
    const clipboard = weex.requireModule('clipboard');
    export default {
        data() {
            return {
                msg: 'hello world , i love you'
            }
        },
        methods: {
            copy() {

                console.log(this.$refs.r3)
                clipboard.setString(this.msg);
            },
            getClip() {
                clipboard.getString(function(ret) {
                    alert(ret.data);
                    alert(ret.result);
                })
            }
        }
    }
</script>