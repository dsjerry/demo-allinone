const industryRes = {
    code: 100,
    msg: "操作成功",
    data: [
        {
            code: "3",
            parentId: "0",
            sorts: 1,
            name: "煤矿",
            children: [
                {
                    code: "CDMKJSGC",
                    parentId: "3",
                    sorts: 0,
                    name: "承担煤矿建设工程",
                },
                {
                    code: "KJJBJS",
                    parentId: "3",
                    sorts: 0,
                    name: "矿井基本建设",
                },
                {
                    code: "MTSC",
                    parentId: "3",
                    sorts: 0,
                    name: "煤炭生产",
                },
            ],
        },
        {
            code: "4",
            parentId: "0",
            sorts: 2,
            name: "非煤矿山",
            children: [
                {
                    code: "MFK4204",
                    parentId: "4",
                    sorts: 0,
                    name: "金属非金属矿山",
                    children: [
                        {
                            code: "MFK420401",
                            parentId: "MFK4204",
                            sorts: 0,
                            name: "露天矿山",
                        },
                        {
                            code: "MFK420408",
                            parentId: "MFK4204",
                            sorts: 0,
                            name: "货物专用运输",
                        },
                        {
                            code: "MFK420407",
                            parentId: "MFK4204",
                            sorts: 0,
                            name: "普通货物运输",
                        },
                        {
                            code: "MFK420406",
                            parentId: "MFK4204",
                            sorts: 0,
                            name: "大型物件运输",
                        },
                        {
                            code: "MFK420405",
                            parentId: "MFK4204",
                            sorts: 0,
                            name: "危险货物运输",
                        },
                        {
                            code: "MFK420404",
                            parentId: "MFK4204",
                            sorts: 0,
                            name: "选矿厂",
                        },
                        {
                            code: "MFK420403",
                            parentId: "MFK4204",
                            sorts: 0,
                            name: "尾矿库",
                        },
                        {
                            code: "MFK420402",
                            parentId: "MFK4204",
                            sorts: 0,
                            name: "地下矿山",
                        },
                    ],
                },
                {
                    code: "MFK4203",
                    parentId: "4",
                    sorts: 0,
                    name: "石油天然气",
                    children: [
                        {
                            code: "MFK420302",
                            parentId: "MFK4203",
                            sorts: 0,
                            name: "陆上石油",
                        },
                        {
                            code: "MFK420301",
                            parentId: "MFK4203",
                            sorts: 0,
                            name: "陆上天然气",
                        },
                    ],
                },
                {
                    code: "MFK4202",
                    parentId: "4",
                    sorts: 0,
                    name: "地质勘探",
                },
                {
                    code: "MFK4201",
                    parentId: "4",
                    sorts: 0,
                    name: "采掘施工",
                },
            ],
        },
        {
            code: "5",
            parentId: "0",
            sorts: 3,
            name: "危险化学品",
        },
        {
            code: "2",
            parentId: "0",
            sorts: 4,
            name: "烟花爆竹",
            children: [
                {
                    code: "YHBZPF",
                    parentId: "2",
                    sorts: 0,
                    name: "烟花爆竹批发",
                },
                {
                    code: "YHBZSC",
                    parentId: "2",
                    sorts: 0,
                    name: "烟花爆竹生产",
                },
                {
                    code: "YHBZLS",
                    parentId: "2",
                    sorts: 0,
                    name: "烟花爆竹零售",
                },
            ],
        },
        {
            code: "1",
            parentId: "0",
            sorts: 5,
            name: "工贸行业",
            children: [
                {
                    code: "YJ1",
                    parentId: "1",
                    sorts: 0,
                    name: "冶金行业",
                    children: [
                        {
                            code: "YJ1yyj",
                            parentId: "YJ1",
                            sorts: 0,
                            name: "冶金压延加工业",
                        },
                        {
                            code: "YJ1hjs",
                            parentId: "YJ1",
                            sorts: 0,
                            name: "黑色金属冶炼",
                        },
                    ],
                },
                {
                    code: "SM1",
                    parentId: "1",
                    sorts: 0,
                    name: "商贸行业",
                    children: [
                        {
                            code: "SM105",
                            parentId: "SM1",
                            sorts: 0,
                            name: "餐饮业",
                        },
                        {
                            code: "SM104",
                            parentId: "SM1",
                            sorts: 0,
                            name: "住宿业",
                        },
                        {
                            code: "SM103",
                            parentId: "SM1",
                            sorts: 0,
                            name: "卸搬运和仓储业",
                        },
                        {
                            code: "SM102",
                            parentId: "SM1",
                            sorts: 0,
                            name: "零售业",
                        },
                        {
                            code: "SM101",
                            parentId: "SM1",
                            sorts: 0,
                            name: "批发业",
                        },
                    ],
                },
                {
                    code: "YC1",
                    parentId: "1",
                    sorts: 0,
                    name: "烟草行业",
                    children: [
                        {
                            code: "YC102",
                            parentId: "YC1",
                            sorts: 0,
                            name: "烟草制品批发",
                        },
                        {
                            code: "YC101",
                            parentId: "YC1",
                            sorts: 0,
                            name: "烟草制品业",
                        },
                    ],
                },
                {
                    code: "FZ1",
                    parentId: "1",
                    sorts: 0,
                    name: "纺织行业",
                    children: [
                        {
                            code: "FZ102",
                            parentId: "FZ1",
                            sorts: 0,
                            name: "纺织服装、服饰业",
                        },
                        {
                            code: "FZ101",
                            parentId: "FZ1",
                            sorts: 0,
                            name: "纺织业",
                        },
                    ],
                },
                {
                    code: "QG1",
                    parentId: "1",
                    sorts: 0,
                    name: "轻工行业",
                    children: [
                        {
                            code: "QG112",
                            parentId: "QG1",
                            sorts: 0,
                            name: "玻璃制品制造",
                        },
                        {
                            code: "QG122",
                            parentId: "QG1",
                            sorts: 0,
                            name: "手工具制造",
                        },
                        {
                            code: "QG121",
                            parentId: "QG1",
                            sorts: 0,
                            name: "日用杂品制造",
                        },
                        {
                            code: "QG120",
                            parentId: "QG1",
                            sorts: 0,
                            name: "衡器制造",
                        },
                        {
                            code: "QG119",
                            parentId: "QG1",
                            sorts: 0,
                            name: "钟表与计时仪器制造",
                        },
                        {
                            code: "QG118",
                            parentId: "QG1",
                            sorts: 0,
                            name: "照明器具制造",
                        },
                        {
                            code: "QG117",
                            parentId: "QG1",
                            sorts: 0,
                            name: "家用电力器具制造",
                        },
                        {
                            code: "QG116",
                            parentId: "QG1",
                            sorts: 0,
                            name: "电池制造",
                        },
                        {
                            code: "QG115",
                            parentId: "QG1",
                            sorts: 0,
                            name: "自行车和残疾人座车制造",
                        },
                        {
                            code: "QG114",
                            parentId: "QG1",
                            sorts: 0,
                            name: "金属制日用品制造",
                        },
                        {
                            code: "QG113",
                            parentId: "QG1",
                            sorts: 0,
                            name: "陶瓷制品制造",
                        },
                        {
                            code: "QG123",
                            parentId: "QG1",
                            sorts: 0,
                            name: "刀剪及类似日用金属工具制造",
                        },
                        {
                            code: "QG111",
                            parentId: "QG1",
                            sorts: 0,
                            name: "橡胶和塑料制品业等",
                        },
                        {
                            code: "QG109",
                            parentId: "QG1",
                            sorts: 0,
                            name: "文教、工美、体育和娱乐用品制造业",
                        },
                        {
                            code: "QG108",
                            parentId: "QG1",
                            sorts: 0,
                            name: "印刷和记录媒介���制业",
                        },
                        {
                            code: "QG107",
                            parentId: "QG1",
                            sorts: 0,
                            name: "造纸和纸制品业",
                        },
                        {
                            code: "QG106",
                            parentId: "QG1",
                            sorts: 0,
                            name: "家具制造业",
                        },
                        {
                            code: "QG105",
                            parentId: "QG1",
                            sorts: 0,
                            name: "木材加工和木、竹、藤、棕、草制品业",
                        },
                        {
                            code: "QG104",
                            parentId: "QG1",
                            sorts: 0,
                            name: "皮革、毛皮、羽毛及其制品和制鞋业",
                        },
                        {
                            code: "QG103",
                            parentId: "QG1",
                            sorts: 0,
                            name: "酒、饮料和精制茶制造业",
                        },
                        {
                            code: "QG102",
                            parentId: "QG1",
                            sorts: 0,
                            name: "食品制造业",
                        },
                        {
                            code: "QG127",
                            parentId: "QG1",
                            sorts: 0,
                            name: "眼镜制造",
                        },
                        {
                            code: "QG126",
                            parentId: "QG1",
                            sorts: 0,
                            name: "照相机及器材制造",
                        },
                        {
                            code: "QG125",
                            parentId: "QG1",
                            sorts: 0,
                            name: "搪瓷日用品及其他搪瓷制品制造",
                        },
                        {
                            code: "QG124",
                            parentId: "QG1",
                            sorts: 0,
                            name: "建筑、家具用金属配件制造",
                        },
                        {
                            code: "QG101",
                            parentId: "QG1",
                            sorts: 0,
                            name: "农副食品加工业",
                        },
                    ],
                },
                {
                    code: "JX1",
                    parentId: "1",
                    sorts: 0,
                    name: "机械行业",
                    children: [
                        {
                            code: "JX1jszp",
                            parentId: "JX1",
                            sorts: 0,
                            name: "金属制品业",
                        },
                        {
                            code: "JX1jszpxl",
                            parentId: "JX1",
                            sorts: 0,
                            name: "金属制品、机械和设备修理业",
                        },
                        {
                            code: "JX1yqyb",
                            parentId: "JX1",
                            sorts: 0,
                            name: "仪器仪表制造业",
                        },
                        {
                            code: "JX1dqjx",
                            parentId: "JX1",
                            sorts: 0,
                            name: "电气机械和器材制造业",
                        },
                        {
                            code: "JX1jsj",
                            parentId: "JX1",
                            sorts: 0,
                            name: "计算机、通信和其他电子设备制造业",
                        },
                        {
                            code: "JX1tl",
                            parentId: "JX1",
                            sorts: 0,
                            name: "铁路、船舶、航空航天和其他运输设备制造业",
                        },
                        {
                            code: "JX1qczz",
                            parentId: "JX1",
                            sorts: 0,
                            name: "汽车制造业",
                        },
                        {
                            code: "JX1zysb",
                            parentId: "JX1",
                            sorts: 0,
                            name: "专用设备制造业",
                        },
                        {
                            code: "JX1tysb",
                            parentId: "JX1",
                            sorts: 0,
                            name: "通用设备制造业",
                        },
                    ],
                },
                {
                    code: "JC1",
                    parentId: "1",
                    sorts: 0,
                    name: "建材行业",
                    children: [
                        {
                            code: "JC1fjs",
                            parentId: "JC1",
                            sorts: 0,
                            name: "非金属矿物制品业",
                        },
                        {
                            code: "JC1jcqt",
                            parentId: "JC1",
                            sorts: 1,
                            name: "建材其他行业",
                        },
                    ],
                },
                {
                    code: "YS1",
                    parentId: "1",
                    sorts: 0,
                    name: "有色行业",
                    children: [
                        {
                            code: "YS1yjg",
                            parentId: "YS1",
                            sorts: 0,
                            name: "有色压延加工业",
                        },
                        {
                            code: "YS1js",
                            parentId: "YS1",
                            sorts: 0,
                            name: "有色金属冶炼",
                        },
                    ],
                },
            ],
        },
        {
            code: "6",
            parentId: "0",
            sorts: 9,
            name: "其他",
        },
        {
            code: "qypjjg",
            parentId: "0",
            sorts: 11,
            name: "安全评价机构",
        },
        {
            code: "qyscjcjyjg",
            parentId: "0",
            sorts: 12,
            name: "安全生产检测检验机构",
        },
    ],
}

function findTopParentCode(data, targetCode) {
    // 扁平化处理函数
    function flattenTree(items, result = []) {
        items.forEach(item => {
            result.push({
                code: item.code,
                parentId: item.parentId,
            })
            if (item.children) {
                flattenTree(item.children, result)
            }
        })
        return result
    }

    // 扁平化数据
    const flatData = flattenTree(data)

    // 查找目标code的最顶层code
    let currentCode = targetCode
    let topCode = currentCode

    while (currentCode) {
        const item = flatData.find(x => x.code === currentCode)
        if (!item) break

        if (item.parentId === "0") {
            topCode = item.code
            break
        }
        currentCode = item.parentId
        topCode = currentCode
    }

    return topCode
}

const getIndustyPathByName = (name, industryData) => {
    // 用于存储找到的路径
    let path = []

    // 递归搜索函数
    const findPath = (data, targetName, currentPath) => {
        for (let item of data) {
            // 创建当前路径
            const newPath = [...currentPath, item.code]

            // 如果找到目标名称，返回true并保存路径
            if (item.name === targetName) {
                path = newPath
                return true
            }

            // 如果有子节点，继续递归搜索
            if (item.children && item.children.length > 0) {
                if (findPath(item.children, targetName, newPath)) {
                    return true
                }
            }
        }
        return false
    }

    // 开始搜索
    findPath(industryData, name, [])
    return path
}

const path = getIndustyPathByName("有色金属冶炼", industryRes.data)
console.log(path)

// // 使用示例
// const topCode = findTopParentCode(industryRes.data, "MFK420401") // 将返回 "1"

// console.log(topCode)
