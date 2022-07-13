// 画面サイズをwidth heightに格納する
const app = Vue.createApp({
    data() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,

            images: [
                {
                    src: './img/garden1.jpg',
                    title: '1枚目',
                },
                {
                    src: './img/garden2.jpg',
                    title: '2枚目',
                },
                {
                    src: './img/garden3.jpg',
                    title: '3枚目',
                },
                {
                    src: './img/garden4.jpg',
                    title: '4枚目',
                },
                {
                    src: './img/admin1.jpg',
                    title: '5枚目',
                },
            ],

            // shopifyの機能一覧
            panels: [
                {
                    img: './img/cart.svg',
                    label: 'カート機能',
                },
                {
                    img: './img/box.svg',
                    label: '商品管理',
                },
                {
                    img: './img/graph.svg',
                    label: '売上管理',
                },
                {
                    img: './img/SNS.svg',
                    label: '顧客管理',
                },
                {
                    img: './img/license.svg',
                    label: 'カート機能',
                },
                {
                    img: './img/SEO.svg',
                    label: 'マーケティング',
                },
                {
                    img: './img/layout.svg',
                    label: 'デザイン',
                },
                {
                    img: './img/html.svg',
                    label: 'カスタマイズ',
                },
                {
                    img: './img/longtale.svg',
                    label: '商品分析',
                },
                {
                    img: './img/loupe.svg',
                    label: 'サイト分析',
                },
                {
                    img: './img/net.svg',
                    label: 'スマホで運営',
                },
                {
                    img: './img/earth.svg',
                    label: '海外展開',
                },
            ],

            // PC・スマホ両方に表示させる制作実績
            // 表示する店舗を増やしたい場合は別の配列にしてそれをPCのみに表示させる
            works1: [
                {
                    img: './img/kv.jpg',
                    name: '店名1',
                },
                {
                    img: './img/kv.jpg',
                    name: '店名1',
                },
                {
                    img: './img/kv.jpg',
                    name: '店名1',
                },
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
    template: `<!-- modal start -->
                    <div id="overlay" v-show="showModal"  v-on:click="closeModal">
                        <div class="modal-img">
                            <img :src="imgList[modalImg].src">
                            <p class="gothic">{{ imgList[modalImg].title }}</p>
                        </div>
                    </div>
                    <!-- modal end -->
                    <div class="carousel">
                        <!-- 戻る -->
                        <div class="btn_left">
                            <button type="button" class="button button-clear" @click="prev">
                                <i class="fas fa-angle-left"></i>
                            </button>
                        </div>
                        <!-- 画像エリア -->
                        <div class="slider">
                            <div v-for="number in [displayImg]" :key="number">
                                <img :src="imgList[number].src" @click="openModal(number)">
                                <p class="gothic">{{ imgList[number].title }}</p>
                            </div>
                        </div>
                        <div class="btn_right">
                            <button type="button" class="button button_clear" @click="next">
                                <i class="fas fa-angle-right"></i>
                            </button>
                        </div>
                    </div>`,
    props: {
        imgList: Array,
    },

    data() {
        return {
            timerId: undefined,
            displayImg: 0,
            style: '',
            showModal: false,
            modalImg: 0,
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

        // モーダルの表示を切り替える
        openModal: function (number) {
            this.showModal = true;
            this.modalImg = number;
            console.log(this.imgList[this.modalImg]);
        },
        closeModal: function () {
            this.showModal = false;
        }
    }
})

app.mount('#app')