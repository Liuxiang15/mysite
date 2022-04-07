import eventBus from "@/eventBus"
import { debounce } from "../utils"
import defaultGif from "@/assets/default.gif";


let imgs = [];

/**
 * 设置单个图片
 */
function setImage (img) { 
    img.dom.src = defaultGif; // 先暂时使用着默认图片
    // 处理图片
    // 该图片是否在视口范围内

    const clientHeight = document.documentElement.clientHeight;// 获取视口高度
    const rect = img.dom.getBoundingClientRect()
    const height = rect.height || 150
    if (rect.top >= -height && rect.top <= clientHeight) { 
        // 在视口范围内
        // 完整版
        // const tempImg = new Image()
        // tempImg.onload = function () {
        //     // 这里有缓存，所以不用tempImage.src
        //     img.dom.src = img.src
        // }
        // tempImg.src = img.src

        // 简单版
        // chrome浏览器会有自动先显示默认图的效果，新图加载完再替换
        img.dom.src = img.src;
        imgs = imgs.filter((i) => i !== img);
    }

    
}

function setImages () { 
    for (const img of imgs) {
        // 处理该图片
        setImage(img);
    }
}
function handleScroll () { 
    setImages()
}

// 滚动的时候设置
eventBus.$on('mainScroll', debounce(handleScroll, 50))


// 指令维护的是哪些img需要处理
export default {
    // 加入到父元素时可以获取矩形
    inserted (el, bindings) { 
        const img = {
            dom: el, 
            src: bindings.value
        }
        imgs.push(img)
        // 立即处理
        setImages()
    },
    // 删除不需要加载的img
    unbind (el) { 
        imgs = imgs.filter(img => img.dom !== el)
    }

}