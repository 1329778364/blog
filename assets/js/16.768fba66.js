(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{365:function(t,r,e){"use strict";e.r(r);var a=e(25),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"聊聊像素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聊聊像素"}},[t._v("#")]),t._v(" 聊聊像素")]),t._v(" "),e("blockquote",[e("p",[t._v("本文为初学前端时所写，未进行勘误便移植了过来，若有错误请见谅。")])]),t._v(" "),e("p",[t._v("作为一个网页开发者，是绕不开和像素一词打交道的。")]),t._v(" "),e("p",[t._v("哪怕不进行web编程，只要上网，就一定会接触到这个词。无论是图片的分辨率，还是显示器的分辨率，浏览器里的CSS像素， PS里的像素。他们使用的都是同一个词，“像素”，但在概念里，却不尽相同， 因此人们常常会对此感到迷惑。")]),t._v(" "),e("p",[t._v("本文将先介绍图像/位图的构成，进而介绍屏幕的分辨率，最后再是图像在屏幕中的显示问题。尽量做到简单易懂。")]),t._v(" "),e("h3",{attrs:{id:"位图-bitmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#位图-bitmap"}},[t._v("#")]),t._v(" 位图（Bitmap）")]),t._v(" "),e("p",[e("strong",[t._v("位图（Bitmap）")]),t._v("，又称"),e("strong",[t._v("栅格图")]),t._v("（英语："),e("strong",[t._v("Raster graphics")]),t._v("）或"),e("strong",[t._v("点阵图")]),t._v("， 是使用"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%83%8F%E7%B4%A0",target:"_blank",rel:"noopener noreferrer"}},[t._v("像素"),e("OutboundLink")],1),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%99%A3%E5%88%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("阵列"),e("OutboundLink")],1),t._v("(Pixel-array/Dot-matrix"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%82%B9%E9%98%B5",target:"_blank",rel:"noopener noreferrer"}},[t._v("点阵"),e("OutboundLink")],1),t._v(")来表示的图像。与之相对应的图像叫做"),e("strong",[t._v("矢量图")]),t._v("。")]),t._v(" "),e("p",[t._v("位图的每个像素都分配有特定的颜色值，每个像素的颜色信息由RGB组合或者灰度值表示。如果由RGB组合而成，则可以用(0, 0, 0) ~ (255, 255, 255)来进行表示。而想在计算机的硬盘中存储图像的话，针对每个像素，有2的（8 + 8 + 8）次方的可能值颜色，所以占用了硬盘的3个字节（Byte），即24个位（bit）。而这种24位存储的图像，具有的"),e("strong",[t._v("位深度")]),t._v("是24。分辨率和位深度是一张图像最重要的性质。")]),t._v(" "),e("p",[t._v("事实上，根据位深度,可将位图分为1、4、8、16、24及32位图像等。")]),t._v(" "),e("p",[t._v("每个像素使用的信息位数越多，可用的颜色就越多，颜色表现就越逼真，相应的数据量越大。例如，位深度为 1 的像素位图只有两个可能的值（黑色和白色），所以又称为二值位图。位深度为 8 的图像有 2的8次方（即 256）个可能的值。位深度为 8 的灰度模式图像有 256 个可能的灰色值。而32位深度的图像，其实就是在原有的24位基础上加上了Alpha通道。")]),t._v(" "),e("p",[t._v("如果想查看图像的分辨率和位深度，只需要右键图片 -> 属性 -> 详细信息即可。")]),t._v(" "),e("h3",{attrs:{id:"物理像素-设备像素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#物理像素-设备像素"}},[t._v("#")]),t._v(" 物理像素/设备像素")]),t._v(" "),e("p",[t._v("我们再来聊下显示器的屏幕分辨率，屏幕分辨率指的是什么？")]),t._v(" "),e("p",[t._v("定义：屏幕分辨率确定计算机屏幕上显示多少信息的设置，以水平和垂直像素来衡量。")]),t._v(" "),e("p",[t._v("如今比较主流的分辨率大概这几种")]),t._v(" "),e("ul",[e("li",[t._v("720p（1280x720）")]),t._v(" "),e("li",[t._v("1080p（1920x1080）")]),t._v(" "),e("li",[t._v("1440p（2560x1440）")]),t._v(" "),e("li",[t._v("2160p（有3080x2160和4096x2160两种规格），因此一般也叫做4K显示器")])]),t._v(" "),e("p",[t._v("你可以在Windows设置 -> 系统 -> 显示中查看你所使用的分辨率是多少。")]),t._v(" "),e("p",[t._v("拿1080p举例子说，就是显示器横向有1920个像素点，纵向有1080个像素点，因此总像素点是1920x1080个。因此，你看到的图像就是由CPU和显卡向每个像素点中填充颜色（大概如此，具体如何填充我就不晓得了= =）才显现出来的。")]),t._v(" "),e("p",[t._v("我们这里所说的像素，可以称作为"),e("strong",[t._v("物理像素/设备像素")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"逻辑像素-设备独立像素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#逻辑像素-设备独立像素"}},[t._v("#")]),t._v(" 逻辑像素/设备独立像素")]),t._v(" "),e("p",[t._v("简单来说，图像的分辨率就是逻辑像素的一种，除此之外，浏览器中的CSS像素也是一种逻辑像素。")]),t._v(" "),e("h3",{attrs:{id:"设备像素比-devicepixelratio-dpr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设备像素比-devicepixelratio-dpr"}},[t._v("#")]),t._v(" 设备像素比（devicePixelRatio/DPR）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("设备像素比 =  物理像素数量 / 逻辑像素数量 （单位长度里）\n")])])]),e("p",[t._v("或")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("设备像素比 =  单个逻辑像素大小 / 单个物理像素大小 （单个方向）\n")])])]),e("p",[t._v("比如，当DPR等于1时，逻辑像素大小等于物理像素大小。当DPR等于2时，一个逻辑像素长等于两个物理像素，因此面积等于4个物理像素。")]),t._v(" "),e("p",[t._v("DPR可以进行修改，在Photoshop中就是使用放大缩小工具，在浏览器中可以滑动滚轮来改变DPR。")]),t._v(" "),e("p",[t._v("因此， 在PS中不断的放大图片后，DPR相应增加，你就可以看到界限分明的逻辑像素点了。")]),t._v(" "),e("p",[t._v("这也是为什么在retina屏（一般是指ppi（Pixel per inch） > 300的屏幕，此时一般DPR都 > 1）上的移动端项目中出现的1px问题了。如果DPR为2， 那么你设定一根1px的border， 这里的1px是逻辑像素，对应的物理像素是2px了，并不能做到视觉上的"),e("strong",[t._v("最细")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"viewport"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#viewport"}},[t._v("#")]),t._v(" Viewport")]),t._v(" "),e("p",[t._v("网页中的布局，只要知道Viewport是个什么东西就好了。")]),t._v(" "),e("p",[t._v("Viewport指的其实就是可以用来布局的区域的CSS像素大小，因此，Viewport取决于窗口的大小和DPR。因为窗口的大小决定了可布局区域的物理像素数量，而DPR大小则决定于定量物理像素所对应的CSS像素数量。")]),t._v(" "),e("p",[t._v("而手机浏览器的情况就比较特殊了。如果手机浏览器中没有设置meta头，那么默认的Viewport就是980px，通过meta标签可以用来设置Viewport。")]),t._v(" "),e("h3",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%9B%BE",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=v.exports}}]);