<template>
    <div>
        <text @click="setStorage('name', 'maoruibin')">setStorage</text>
        <text @click="getStorage('name')">getStorage</text>

        <text @click="getAllKeys()">getAllKeys</text>

        <text @click="removeItem('name')">removeItem</text>
    </div>
</template>

<script>
    const storage = weex.requireModule('storage');
    const modal = weex.requireModule('modal');
    export default {
        data() {
            return {
                active: false
            }
        },
        methods: {
            removeItem(key) {
                if (!this.active) {
                    this.active = true;
                    setTimeout(() => {
                        this.active = false;
                    }, 3000)
                    storage.removeItem(key, ret => {
                        if (ret.result === 'success') {
                            modal.toast({
                                message: 'remove ' + key + ' success',
                                duration: 3
                            });
                        } else {
                            modal.toast({
                                message: 'remove ' + key + ' fail',
                                duration: 3
                            })
                        }
                    })
                }
            },
            getAllKeys() {
                if (!this.active) {
                    this.active = true;
                    setTimeout(() => {
                        this.active = false;
                    }, 3000);
                    storage.getAllKeys(ret => {
                        if (ret.result === 'success') {
                            modal.toast({
                                message: ret.data,
                                duration: 3
                            });
                        } else {
                            modal.toast({
                                message: 'remove ' + ret.data + ' fail',
                                duration: 3
                            })
                        }
                    })
                }
            },
            getStorage(key) {
                if (!this.active) {
                    this.active = true;
                    setTimeout(() => {
                        this.active = false;
                    }, 3000)
                    storage.getItem(key, ret => {
                        if (ret.result === 'success') {
                            modal.toast({
                                message: 'success ' + ret.data,
                                duration: 3
                            });
                        } else {
                            modal.toast({
                                message: 'error ' + ret.data,
                                duration: 3
                            });
                        }
                    });
                }

            },
            setStorage(key, value) {
                if (!this.active) {
                    this.active = true;
                    setTimeout(() => {
                        this.active = false;
                    }, 3000)
                    storage.setItem(key, value, ret => {
                        if (ret.result === 'success') {
                            modal.toast({
                                message: 'success',
                                duration: 2
                            });
                        } else {
                            modal.toast({
                                message: 'error ' + ret.data,
                                duration: 2
                            });
                        }
                    });
                }
            }
        }
    }
</script>

<style>

</style>