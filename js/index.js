document.addEventListener('DOMContentLoaded', function() {
    let binlist = [{'星穹铁道':['./heita/黑塔.pmx', './Bailu/白露1.0.pmx', './aishida/星穹铁道—艾丝妲160.pmx', './buluoniya/布洛妮娅 1.0.pmx', './fuxuan/符玄（鞋+发饰补差145cm）(修).pmx', './jizhi/姬子2.0.pmx', './kafka/卡芙卡.pmx', './kelala/克拉拉.pmx', './lishushang/李素裳1.0.pmx', './nvzhu/女主1.0.pmx', './qingque/青雀（分桦）.pmx', './sangyueqi/三月七 1.0.pmx', './tingyun/停云.pmx', './xier/希儿1.0.pmx', './xiluwa/希露瓦1.0.pmx', './yinglan/银狼.pmx']}, {'动漫虚拟人物':['./luotianyi/洛天依·三月雨常服.pmx']}, {'原神': ['./hutao/胡桃.pmx', './ganyu/甘雨.pmx', './keli/可莉2.0.pmx', './keqing/刻晴.pmx', './leidian/雷电将军.pmx', './naxida/纳西妲.pmx', './nilu/妮露.pmx', './qiqi/七七.pmx', './shenglilinghua/神里绫华.pmx', './xinghai/珊瑚宫心海.pmx', './yaoyao/瑶瑶.pmx', './baconshengzhi/八重神子.pmx']}]
    let MMDmodel = [];
    let imgMMDArr = ['b9f3f5e973c0acda33a533bc93d67d09.jpg', '225faa5f1a17744e117f15e3774a8c87.jpg', 'a008a5700e22d139d541b0589ac4ce88.jpg', '287fa9beca791ba424376a526d2ad5e4.jpg', 'f41e546fa5c5174c9011dc824354b583.jpg', '152a929b41a56f466bc803c1c5d7edaf.jpg', '8d6045b0aaf9ccccb3bccc549e2d385b.jpg', 'c114b51d9cf5b1ef0f2c13725fc980fa.jpg', 'aa289465515b1a4837f6c7905585faeb.jpg', '94eae00eace8caa369a8a77f1a7b4733.jpg', '6f2aaac856f235017aa3ed32f766d922.jpg', '2712eae65f2236acb80ecf3b9793211b.jpg', '447133c610199a285f19a58024b6fb36.jpg', '51f55fc6fa8b9309916d2ae446ed4de3.jpg', 'd76e9ee628e1f166c0d8708261d88e5a.jpg', '4195ead7d6c661334cd98f1b51959c14.jpg', '5337bed0259048c886c245ac7327a73d.jpg', 'ccc68128f3f86cdd1dd79c04e65df8c4.jpg', '67e80ae13818e384abe7bc0dcc256e95.jpg', '10832d3245ea7de45bea72348a7ca8d6.jpg', 'dac0dc3aaca979c7ea4269cad8d41343.jpg', '4badf93e9a5ef51e7533bfd8f5d0a086.jpg', '395131512a44e43371cec236bf4b3e85.jpg'];
    let pnum = 0;
    binlist.forEach(i => {
        let keyi = Object.keys(i)[0];
        MMDmodel.push(`<h2 data-category="${keyi}">${keyi}</h2>`);
        i[keyi].forEach(j => {
            let modeliName = j.split('/')[2].replace('.pmx', '');
            let imgPathload = 'https://cdn1.tianli0.top/npm/anqila-webgl-star/Image/' + imgMMDArr[pnum]
                MMDmodel.push(`<div class="card">
                <a href="javascript:;" target="viewer">
                    <div class="cover">
                        <img src="${imgMMDArr[pnum]}" loading="lazy" width="400">
                    </div>
                    <div class="title">${modeliName}</div>
                </a>
            </div>`);
            pnum ++;
        })
    })
    
    document.querySelector('.webgls').innerHTML = MMDmodel.join('');
})