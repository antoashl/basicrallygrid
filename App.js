Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
        console.log('my first app, JSONP setting killed a lot of time !!!');
        this._loadDataFromRally();
        
    },

    _loadDataFromRally: function() {
        var myFirstStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'Defect',
            autoLoad: true,
            listeners: {
                load: function(store, data, success) {
                    console.log('yay got data !', store, data, success);
                    this._printData(myFirstStore);
                },
                scope: this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState', 'AcceptedDate']
        });
    },


    _printData: function(myFirstStore) {
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store: myFirstStore,
            columnCfgs: ['FormattedID', 'Name', 'ScheduleState', 'AcceptedDate']
        });

        console.log('yay see my grid !', myGrid);

        this.add(myGrid);
    }
        
        //this.update("hello wwworld!!!");
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
   
});
