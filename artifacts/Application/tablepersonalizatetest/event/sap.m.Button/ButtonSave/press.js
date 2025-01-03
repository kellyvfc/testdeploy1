var emailadressT = [];
var emailadress = "pascoalext@triton-partners.com";

emailadressT.push(emailadress);
emailadress = "veronica.fernandez@triton-partners.com";
emailadressT.push(emailadress);

// emailadress = "fleming.wp@triton-partners.com";
// emailadressT.push(emailadress);

// emailadress = "luca.maggiacomo@triton-partners.com";
// emailadressT.push(emailadress);

var fromemail = "daniela.pascoal@triton-partners.com";

let title = modelSimpleForm.getData().tittle;
let requesterEmail = fromemail;
// let requesterEmail = modelSimpleForm.getData().requesterEmail;
let requestorName = modelSimpleForm.getData().requestorName;
// let approverEmail = modelSimpleForm.getData().approverEmail;
let approverEmail = fromemail;
let approverName = modelSimpleForm.getData().approverName;
let fromDate = formateDate(modelSimpleForm.getData().fromDate);
let toDate = formateDate(modelSimpleForm.getData().toDate);
let reason = modelSimpleForm.getData().reason;
let idCount = generateSerialNumber();

let image =
    "https://www.mobile.neptune-software.com/wp-content/uploads/2021/08/Hero-image-Company-page.png";

// data to save on table to show on app
let demoCardsdata = {
    tittle: title,
    requesterEmail: requesterEmail,
    requestorName: requestorName,
    approverEmail: approverEmail,
    approverName: approverName,
    fromDate: fromDate,
    toDate: toDate,
    reason: reason,
    idCount: idCount,
};
var options = {
    data: demoCardsdata,
};

apidemocardsPost(options);

// Data that i will send in the email card
var data = JSON.stringify({
    fromemail: fromemail,
    emailadress: emailadressT,
    title,
    requestorName,
    image: image,
    reason,
    fromDate,
    toDate,
    idCount,
});
var req = new XMLHttpRequest();
var url =
    "https://prod-43.northeurope.logic.azure.com:443/workflows/fffb3f6024e8419bba157e8c8e33c8ba/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=DpgcVfxhS3lBa8TAJywaT0xV-u0QZk_d-LCMXW4rkUc";
// var url =
//     "https://prod-59.northeurope.logic.azure.com:443/workflows/19fc851637e949bc9218774b4aafcdb0/triggers/manual/paths/invoke?api-version=2016-06-01";
// "https://prod-204.westeurope.logic.azure.com:443/workflows/f3271149a4954ff591888dd4bc2e3a39/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z6t9viSAWuTcpXwH3ITjkobPhLcVpm0dqMNSVXsr3DU"
req.open("POST", url, true);
req.setRequestHeader("Content-Type", "application/json");

req.send(data);
console.log("Login Date has Been Captured");
