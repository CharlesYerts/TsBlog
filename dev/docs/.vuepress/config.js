module.exports={
    title:"Yerts's Tech Blog",
    description: "Wellcome to Yerts's Tech Blog",
    base:'/TsBlog/',
    themeConfig: {
    sidebar: [
      {
          title:'Webpack Learning',
          path:'/Webpack Learning/',
          children:[
              '/Webpack Learning/1.developmentENV.md',
              '/Webpack Learning/2.productionENV.md',
              '/Webpack Learning/3.performance.md',
              '/Webpack Learning/4.codeSplit.md',
              '/Webpack Learning/5.moreDetails.md'
          ]
      }
    ]
  }
}