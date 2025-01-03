// // Create the sap.m.Table
// // var table = new sap.m.Table();

// // // Define the columns
// // var column1 = new sap.m.Column({
// //   header: new sap.m.Label({ text: "Vehicle" })
// // });
// // table.addColumn(column1);

// // var column2 = new sap.m.Column({
// //   header: new sap.m.Label({ text: "Investors" })
// // });
// // table.addColumn(column2);

// // var column3 = new sap.m.Column({
// //   header: new sap.m.Label({ text: "Transaction Type" })
// // });
// // table.addColumn(column3);

// // var column4 = new sap.m.Column({
// //   header: new sap.m.Label({ text: "Amount (EUR)" })
// // });
// // table.addColumn(column4);

// // Populate the table with data
// var payments = [{
//   "amount_eur_sum": 60566.17,
//   "vehicle": "Triton Fund IV Executives L.P. - Total",
//   "values": [{
//     "id": 804,
//     "distribution_date": null,
//     "proposal_id": 1,
//     "vehicle": "Triton Fund IV Executives L.P.",
//     "vehicle_investran_id": 1145,
//     "payment_status_id": 1,
//     "investors": "Triton Managers IV Limited in its capacity as general partner of Triton Fund IV General Partner L.P.",
//     "investor_investran_id": 1037,
//     "trans_type_investran_id": 1495,
//     "transaction_type": "Payable: Distribution",
//     "transaction_id": "5508796",
//     "transaction_id_initial": "5508796",
//     "transaction_comments": null,
//     "allocation_rule": "Non-Dominant",
//     "gl_account_code": 20050,
//     "is_debit": false,
//     "transaction_currency_code": "EUR",
//     "currency_id": 1,
//     "amount_eur": 60566.17,
//     "par_lccy": 0,
//     "amount_lccy": -60566.17,
//     "payment_date": null
//   }]
// }, {
//   "amount_eur_sum": 5414.6,
//   "vehicle": "Triton Fund IV F&F L.P. - Total",
//   "values": [{
//     "id": 617,
//             "distribution_date": null,
//             "proposal_id": 1,
//             "vehicle": "Triton Fund IV F&F L.P.",
//             "vehicle_investran_id": 1149,
//             "payment_status_id": 1,
//             "investors": "Charlmaine Vella",
//             "investor_investran_id": 245,
//             "trans_type_investran_id": 1495,
//             "transaction_type": "Payable: Distribution",
//             "transaction_id": "5508796",
//             "transaction_id_initial": "5508796",
//             "transaction_comments": null,
//             "allocation_rule": "Non-Dominant",
//             "gl_account_code": 20050,
//             "is_debit": false,
//             "transaction_currency_code": "EUR",
//             "currency_id": 1,
//             "amount_eur": 2707.3,
//             "par_lccy": 0,
//             "amount_lccy": -2707.3,
//             "payment_date": null
//         }, {
//             "id": 688,
//             "distribution_date": null,
//             "proposal_id": 1,
//             "vehicle": "Triton Fund IV F&F L.P.",
//             "vehicle_investran_id": 1149,
//             "payment_status_id": 1,
//             "investors": "Lars Per Erik Jonsson",
//             "investor_investran_id": 491,
//             "trans_type_investran_id": 1495,
//             "transaction_type": "Payable: Distribution",
//             "transaction_id": "5508796",
//             "transaction_id_initial": "5508796",
//             "transaction_comments": null,
//             "allocation_rule": "Non-Dominant",
//             "gl_account_code": 20050,
//             "is_debit": false,
//             "transaction_currency_code": "EUR",
//             "currency_id": 1,
//             "amount_eur": 1082.92,
//             "par_lccy": 0,
//             "amount_lccy": -1082.92,
//             "payment_date": null
//         }, {
//             "id": 711,
//             "distribution_date": null,
//             "proposal_id": 1,
//             "vehicle": "Triton Fund IV F&F L.P.",
//             "vehicle_investran_id": 1149,
//             "payment_status_id": 1,
//             "investors": "Matthew James David Crill",
//             "investor_investran_id": 1212,
//             "trans_type_investran_id": 1495,
//             "transaction_type": "Payable: Distribution",
//             "transaction_id": "5508796",
//             "transaction_id_initial": "5508796",
//             "transaction_comments": null,
//             "allocation_rule": "Non-Dominant",
//             "gl_account_code": 20050,
//             "is_debit": false,
//             "transaction_currency_code": "EUR",
//             "currency_id": 1,
//             "amount_eur": 1624.38,
//             "par_lccy": 0,
//             "amount_lccy": -1624.38,
//             "payment_date": null
//         }]
// }];

// // Get the reference to your existing payment table
// // var paymentTable = this.getView().byId("yourPaymentTable");

// // Clear existing items in the table
// table.removeAllItems();

// // Create a map to store the subtotal amount per vehicle
// var subtotalMap = {};

// // Iterate over the "Payments" array and create rows in the table
// apiData.Payments.forEach(function(payment) {
//   var subtotal = 0;
// debugger
//   payment.values.forEach(function(value) {
//     var row = new sap.m.ColumnListItem();

//     // Set the values for each column in the row
//     var vehicle = new sap.m.Text({ text: payment.vehicle });
//     row.addCell(vehicle);

//     var investors = new sap.m.Text({ text: value.investors });
//     row.addCell(investors);

//     var transactionType = new sap.m.Text({ text: value.transaction_type });
//     row.addCell(transactionType);

//     var amountEur = new sap.m.Text({ text: value.amount_eur });
//     row.addCell(amountEur);

//     // Add the row to the table
//     table.addItem(row);

//     // Calculate the subtotal amount per vehicle
//     subtotal = apiData.Payments.amount_eur_sum;
//   });

//   // Store the subtotal amount for the vehicle
//   subtotalMap[payment.vehicle] = subtotal;
// });

// // Create a row for each vehicle with the subtotal amount
// Object.keys(subtotalMap).forEach(function(vehicle) {
//   var subtotalRow = new sap.m.ColumnListItem();

//   var vehicleText = new sap.m.Text({ text: vehicle });
//   subtotalRow.addCell(vehicleText);

//   var emptyCell = new sap.m.Text({ text: "" });
//   subtotalRow.addCell(emptyCell);

//   var emptyCell2 = new sap.m.Text({ text: "" });
//   subtotalRow.addCell(emptyCell2);

//   var subtotalAmount = new sap.m.Text({ text: subtotalMap[vehicle] });
//   subtotalRow.addCell(subtotalAmount);

//   // Add the subtotal row to the table
//   table.addItem(subtotalRow);
// });

