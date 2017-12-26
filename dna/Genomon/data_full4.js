(function() {
sig_data = {};

sig_data.tooltip_format = {
    signature_title:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},],], keys: '{sig} '},
    signature_partial:{format:[[{label:'{route}',type:'str',keys:['route',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {route} '},
    mutation_title:{format:[[{label:'{id}',type:'str',keys:['id',],ext:''},],], keys: '{id} '},
    mutation_partial:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {sig} '},
};

sig_data.signatures = ['Signature 1','Signature 2','Signature 3','Background ',];
sig_data.sig_colors = ['#66C2A5','#FC8D62','#8DA0CB','#B3B3B3',];
sig_data.dataset_sig = [[[0.0145,0,0,0,0.0149,0.0112,0,0,0.029,0,0,0.0312,0.0004,0,0,0],[0.0151,0,0,0,0.0389,0,0,0,0,0.0001,0,0.0257,0,0,0,0.0049],[0.0271,0.0083,0.0258,0.0189,0.0363,0.0058,0.0118,0.0097,0.0147,0.0667,0.0058,0.0521,0.0451,0,0.0087,0.0247],[0,0.0112,0.0026,0,0,0,0,0,0,0.0039,0.0011,0,0,0.0059,0,0.0099],[0.0031,0.0061,0.0285,0.0305,0.0017,0.0029,0.0144,0.043,0.0043,0.0296,0.0004,0.0284,0.0133,0.0068,0.0797,0.0454],[0,0.0068,0.0013,0,0.0022,0,0.0381,0,0,0,0,0.0169,0.0061,0,0,0.0058],],[[0.004,0,0,0,0.0189,0.0073,0,0,0.0012,0,0,0.0206,0.0052,0,0,0],[0.0078,0,0,0,0.0022,0,0,0,0,0.014,0,0.0022,0,0,0,0.0047],[0.0416,0.0624,0.0114,0.0232,0.0174,0.0238,0.0113,0.0434,0.0283,0.026,0.0153,0.0598,0.0448,0,0.0135,0.0185],[0,0.0061,0.0348,0,0,0,0,0,0,0.0328,0.003,0,0,0.0081,0,0.0045],[0.0662,0.019,0.0169,0.013,0.0078,0.0201,0.0408,0.0297,0.006,0.0135,0.0043,0.0273,0.0009,0.0022,0.009,0.0086],[0,0.0106,0.0122,0,0.0174,0,0.0234,0,0,0,0,0.0066,0.0091,0,0,0.0147],],[[0.0091,0,0,0,0.014,0.0072,0,0,0.0027,0,0,0.0003,0.0175,0,0,0],[0.0037,0,0,0,0.0192,0,0,0,0,0.006,0,0.0036,0,0,0,0.0149],[0.0001,0.0108,0.0162,0.0055,0.0258,0.1132,0.0014,0.0101,0.0265,0.0177,0.0004,0.0081,0.0081,0,0.0007,0.0076],[0,0.0584,0.0016,0,0,0,0,0,0,0.0033,0.0199,0,0,0.0097,0,0.0118],[0.0094,0.02,0.0071,0.0853,0.0131,0.0208,0.035,0.0048,0.0137,0.0108,0.0187,0.0678,0.0141,0.0169,0.0559,0.0806],[0,0.0307,0.0076,0,0.0001,0,0.0165,0,0,0,0,0.004,0.0083,0,0,0.0011],],];
sig_data.dataset_sig_max = 0.1132;
sig_data.route_id = ['AA','AC','AG','AT','CA','CC','CG','CT','GA','GC','GG','GT','TA','TC','TG','TT',];
sig_data.substitution = [{name: 'C > A', color: '#1BBDEB', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > G', color: '#211D1E', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > T', color: '#E62623', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'T > A', color: '#CFCFCF', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > C', color: '#ACD577', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > G', color: '#EDC7C4', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},];

// [ID, signature, value]
sig_data.mutations = [[0,0,0.232500],[0,1,0.437100],[0,2,0.330200],[0,3,0.000000],];
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
