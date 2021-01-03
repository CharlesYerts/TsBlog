module.exports = {
    title: "Yerts's Tech Blog | 特斯的技术博客",
    description: "Wellcome to Yerts's Tech Blog",
    base: '/TsBlog/',
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
        sidebar: [
            {
                title: 'Webpack Learning',
                path: '/Webpack Learning/',
                children: [
                    '/Webpack Learning/1.developmentENV.md',
                    '/Webpack Learning/2.productionENV.md',
                    '/Webpack Learning/3.performance.md',
                    '/Webpack Learning/4.codeSplit.md',
                    '/Webpack Learning/5.moreDetails.md',
                ],
            },
            {
                title: 'Vue-cli Learning',
                path: '/vue-cli Learning/',
                children: ['/vue-cli Learning/main.md'],
            },
        ],
    },
}
