// 画面サイズをwidth heightに格納する
const app = Vue.createApp({
    data() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,

            images: [
                './img/garden1.jpg',
                './img/garden2.jpg',
                './img/garden3.jpg',
                './img/garden4.jpg',
                './img/admin1.jpg',
            ],


        }
    },
    methods: {
        // ウィンドウサイズをwidth heightに格納するメソッド群
        handleResize: function () {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        },
    },

    mounted: function () {
        window.addEventListener('resize', this.handleResize);
    },

    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize);
    },
})

app.component('carousel', {
    template: `<div class="carousel">
                        <!-- 戻る -->
                        <div class="btn_left">
                            <button type="button" class="button button-clear" @click="prev">
                                <i class="fas fa-angle-left"></i>
                            </button>
                        </div>
                        <!-- 画像エリア -->
                        <div class="slider">
                            <div v-for="number in [displayImg]" :key="number">
                                <img :src="imgList[number]">
                            </div>
                        </div>
                        <div class="btn_right">
                            <button type="button" class="button button_clear" @click="next">
                                <i class="fas fa-angle-right"></i>
                            </button>
                        </div>
                    </div>`,
    props: {
        imgList: Array
    },

    data() {
        return {
            timerId: undefined,
            displayImg: 0,
            style: '',
        }
    },

    methods: {
        next: function () {
            if (this.displayImg >= this.imgList.length - 1) {
                this.displayImg = 0;
            } else {
                this.displayImg++;
            }
            this.style = "slide-right"
        },

        prev: function () {
            if (this.displayImg == 0) {
                this.displayImg = this.imgList.length - 1;
            } else {
                this.displayImg--;
            }
            this.style = "slide-left"
        },
    }
})

app.mount('#app')