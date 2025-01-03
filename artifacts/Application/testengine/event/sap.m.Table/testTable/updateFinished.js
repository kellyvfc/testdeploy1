const handleStateChange = (oEvent) => {
    console.log('handleStateChange');

    var oTable = testTable;
    var oState = oEvent.getParameter("state");
    console.log(oState);

    oTable.getColumns().forEach(function (oColumn, iIndex) {
        oColumn.setVisible(false);
    });

    oState.Columns.forEach(function (oProp, iIndex) {
        var oCol = sap.ui.getCore().byId(oProp.key); //this.byId(oProp.key);
        oCol.setVisible(true);

        var iOldIndex = oTable.getColumns().indexOf(oCol);

        oTable.removeColumn(oCol);
        oTable.insertColumn(oCol, iIndex);

        oTable.getItems().forEach(function (oItem) {
            if (oItem.isA("sap.m.ColumnListItem")) {
                var oCell = oItem.getCells()[iOldIndex];
                oItem.removeCell(oCell);
                oItem.insertCell(oCell, iIndex);
            }
        });
    });

    // var aSorter = [];
    // oState.Sorter.forEach(function (oSorter) {
    //     aSorter.push(new Sorter(this.oMetadataHelper.getPath(oSorter.key), oSorter.descending));
    // }.bind(this));

    // oState.Groups.forEach(function (oGroup) {
    //     aSorter.push(new Sorter(this.oMetadataHelper.getPath(oGroup.key), oGroup.descending, true));
    // }.bind(this));

    //oTable.getBinding("items").sort(aSorter);
}

sap.ui.require(["sap/m/p13n/Engine",
    "sap/m/p13n/SelectionController",
    "sap/m/p13n/MetadataHelper",
    "sap/m/flexibility/EngineFlex"
], (Engine, SelectionController, MetadataHelper, EngineFlex) => {

    console.log('testTable');
    let columns = testTable.getColumns();

    let metadataColumns = columns.map((column, index) => {
        let id = column.getId();
        let label = column.getHeader().getText(false);
        let columnListItem = testTable.getItems()[0];
        let innerControl = columnListItem.getCells()[index];
        let path = innerControl.getBinding(innerControl.isA("sap.m.ObjectIdentifier") ? "title" : "text").getPath();
        return {
            id,
            label,
            path
        }
    });

    let metadataHelper = new MetadataHelper(metadataColumns);
    Engine.register(testTable, {
        helper: metadataHelper,
        controller: {
            Columns: new SelectionController({
                targetAggregation: "columns",
                control: testTable
            }),
            // Sorter: new SortController({
            //     control: oTable
            // }),
            // Groups: new GroupController({
            //     control: oTable
            // })
        }
    });
    Engine.attachStateChange(handleStateChange);
});
