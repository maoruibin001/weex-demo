<template>
    <div>
        <text @click="sendMsg()">hello</text>
    </div>
</template>

<script>
    const GlobalEvent = weex.requireModule('globalEvent');
    const modal = weex.requireModule('modal');
    export default {
        mounted() {
            GlobalEvent.addEventListener('hello', data => {
               alert(JSON.stringify(data))
            })
        },
        methods: {
            sendMsg() {
//                modal.alert({
//                    message: 'hello',
//                    okTitle: '确定'
//                }, function(value) {
//                    console.log(value)
//                })

//                modal.confirm({
//                    message: 'hello',
//                    okTitle: '确定',
//                    cancelTitle: '取消'
//                }, function(value) {
//                    console.log(value)
//                })

                modal.prompt({
                    message: 'hello',
                    okTitle: '确定',
                    cancelTitle: '取消'
                }, function(value) {
                    console.log(value)
                })
//                alert(JSON.stringify(document));
//                var evt = new Event('hello')
//                evt.data = { foo: 'bar' }
//                document.dispatchEvent(evt)
            }
        }
    }
</script>