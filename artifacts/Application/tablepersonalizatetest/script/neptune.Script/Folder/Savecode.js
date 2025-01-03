// var emailadress = "daniela.pascoal@neptune-software.com";
// var emailadressT = [];
// emailadressT.push(emailadress);
// emailadress = "veronica.fernandez@neptune-software.com";
// emailadressT.push(emailadress);
// var fromemail = "daniela.pascoal@neptune-software.com";

// // var Requestor = {};

// let title = modelSimpleForm.getData().tittle;
// let requesterEmail = fromemail;
// // let requesterEmail = modelSimpleForm.getData().requesterEmail;
// let requestorName = modelSimpleForm.getData().requestorName;
// // let approverEmail = modelSimpleForm.getData().approverEmail;
// let approverEmail = fromemail;
// let approverName = modelSimpleForm.getData().approverName;
// let fromDate = formateDate(modelSimpleForm.getData().fromDate);
// let toDate = formateDate(modelSimpleForm.getData().toDate);
// let reason = modelSimpleForm.getData().reason;
// let idCount = generateSerialNumber();

// let image =
//     "https://www.mobile.neptune-software.com/wp-content/uploads/2021/08/Hero-image-Company-page.png";

// var data = JSON.stringify({
//     fromemail: fromemail,
//     emailadress: emailadressT,
//     title,
//     requestorName,
//     image: image,
//     reason,
//     fromDate,
//     toDate,
//     idCount,
// });

// let demoCardsdata = {
//     tittle: title,
//     requesterEmail: requesterEmail,
//     requestorName: requestorName,
//     approverEmail: approverEmail,
//     approverName: approverName,
//     fromDate: fromDate,
//     toDate: toDate,
//     reason: reason,
//     idCount: idCount
// };
// var options = {
//     data: demoCardsdata,
// };

// apidemocardsPost(options);

// var req = new XMLHttpRequest();
// var url =
//     "https://prod-28.westeurope.logic.azure.com:443/workflows/b399484138584b53a6514d440b6738a9/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lrDa1NZW7Ggt5EKYPefjah6lVeI1Q6JZBnbLoXIhfZ8";
// // "https://prod-204.westeurope.logic.azure.com:443/workflows/f3271149a4954ff591888dd4bc2e3a39/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z6t9viSAWuTcpXwH3ITjkobPhLcVpm0dqMNSVXsr3DU"
// req.open("POST", url, true);
// req.setRequestHeader("Content-Type", "application/json");
// // req.send(acupdate);
// req.send(data);
// console.log("Login Date has Been Captured");
