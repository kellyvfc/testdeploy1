modelMultiModel.setData({
    items: [
        { firstName: "Peter", lastName: "Mueller", size: "1.75", city: "Walldorf" },
        { firstName: "Petra", lastName: "Maier", size: "1.85", city: "Walldorf" },
        { firstName: "Thomas", lastName: "Smith", size: "1.95", city: "Walldorf" },
        { firstName: "John", lastName: "Williams", size: "1.65", city: "Walldorf" },
        { firstName: "Maria", lastName: "Jones", size: "1.55", city: "Walldorf" },
    ],
});


sap.ui.getCore().attachInit(async (startParams) => {
    //jQuery.sap.registerModulePath("sap.ui.fl:flexibility", "sap/m/flexibility/EngineFlex");
    //console.log(jQuery.sap.getModulePath("sap.ui.fl:flexibility"));

    //jQuery.sap.registerModulePath("sap.ui.fl", "sap.ui.fl");

    var customData = new sap.ui.core.CustomData({
        key: "sap-ui-custom-settings",
        value: {
            "sap.ui.fl": {
                "flexibility": "sap/m/flexibility/EngineFlex"
            }
        }
    });
    testTable.addCustomData(customData);
    console.log(testTable.data());

    // var customData2 = new sap.ui.core.CustomData({
    //     key: "sap-ui-custom-settings",
    //     value: {
    //         "sap.ui.fl": {
    //             "flexibility": "sap/m/flexibility/EngineFlex"
    //         }
    //     }
    // });

    // testTable1.addCustomData(customData2);

    // testTable1.bindAggregation("items", {
    //     path: `MultiModel>/items`,
    //     template: new sap.m.ColumnListItem({
    //         cells: [
    //             new sap.m.HBox({
    //                 items: [
    //                     new sap.m.Text({
    //                         text: `{MultiModel>lastName}`,
    //                     })
    //                 ]
    //             })
    //         ]
    //     })
    // });

    testTable1.applySettings({
        items: {
            path: `MultiModel>/items`,
            template: new sap.m.ColumnListItem({
                cells: [
                    new sap.m.HBox({
                        items: [
                            new sap.m.Text({
                                text: `{MultiModel>lastName}`,
                            })
                        ]
                    })
                ]
            })
        },
        customData: [new sap.ui.core.CustomData({
            key: "sap-ui-custom-settings",
            value: {
                "sap.ui.dt": {
                    "designtime": "not-adaptable" || "not-adaptable-visibility" || "not-adaptable-tree"
                }
            }
        })]
    });

    console.log(testTable1.data());

});