const path = require("path");

module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        const oneOfsMap = config.module.rule("scss").oneOfs.store;
        oneOfsMap.forEach(item => {
            item.use("sass-resources-loader")
                .loader("sass-resources-loader")
                .options({
                    resources: [
                        path.resolve(__dirname, "./src/assets/style/_var.scss"),
                        path.resolve(
                            __dirname,
                            "./src/assets/style/_mixins.scss"
                        )
                    ]
                })
                .end();
        });
    },
    devServer: {
        proxy: {
            "/mock": {
                target: "https://www.easy-mock.com",
                changeOrigin: true,
                secure: false,
                pathRewrite: url =>
                    url.replace("/mock", "/mock/5f61002797c6bf17e3acbffd")
            }
        }
    }
};
