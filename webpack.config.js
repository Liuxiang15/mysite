
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        // 源码地图去掉
        devtool: "none",
        plugins: [new BundleAnalyzerPlugin()],
        externals: {
            vue: "Vue", 
            vuex:"Vuex",
            "vue-router": "VueRouter",
            axios:"axios"
        }
    }
} else {
    module.exports = {}
}