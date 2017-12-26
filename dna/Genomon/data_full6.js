(function() {
sig_data = {};

sig_data.tooltip_format = {
    signature_title:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},],], keys: '{sig} '},
    signature_partial:{format:[[{label:'{route}',type:'str',keys:['route',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {route} '},
    mutation_title:{format:[[{label:'{id}',type:'str',keys:['id',],ext:''},],], keys: '{id} '},
    mutation_partial:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {sig} '},
};

sig_data.signatures = ['Signature 1','Signature 2','Signature 3','Signature 4','Signature 5','Background ',];
sig_data.sig_colors = ['#66C2A5','#FC8D62','#8DA0CB','#E78AC3','#A6D854','#B3B3B3',];
sig_data.dataset_sig = [[[0.0091,0,0,0,0.0007,0.0028,0,0,0.0109,0,0,0.0042,0.0072,0,0,0],[0.0046,0,0,0,0.0123,0,0,0,0,0.0024,0,0.0072,0,0,0,0.0028],[0.0188,0.0359,0.0132,0.0036,0.0366,0.0714,0.0043,0.032,0.0357,0.0518,0.0018,0.0135,0.0509,0,0.005,0.0287],[0,0.0383,0.0039,0,0,0,0,0,0,0.0282,0.0111,0,0,0.0136,0,0.0036],[0.0291,0.0277,0.0119,0.037,0.0099,0.0075,0.0442,0.0151,0.0058,0.0106,0.001,0.0133,0.0032,0.001,0.0597,0.07],[0,0.0226,0.0004,0,0.0054,0,0.0376,0,0,0,0,0.0062,0.0102,0,0,0.0021],],[[0.0048,0,0,0,0.0191,0.0083,0,0,0.0053,0,0,0.0247,0.0119,0,0,0],[0.0025,0,0,0,0.0071,0,0,0,0,0.0265,0,0.0173,0,0,0,0.005],[0.0597,0.0234,0.0084,0.0428,0.0094,0.0217,0.0105,0.0245,0.011,0.003,0.0133,0.086,0.0178,0,0.0139,0.0064],[0,0.0003,0.0079,0,0,0,0,0,0,0.003,0.0076,0,0,0.003,0,0.0076],[0.0587,0.0041,0.0219,0.0244,0.0076,0.0349,0.0062,0.0678,0.008,0.0151,0.0096,0.1123,0.002,0.0084,0.0078,0.0036],[0,0.0174,0.0261,0,0.0052,0,0.0065,0,0,0,0,0.0049,0.0072,0,0,0.0236],],[[0.007,0,0,0,0.006,0.0033,0,0,0.0027,0,0,0.011,0.0067,0,0,0],[0.0093,0,0,0,0.0044,0,0,0,0,0.0046,0,0.0015,0,0,0,0.0335],[0.004,0.0381,0.0076,0.0609,0.002,0.0387,0.0343,0.0286,0.0067,0.0553,0.0008,0.1351,0.0236,0,0.0034,0.003],[0,0.014,0.0099,0,0,0,0,0,0,0.0017,0.0015,0,0,0.0027,0,0.0221],[0.0067,0.0015,0.0258,0.1106,0.0176,0.0095,0.0103,0,0.0145,0.0242,0.0082,0.0234,0.0537,0.0134,0.0199,0.0096],[0,0.0117,0.0023,0,0.0091,0,0.028,0,0,0,0,0.008,0.0032,0,0,0.0017],],[[0.0095,0,0,0,0.0483,0.0267,0,0,0.0052,0,0,0.0355,0.0071,0,0,0],[0.0086,0,0,0,0.0488,0,0,0,0,0.001,0,0.0017,0,0,0,0.018],[0.0005,0.0189,0.0372,0.0033,0.0277,0.0366,0.0085,0.0045,0.0251,0.0177,0.0231,0.0358,0.0124,0,0.0042,0.0019],[0,0.0314,0.0599,0,0,0,0,0,0,0.0078,0.0055,0,0,0.0036,0,0.0075],[0.0121,0.013,0.0088,0.0564,0.0021,0.0178,0.0431,0.0001,0.0082,0.0337,0.0204,0.0215,0.0016,0.0113,0.0568,0.0349],[0,0.0028,0.0032,0,0.0204,0,0.015,0,0,0,0,0.0207,0.0033,0,0,0.0065],],[[0.0113,0,0,0,0.0441,0.0005,0,0,0.0116,0,0,0.0267,0.0044,0,0,0],[0.0553,0,0,0,0.0037,0,0,0,0,0.0022,0,0.003,0,0,0,0.0108],[0.0149,0.0797,0.0211,0.0048,0.0041,0.0338,0.0036,0.0202,0.0078,0.0282,0.0003,0.0006,0.0193,0,0.0245,0.0141],[0,0.0065,0.0278,0,0,0,0,0,0,0.0166,0.0015,0,0,0.0049,0,0.0343],[0.0383,0.0015,0.0408,0.031,0.0053,0.0117,0.042,0.0148,0.0211,0.0087,0.0224,0.038,0.0479,0.0479,0.0044,0.0131],[0,0.0065,0.0149,0,0.0056,0,0.0204,0,0,0,0,0.0007,0.0143,0,0,0.0035],],];
sig_data.dataset_sig_max = 0.1351;
sig_data.route_id = ['AA','AC','AG','AT','CA','CC','CG','CT','GA','GC','GG','GT','TA','TC','TG','TT',];
sig_data.substitution = [{name: 'C > A', color: '#1BBDEB', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > G', color: '#211D1E', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > T', color: '#E62623', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'T > A', color: '#CFCFCF', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > C', color: '#ACD577', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > G', color: '#EDC7C4', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},];

// [ID, signature, value]
sig_data.mutations = [[0,0,0.466800],[0,1,0.244200],[0,2,0.055000],[0,3,0.172400],[0,4,0.061400],[0,5,0.000000],];
sig_data.mutation_count = [123,];
sig_data.Ids = ['tumor',];
sig_data.esc_Ids = [];
for (var i=0; i < sig_data.Ids.length; i++) {
    sig_data.esc_Ids[i] = 'Key' + i;
}

function tooltip_text(format, obj) {
    var tooltip = [];
    for (var t in format.format) {
        tooltip.push(utils.text_format(format.format[t], obj));
    }
    return tooltip;
};

sig_data.get_data_par_signature = function (signature_id) {
    
    var tooltips = [];

    // par change
    for (var i=0; i < sig_data.substitution.length; i++) {
        
        var sum = 0;
        
        var obj = {
            'sig': sig_data.substitution[i].name,
        };
        tooltips[i] = [];
        var segment_index = -1;
        for (var j=0; j < sig_data.dataset_sig[signature_id][i].length; j++) {
            if (j%16 == 0) {
                segment_index += 1;
                tooltips[i][segment_index] = [];
            }
            obj['route'] = sig_data.substitution[i].route[j];
            obj['#sum_item_value'] = sig_data.dataset_sig[signature_id][i][j];
            
            tooltips[i][segment_index].push(tooltip_text(sig_data.tooltip_format['signature_partial'], obj));
            sum += sig_data.dataset_sig[signature_id][i][j];
        }
        
        obj['#sum_group_value'] = sum;
        
        var title = tooltip_text(sig_data.tooltip_format['signature_title'], obj);
        for (var s = 0; s < tooltips[i].length; s++) {
            for (var t = 0; t < title.length; t++) {
                tooltips[i][s].splice(t, 0, title[t]);
            }
        }
    }
    
    return {data: sig_data.dataset_sig[signature_id], tooltip: tooltips};
};

sig_data.get_bars_data = function (rate) {
    
    var data = [];
    var keys = [];
    var tooltips = {};
    var sum_par_id = [];
    for (var i1=0; i1 < sig_data.Ids.length; i1++) {
        tooltips[sig_data.esc_Ids[i1]] = [];
        sum_par_id[i1] = 0;
    }
    
    // par func
    for (var f=0; f < sig_data.signatures.length; f++) {

        data[f] = [];
        keys[f] = [];

        // par ID
        for (var i2=0; i2 < sig_data.Ids.length; i2++) {
            
            var data_filt = sig_data.mutations.filter(function(item, index){
                if ((item[0] == i2) && (item[1] == f)) return true;
            });
            
            //var sum = data_filt.length;
            var sum = 0;
            for (var s = 0; s < data_filt.length; s++) {
                sum += data_filt[s][2];
            }
            
            var mutation_count = 1;
            if (rate == false) {
                if (sig_data.mutation_count.length > 0) mutation_count = sig_data.mutation_count[i2];
            }
            
            if (sum > 0) {
                sum = sum*mutation_count;
            
                data[f].push(sum);
                keys[f].push(sig_data.esc_Ids[i2]);
                
                var obj2 = {
                    '#sum_mutaion_all': sig_data.mutations.length,
                    '#sum_item_value': sum,
                    'id': sig_data.Ids[i2],
                    'sig': sig_data.signatures[f],
                };
                tooltips[sig_data.esc_Ids[i2]].push(tooltip_text(sig_data.tooltip_format["mutation_partial"], obj2));
                sum_par_id[i2] += sum;
            }
        }
    }
    for (var i3=0; i3 < sig_data.Ids.length; i3++) {
        var obj3 = {
            '#sum_mutaion_all': sig_data.mutations.length,
            '#sum_item_value': sum_par_id[i3],
            'id': sig_data.Ids[i3],
        };
        
        var title = tooltip_text(sig_data.tooltip_format["mutation_title"], obj3);
        for (var t = 0; t < title.length; t++) {
            tooltips[sig_data.esc_Ids[i3]].splice(t, 0, title[t]);
        }
    }
    
    return {data: data, key: keys, tooltip: tooltips};
};

})();
Object.freeze(sig_data);
