// Custom Init - Happens only once when mounting the component
sap.ui.getCore().attachInit(async function (startParams) {
    var options = {
        batch_id: "357484", // Required - In Path
        data: {
            orderBy: "asc",
            groupBy: "vehicle",
        },
    };

    await apiRestAPI(options);
    // Define the columns
    var column1 = new sap.m.Column({
        header: new sap.m.Label({ text: "Id" }),
    });
    table.addColumn(column1);

    // Define the columns
    var column2 = new sap.m.Column({
        header: new sap.m.Label({ text: "Vehicle" }),
    });
    table.addColumn(column2);

    var column3 = new sap.m.Column({
        header: new sap.m.Label({ text: "Investors" }),
    });
    table.addColumn(column3);

    var column4 = new sap.m.Column({
        header: new sap.m.Label({ text: "Transaction Type" }),
    });
    table.addColumn(column4);

    var column5 = new sap.m.Column({
        header: new sap.m.Label({ text: "Amount (EUR)" }),
    });
    table.addColumn(column5);

    let payment = modelDataTable.getData().Payments;
    // Iterate over the "Payments" array and create rows in the table
    // apiData.Payments.forEach(function (payment) {
    payment.forEach(function (payment) {
        if (payment.values) {
            payment.values.forEach(function (value) {
                var row = new sap.m.ColumnListItem();

                // Set the values for each column in the row
                var id = new sap.m.Text({ text: value.id });
                row.addCell(id);
                // Set the values for each column in the row
                var vehicle = new sap.m.Text({ text: value.vehicle });
                row.addCell(vehicle);

                var investors = new sap.m.Text({ text: value.investors });
                row.addCell(investors);

                var transactionType = new sap.m.Text({ text: value.transaction_type });
                row.addCell(transactionType);

                var amountEur = new sap.m.Text({ text: value.amount_eur });
                row.addCell(amountEur);

                // Add the row to the table
                table.addItem(row);
            });
        }
        var row = new sap.m.ColumnListItem();

        var id = new sap.m.Text({ text: "" });
        row.addCell(id);

        // Set the values for each column in the row
        var vehicle = new sap.m.Label({ text: payment.vehicle, design: "Bold" });

        row.addCell(vehicle);

        var investors = new sap.m.Text({ text: "" });
        row.addCell(investors);

        var transactionType = new sap.m.Text({ text: "" });
        row.addCell(transactionType);

        var amountEur = new sap.m.Label({ text: payment.amount_eur_sum, design: "Bold" });
        // amountEur.setDesign(sap.m.Design.Bold);
        row.addCell(amountEur);
        // Add the row to the table
        table.addItem(row);
    });
});
