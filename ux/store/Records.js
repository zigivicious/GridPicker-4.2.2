Ext.define('Ext.ux.store.Records', {
    extend: 'Ext.data.Store',
    model: 'Ext.ux.model.Record',

    id: 'store',
    pageSize: 500,
    remoteSort: true,
    // allow the grid to interact with the paging scroller by buffering
    buffered: true,

    proxy: {
        // load using script tags for cross domain, if the data in on the same domain as
        // this page, an HttpProxy would be better
        type: 'jsonp',
        url: 'http://www.sencha.com/forum/remote_topics/index.php',
        extraParams: {
            total: 50000
        },
        reader: {
            root: 'topics',
            totalProperty: 'totalCount'
        },
        // sends single sort as multi parameter
        simpleSortMode: true
    },
    sorters: [{
        property: 'lastpost',
        direction: 'DESC'
    }]
});
