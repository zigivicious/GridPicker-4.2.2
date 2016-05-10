Ext.define('Ext.ux.model.Record', {
    extend: 'Ext.data.Model',
    fields: [
        'title', 'forumtitle', 'forumid', 'author',
        {name: 'replycount', type: 'int'},
        {name: 'lastpost', mapping: 'lastpost', type: 'date', dateFormat: 'timestamp'},
        'lastposter', 'excerpt', 'threadid'
    ],
    idProperty: 'threadid'
});