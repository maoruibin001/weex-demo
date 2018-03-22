<template>
    <div>
        <text>reqeust button:</text>
        <div class="btnBox">
            <text class="btn" @click="getMethod()">get</text>
            <text class="btn" @click="postMethod()">post</text>
            <text class="btn" @click="putMethod()">put</text>
            <text class="btn" @click="deleteMethod()">delete</text>
        </div>
        <text>response result: </text>
        <div class="retBox">
            <text class="content">get content: {{JSON.stringify(getContent)}}</text>
            <text class="content">post content: {{JSON.stringify(postContent)}}}</text>
            <text class="content">put content: {{JSON.stringify(putContent)}}}</text>
            <text class="content">delete content: {{JSON.stringify(deleteContent)}}}</text>
        </div>
    </div>
</template>

<script>
    const stream = weex.requireModule('stream');
    export default {

        data() {
            return {
                getContent: {},
                postContent: {},
                putContent: {},
                deleteContent: {}
            }
        },
        methods: {
            getMethod() {
                stream.fetch({
                    url: 'http://localhost:8089/',
                    type: 'json',
                    method: 'GET'
                }, (ret) => {
                    this.getContent = ret.data;
                })
            },
            postMethod() {
                stream.fetch({
                    url: 'http://localhost:8089/',
                    type: 'json',
                    method: 'post',
                    body: JSON.stringify({
                        name:'maoruibin'
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, (ret) => {
                    this.postContent = ret.data;
                })
            },
            putMethod() {
                stream.fetch({
                    url: 'http://localhost:8089/',
                    type: 'json',
                    method: 'put',
                    body: JSON.stringify({
                        name:'maoruibin'
                    }),
                }, (ret) => {
                    this.putContent = ret.data;
                })
            },
            deleteMethod() {
                stream.fetch({
                    url: 'http://localhost:8089/',
                    type: 'json',
                    method: 'delete',
                    body: 'name=maoruibin',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }, (ret) => {
                    this.deleteContent = ret.data;
                })
            },
        }
    }
</script>


<style scoped>
    .btnBox {
        display: flex;
        flex-direction: row;
    }

    .retBox {
        display: flex;
        flex-direction: column;
    }
    .btn {
        background-color: lightblue;
        color: white;
        margin-right: 20px;
        font-size: 40px;
        padding: .5em;
        border: 1px solid black;
        border-radius: 10px;
    }

    .content {
        font-size: inherit;
        margin-bottom: 10px;
    }
</style>
