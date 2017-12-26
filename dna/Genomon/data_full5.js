(function() {
sig_data = {};

sig_data.tooltip_format = {
    signature_title:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},],], keys: '{sig} '},
    signature_partial:{format:[[{label:'{route}',type:'str',keys:['route',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {route} '},
    mutation_title:{format:[[{label:'{id}',type:'str',keys:['id',],ext:''},],], keys: '{id} '},
    mutation_partial:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {sig} '},
};

sig_data.signatures = ['Signature 1','Signature 2','Signature 3','Signature 4','Background ',];
sig_data.sig_colors = ['#66C2A5','#FC8D62','#8DA0CB','#E78AC3','#B3B3B3',];
sig_data.dataset_sig = [[[0.0005,0,0,0,0.0103,0.0083,0,0,0.0009,0,0,0.0705,0.005,0,0,0],[0.0046,0,0,0,0.0631,0,0,0,0,0.0016,0,0.0001,0,0,0,0.0032],[0.0583,0.0012,0.03,0.0142,0.0375,0.0171,0.0006,0.0035,0.0057,0.0123,0.0173,0.009,0.1107,0,0.0048,0.0153],[0,0.014,0.0004,0,0,0,0,0,0,0.0166,0.0016,0,0,0.0056,0,0.0008],[0.0173,0.0103,0.0194,0.0234,0.0061,0.0167,0.0635,0.0042,0.0499,0.0075,0.0015,0.0118,0.019,0.0486,0.0483,0.056],[0,0.0126,0.0097,0,0.0016,0,0.0142,0,0,0,0,0.0063,0.0018,0,0,0.0024],],[[0.0021,0,0,0,0.0001,0.0103,0,0,0.0103,0,0,0.0222,0.01,0,0,0],[0.0031,0,0,0,0.0098,0,0,0,0,0.0238,0,0.0057,0,0,0,0.015],[0.0146,0.0032,0.0087,0.0069,0.0141,0.034,0.009,0.0167,0.058,0.0456,0.0001,0.0822,0.0604,0,0.0013,0.0083],[0,0.0553,0.025,0,0,0,0,0,0,0.0367,0.0042,0,0,0.0238,0,0.02],[0.0154,0.0143,0.0032,0.0153,0.003,0.0061,0.029,0.0188,0.006,0.0098,0.0115,0.0575,0.0107,0.0048,0.0422,0.0201],[0,0.0186,0.0003,0,0.0135,0,0.0502,0,0,0,0,0.0025,0.0037,0,0,0.0003],],[[0.0126,0,0,0,0.0242,0.0013,0,0,0.004,0,0,0.0116,0.01,0,0,0],[0.013,0,0,0,0.0023,0,0,0,0,0.0018,0,0.0042,0,0,0,0.0059],[0.033,0.06,0.0056,0.0227,0.0366,0.0723,0.0017,0.0312,0.0188,0.0318,0.0072,0.0284,0.0245,0,0.0134,0.0219],[0,0.0188,0.0021,0,0,0,0,0,0,0.0068,0.004,0,0,0.0025,0,0.006],[0.042,0.0025,0.0099,0.0678,0.0136,0.0246,0.0435,0.023,0.0045,0.0206,0.0073,0.0333,0.0017,0.0005,0.0384,0.0596],[0,0.0179,0.0108,0,0.0054,0,0.016,0,0,0,0,0.0009,0.0112,0,0,0.0018],],[[0.0059,0,0,0,0.018,0.0237,0,0,0.018,0,0,0.0088,0.0016,0,0,0],[0.0024,0,0,0,0.0517,0,0,0,0,0.0061,0,0.0237,0,0,0,0.0062],[0.0071,0.0059,0.0519,0.0121,0.003,0.0143,0.0261,0.0217,0.0005,0.0233,0.019,0.0279,0.0006,0,0.0037,0.0123],[0,0.0021,0.0468,0,0,0,0,0,0,0.0151,0.0258,0,0,0.0033,0,0],[0.0343,0.0574,0.0501,0.0067,0.0007,0.0076,0.0016,0.0407,0.0109,0.0156,0.0076,0.0465,0.0197,0.0235,0.0444,0.0147],[0,0.0102,0.0109,0,0.0098,0,0.0163,0,0,0,0,0.0353,0.0073,0,0,0.0367],],];
sig_data.dataset_sig_max = 0.1107;
sig_data.route_id = ['AA','AC','AG','AT','CA','CC','CG','CT','GA','GC','GG','GT','TA','TC','TG','TT',];
sig_data.substitution = [{name: 'C > A', color: '#1BBDEB', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > G', color: '#211D1E', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > T', color: '#E62623', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'T > A', color: '#CFCFCF', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > C', color: '#ACD577', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > G', color: '#EDC7C4', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},];

// [ID, signature, value]
sig_data.mutations = [[0,0,0.044400],[0,1,0.250400],[0,2,0.513100],[0,3,0.191900],[0,4,0.000000],];
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
