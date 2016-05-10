Ext.Loader.setConfig({
	disableCaching: false,
	enabled: true,
	paths: {
		'Ext.ux': '../ux'
	}
});
Ext.require('Ext.ux.form.field.GridPicker');
Ext.require('Ext.ux.model.Record');
Ext.require('Ext.ux.store.Records');

Ext.application({
    name: 'GridPicker Examples',
    launch: function() {
        var store = Ext.create('Ext.ux.store.Records', {
        });

        var tpl = new Ext.XTemplate(
            '<a class="x-form-ui-projectcombo">' +
            '<span class="first">{name}</span>' +
            '</br>' +
            '<span>{city} {countryCode}</span>' +
            '</a>'
        );

        Ext.widget('gridpicker', {
            renderTo: 'example1',
            gridConfig: {
                minHeight: 200,
                plugins: {
                    ptype: 'bufferedrenderer'
                }
            },
            width: 250,
            displayField: 'title',
            valueField: 'threadid',
            queryMode: 'local',
            anyMatch: true,
            lastQuery: '',
            store: store,
            emptyText: 'No match found',
            itemTpl: tpl,
            listeners: {
                select: function(combo, records) {
                    Ext.Msg.alert("Thread", records[0].get('name'));
                }
            }
        });

        store.getRange(0, 199);
    }
});
