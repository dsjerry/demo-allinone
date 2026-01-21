import * as esbuild from "esbuild";

(async () => {
    try {
        const result = await esbuild.build({
            entryPoints: ["index.js"],
            outdir: "dist",
            bundle: true,
            minify: true,
            sourcemap: true,
            target: "es2017",
            format: "esm",
            platform: "node",
            metafile: true,
        });
    
        // 要使用 result.metafile 需要上面配置为 true
        const text = await esbuild.analyzeMetafile(result.metafile);
        console.log('build success: ', text);
    } catch (error) {
        console.error('build failed: ', error);
    }
})();