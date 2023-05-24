document.addEventListener('DOMContentLoaded', function() {
    let binlist = [{'星穹铁道':['./heita/黑塔.pmx', './Bailu/白露1.0.pmx']}, {'动漫虚拟人物':['./luotianyi/洛天依·三月雨常服.pmx']}, {'原神': ['./hutao/胡桃.pmx', './ganyu/甘雨.pmx', './keli/可莉2.0.pmx', './keqing/刻晴.pmx', './leidian/雷电将军.pmx', './naxida/纳西妲.pmx', './nilu/妮露.pmx', './qiqi/七七.pmx', './shenglilinghua/神里绫华.pmx', './xinghai/珊瑚宫心海.pmx', './yaoyao/瑶瑶.pmx']}]
    let MMDmodel = [];
    for (let i = 0; i < binlist.length; i++) {
    //     let modeliName = binlist[i].split('/')[2].replace('.pmd', '');
    //     MMDmodel.push(`<div class="card">
    //     <a href="javascript:;" target="viewer">
    //         <div class="cover">
    //             <img src="https://cdn1.tianli0.top/npm/anqila-statics/blog-img/3739771e00ab2932364dc7f8b2a29c0cb4e4c2de.jpg%40942w_531h_progressive.webp" loading="lazy" width="400">
    //         </div>
    //         <div class="title">${modeliName}</div>
    //     </a>
    // </div>`);
    }
    binlist.forEach(i => {
        let keyi = Object.keys(i)[0];
        MMDmodel.push(`<h2 data-category="${keyi}">${keyi}</h2>`);
        i[keyi].forEach(j => {
            let modeliName = j.split('/')[2].replace('.pmx', '');
                MMDmodel.push(`<div class="card">
                <a href="javascript:;" target="viewer">
                    <div class="cover">
                        <img src="https://cdn1.tianli0.top/npm/anqila-statics/blog-img/3739771e00ab2932364dc7f8b2a29c0cb4e4c2de.jpg%40942w_531h_progressive.webp" loading="lazy" width="400">
                    </div>
                    <div class="title">${modeliName}</div>
                </a>
            </div>`);
        })
    })
    
    document.querySelector('.webgls').innerHTML = MMDmodel.join('');
})