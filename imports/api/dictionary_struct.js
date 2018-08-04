// https://github.com/ChhoeTaigi/ChhoeTaigiDatabase

module.exports = [
    {
        name: 'TaibunHoabunSoanntengSutian',
        chineseName: '台文華文線頂辭典',
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字（其他講法）',
            poj_input: '白話字輸入',
            poj_input_dialect: '白話字輸入（其他講法）',
            hanlo_taibun_poj: '漢羅台文（白話字）',
            kiplmj_unicode: '教育部羅馬字',
            kiplmj_unicode_dialect: '教育部羅馬字（其他講法）',
            kiplmj_input: '教育部羅馬字輸入',
            kiplmj_input_dialect: '教育部羅馬字輸入（其他講法）',
            hanlo_taibun_kiplmj: '漢羅台文（教育部羅馬字）',
            hoabun: '華文',
        }
    },
    {
        name: 'TaiJitToaSuTian',
        chineseName: '台日大辭典（台文譯本）',
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字（其他講法）',
            poj_input: '白話字輸入',
            poj_input_dialect: '白話字輸入（其他講法）',
            hanlo_taibun_poj: '漢羅台文（白話字）',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說（白話字）',
            hanlo_taibun_leku_poj: '漢羅台文例句（白話字）',
            kiplmj_unicode: '教育部羅馬字',
            kiplmj_unicode_dialect: '教育部羅馬字（其他講法）',
            kiplmj_input: '教育部羅馬字輸入',
            kiplmj_input_dialect: '教育部羅馬字輸入（其他講法）',
            hanlo_taibun_kiplmj: '漢羅台文（教育部羅馬字）',
            hanlo_taibun_kaisoeh_kiplmj: '漢羅台文解說（教育部羅馬字）',
            hanlo_taibun_leku_kiplmj: '漢羅台文例句（教育部羅馬字）',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'MaryknollTaiEngSuTian',
        chineseName: 'Maryknoll台英辭典',
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kiplmj_unicode: '教育部羅馬字',
            kiplmj_input: '教育部羅馬字輸入',
            hoabun: '華文',
            english_descriptions: '英文解說',
            page_number: '原冊頁數（暫時無）',
        }
    },
    {
        name: 'EmbreeTaigiSuTian',
        chineseName: 'Embree台語辭典',
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kiplmj_unicode: '教育部羅馬字',
            kiplmj_input: '教育部羅馬字輸入',
            abbreviations: '詞類縮寫',
            noun_classifiers: '單位量詞',
            reduplication: '疊詞',
            hoabun: '華文',
            english_descriptions: '英文解說',
            page_number: '原冊頁數（暫時無）',
        }
    },
    {
        name: 'KauiokpooTaigiSutian',
        chineseName: '教育部台語辭典',
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字（其他講法）',
            poj_input: '白話字輸入',
            poj_input_dialect: '白話字輸入（其他講法）',
            kiplmj_unicode: '教育部羅馬字',
            kiplmj_unicode_dialect: '教育部羅馬字（其他講法）',
            kiplmj_input: '教育部羅馬字輸入',
            kiplmj_input_dialect: '教育部羅馬字輸入（其他講法）',
            word_property: '字詞屬性',
            word_bunpeh_property: '文白屬性',
            word_dialect_property: '其他講法ê類型',
            hanji_taibun: '漢字台文',
            hoabun: '華文',
            descriptions: '華文解說、詞性，台文例詞kap例句',
        }
    },
    {
        name: 'KamJitian',
        chineseName: '甘字典',
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            hanlo_taibun_poj: '漢羅台文（白話字）',
            poj_kaisoeh: '台文解說（白話字）',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說（白話字）',
            kiplmj_unicode: '教育部羅馬字',
            kiplmj_input: '教育部羅馬字輸入',
            hanlo_taibun_kiplmj: '漢羅台文（教育部羅馬字）',
            kiplmj_kaisoeh: '漢羅台文解說（教育部羅馬字）',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'iTaigiHoaTaiSutian',
        chineseName: 'iTaigi華台辭典',
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kiplmj_unicode: '教育部羅馬字',
            kiplmj_input: '教育部羅馬字輸入',
            hanlo_taibun_kiplmj: '漢羅台文（教育部羅馬字）',
            hoabun: '華文',
            from: '字詞來源',
        }
    },
    {
        name: 'TaioanPehoeKichhooGiku',
        chineseName: '台灣白話基礎語句',
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字（其他講法）',
            poj_input: '白話字輸入',
            poj_input_dialect: '白話字輸入（其他講法）',
            kiplmj_unicode: '教育部羅馬字',
            kiplmj_unicode_dialect: '教育部羅馬字（其他講法）',
            kiplmj_input: '教育部羅馬字輸入',
            kiplmj_input_dialect: '教育部羅馬字輸入（其他講法）',
            hoabun: '華文',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'TaioanSitbutMialui',
        chineseName: '台灣植物名彙',
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kiplmj_unicode: '教育部羅馬字',
            kiplmj_input: '教育部羅馬字輸入',
            hanji_taibun: '漢字台文',
            page_number: '原冊頁數',
        }
    },
]