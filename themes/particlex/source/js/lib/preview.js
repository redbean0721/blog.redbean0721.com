mixins.preview = {
    data() {
        return { previewShow: false };
    },
    created() {
        this.renderers.push(this.preview);
    },
    methods: {
        preview() {
            let preview = this.$refs.preview,
                content = this.$refs.previewContent;
            let images = document.querySelectorAll("img");
            
            const fallbackCount = 9;
            
            for (let i of images) {
                // 圖片載入失敗時替換為備用圖片
                i.addEventListener("error", () => {
                    const randomNum = Math.floor(Math.random() * fallbackCount) + 1;
                    i.src = '/images/placeholder/' + 'fallback-' + randomNum + '.jpg';
                    i.onerror = null; // 防止無限迴圈
                });
                
                // 點擊預覽
                i.addEventListener("click", () => {
                    content.alt = i.alt;
                    content.src = i.src;
                    this.previewShow = true;
                });
            }
            
            preview.addEventListener("click", () => {
                this.previewShow = false;
            });
            window.addEventListener("resize", () => {
                this.previewShow = false;
            });
        },
    },
};
