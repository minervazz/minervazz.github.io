# 字体文件说明

请将你的字体文件放在这个目录下，支持以下格式：
- `.woff2` (推荐，体积最小)
- `.woff`
- `.ttf`
- `.otf`

## 使用方式

1. 将字体文件重命名为：
   - `font-regular.woff2` (常规字体)
   - `font-bold.woff2` (粗体)
   - `font-light.woff2` (细体)

2. 或者修改 `assets/styles.css` 中的字体路径来匹配你的文件名

## 示例字体文件

你可以从以下网站下载免费字体：
- Google Fonts: https://fonts.google.com/
- 思源字体: https://github.com/adobe-fonts/source-han-sans
- 站酷字体: https://www.zcool.com.cn/special/zcoolfonts/

## 当前配置

网站已配置为使用本地字体文件，如果字体文件不存在，会自动回退到系统字体。
