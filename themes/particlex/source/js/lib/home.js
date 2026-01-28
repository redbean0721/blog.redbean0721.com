mixins.home = {
    mounted() {
        let homeBackgroundRef = this.$refs.homeBackground;
        if (homeBackgroundRef) {  // 檢查元素是否存在
            let homeBgImgURLs = homeBackgroundRef.dataset.images.split(",").filter(url => url.trim());
            if (homeBgImgURLs.length > 0) {  // 檢查是否有有效的 URL
                homeBackgroundRef.style.backgroundImage = `url('${
                homeBgImgURLs[Math.floor(Math.random() * homeBgImgURLs.length)]
                }')`;
            }
        }

        // let homeBgImgURLs = homeBackgroundRef.dataset.images.split(",");
        // homeBackgroundRef.style.backgroundImage = `url('${
        //   homeBgImgURLs[Math.floor(Math.random() * homeBgImgURLs.length)]
        // }')`;
        this.menuColor = true;

        let contentBackgroundRef = this.$refs.contentBackground;
        let contentBgImgURLs = contentBackgroundRef.dataset.images.split(",");
        contentBackgroundRef.style.backgroundImage = `url('${
          contentBgImgURLs[Math.floor(Math.random() * contentBgImgURLs.length)]
        }')`;
    },
    methods: {
        homeClick() {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        },
    },
};
