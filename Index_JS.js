/* function doGet(e){
  var template = HtmlService.createTemplateFromFile('Index');
  return template.evaluate()
      .setTitle('Reel Form')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

  let ss = SpreadsheetApp.getActive()
  let itemDetails = ss.getSheetByName('Item Details')
  let order = ss.getSheetByName('Order')
  let setting = ss.getSheetByName('Setting')
  let purchase = ss.getSheetByName('Purchase')
  let vsheetID = "13jEnrRSMDsTGbABXCQdrSpF8A87w_h2JHTiTcOtHxsU"

function sendOData(odata){
  var time = new Date()
  var orderS = setting.getRange('B1').getValue()
  var count = setting.getRange('B2').getValue()

  odata.forEach((a)=>{
    a.unshift(orderS+count)
      a.unshift(time)
    order.appendRow(a)
})
setting.getRange('B2').setValue(count+1)
}




function gsmandsize(){
   let allitems = itemDetails.getRange('A2:D').getValues().filter(f=>f[0])
   console.log(allitems)
   let colors = itemDetails.getRange('C2:C').getValues().filter(f=>f[0]).flat(Infinity)
   let designs = itemDetails.getRange('D2:D').getValues().filter(f=>f[0]).flat(Infinity)
   return allitems



   function getSize(value){
    let allSize = itemDetails.getRange('A2:B').getValues().filter(f =>f[0] == value ).flat(Infinity)
    console.log(allSize)
    return allSize[1];
}


function partyNames(){
  let vSS = SpreadsheetApp.openById(vsheetID)
  let vendorR = vSS.getSheetByName('Vender Response')
  let partyName = vendorR.getRange("B2:B").getValues().filter(f=>f[0]).flat(Infinity)
  return partyName;
}
  
function sendPData(pdata){
pdata.forEach((a)=>{
      a.unshift("OPENING")
      a.unshift(time)
    purchase.appendRow(a)
})

}



}

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.datatables.net/2.0.0/css/dataTables.dataTables.css" />

  <style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
  </style>
</head>

<body>
  <section class="py-5 container">
    <h2>Reel Order Form</h2>

    <div class="d-flex justify-content-center">
      <button
          onclick="hideUnhide(this.id)"
          class="btn bg-secondary-subtle"
          id="order"
        >
          Order
        </button>
      <button
          onclick="hideUnhide(this.id)"
          class="d-none btn bg-warning-subtle"
          id="purchase"
        >
          Purchase
        </button>
    </div>

    <form class="px-3 py-3">
      <div class="row mb-3 bg-secondary-subtle p-3" id="reelOrder">
        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="partyName" class="form-label fw-bold">Party Name</label>
          <input
              class="form-control"
              list="partyNames"
              id="partyName"
              placeholder="Type to search..."
            />
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="reelGSM" class="form-label">Reel GSM</label>
          <input
          oninput="getSize(this.id)"
              class="form-control"
              list="reelGSMs"
              id="oreelGSM"
              placeholder="Type to search..."
            />

        </div>


        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="reelSIZE" class="form-label">Reel Size</label>
          <input
              class="form-control"
              list="reelSIZEs"
              id="oreelSIZE"
              placeholder="Type to search..."
            />
        </div>


        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="reelWeight" class="form-label">Reel Weight in KG</label>
          <input
              class="form-control"
              type="number"
              id="oreelWeight"
              placeholder="Enter Weight in KG"
            />
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="reelNumber" class="form-label"
              >No. of Reels Order</label>
          <input
              class="form-control"
              type="number"
              id="oreelNumber"
              placeholder="Reel Count"
            />
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="actEST" class="form-label"
              >Is Reel Weight Actual OR Estimated</label>
          <select class="form-control" id="oactEST">
              <option value="Actual">Actual</option>
              <option value="Estimate">Estimate</option>
            </select>
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="cutSize" class="form-label">Cut Size</label>
          <input
              class="form-control"
              type="number"
              id="ocutSize"
              placeholder="Reel Count"
            />
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="ocolor" class="form-label">Color</label>

          <input
              class="form-control"
              list="color"
              id="ocolor"
              placeholder="Type to search..."
            />
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="odesign" class="form-label">Design</label>
          <input
              class="form-control"
              list="design"
              id="odesign"
              placeholder="Type to search..."
            /> 
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="note" class="form-label">Production Notes</label>
          <textarea class="form-control" id="onote"> </textarea>
        </div>
        <div class="d-flex justify-content-evenly my-3">
          <input
              onclick="oSubmit()"
              class="btn btn-primary styled"
              type="button"
              value="Submit"
            />
          <input
              type="button"
              class="btn btn-success"
              onclick="oADD()"
              value="Add"
            />
          <input
              type="button"
              class="btn btn-danger"
              value="Remove"
              onclick="odelete()"
            />
        </div>
      </div>

      <div class="row mb-3 d-none bg-warning-subtle p-3" id="reelPurchase">
        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="partyName2" class="form-label fw-bold">Party Name</label>
          <input
              class="form-control"
              list="partyNames"
              id="partyNames2"
              placeholder="Type to search..."
            />
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="reelGSM" class="form-label">Reel GSM</label>
          <input
              getSize(this.id)
              class="form-control"
              list="reelGSMs"
              id="preelGSM"
              placeholder="Type to search..."
            />
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="reelSIZE" class="form-label">Reel Size</label>
          <input
              class="form-control"
              list="reelSIZEs"
              id="preelSIZE"
              placeholder="Type to search..."
            />
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="reelWeight" class="form-label">Reel Weight in KG</label>
          <input
              class="form-control"
              type="number"
              id="preelWeight"
              placeholder="Enter Weight in KG"
            />
        </div>

        <div class="mb-3 col-10 col-sm-6 col-md-4">
          <label for="note" class="form-label">Production Notes</label>
          <textarea class="form-control" id="pnote"> </textarea>
        </div>

        <div class="d-flex justify-content-evenly my-3">
          <input
          onclick="pSubmit()"
              class="btn btn-primary styled"
              type="button"
              value="Submit"
            />
          <input
              type="button"
              class="btn btn-success"
              onclick="pADD()"
              value="Add"
            />
          <input
              type="button"
              class="btn btn-danger"
              value="Remove"
              onclick="pdelete()"
            />
        </div>
      </div>
    </form>
    <div id="table"></div>
  </section>

          <datalist id="partyNames"></datalist>
          <datalist id="design"></datalist>
          <datalist id="color"></datalist>
          <datalist id="reelSIZEs"></datalist>
          <datalist id="reelGSMs"></datalist>

  <?!=include('script');?>
</body>

</html>

<script>

document.addEventListener("DOMContentLoaded", () => {
  google.script.run.withSuccessHandler(names => {
    const venderName = document.getElementById('partyNames');
    names.forEach(n => {
      let opt1 = document.createElement('option');
      opt1.value = n;
      venderName.appendChild(opt1);
    });
  }).partyNames();

  google.script.run.withSuccessHandler(alldata => {
    const gsm = document.getElementById('reelGSMs');
    const sizes = document.getElementById('reelSIZEs');
    const color = document.getElementById('color');
    const design = document.getElementById('design');

alldata.forEach(n =>{
      if (n[0]) {
        let opt1 = document.createElement('option');
        opt1.value = n[0];
        opt1.textContent = n[0]; // Use n[0] for both value and textContent
        gsm.appendChild(opt1);
      }
      if (n[2]) {
        let opt3 = document.createElement('option');
        opt3.value = n[2];
        opt3.textContent = n[2]; // Use n[2] for both value and textContent
        color.appendChild(opt3);
      }
      if (n[3]){
        let opt4 = document.createElement('option');
        opt4.value = n[3];
        opt4.textContent = n[3]; // Use n[3] for both value and textContent
        design.appendChild(opt4);
      }
    })
}).gsmandsize();
})
  
const dataSet = [];
const setData = [];

function oADD(){

  let ids = ["partyName","oreelGSM","oreelSIZE","oreelWeight","oreelNumber","oactEST","ocutSize","ocolor","odesign","onote"]

    let data =  []
    for(let i = 0 ; i < ids.length; i++){
         let value = document.getElementById(ids[i]).value 
         data.push(value)
         }
    console.log(data)
    dataSet.push(data)
    setData.push(data)
    createTable()
}

function createTable(){
document.getElementById('table').innerHTML = ""
createTableInsideDiv('table',"example")

new DataTable("#example", {
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  columns: [
    { title: "partyName" },
    { title: "oreelGSM" },
    { title: "oreelSIZE" },
    { title: "oreelWeight" },
    { title: "oreelNumber" },
    { title: "oactEST" },
    { title: "ocutSize" },
    { title: "ocolor" },
    { title: "odesign" },
    { title: "onote" },
  ],
  data: dataSet,
});
}

function createTableInsideDiv(tcon,example) {
    var targetDiv = document.getElementById(tcon);
    var tableElement = document.createElement('table');
    tableElement.id = example;
    tableElement.className = 'display';
    tableElement.width = '100%';
    targetDiv.appendChild(tableElement);
}

function odelete(){
  dataSet.pop()
  createTable()
}

const dataSet2 = [];
const setData2 = [];

function pADD(){

  let ids = ["partyName2","preelGSM","preelSIZE","preelWeight","pnote"]
  let data =  []

    for(let i = 0 ; i < ids.length; i++){
         let value = document.getElementById(ids[i]).value 
         data.push(value)
         }

    console.log(data)
    dataSet2.push(data)
    setData2.push(data)
    pcreateTable()
}

function pcreateTable(){
document.getElementById('table').innerHTML = ""
createTableInsideDiv('table',"example")

new DataTable("#example", {
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  columns: [
    { title: "partyName2" },
    { title: "preelGSM" },
    { title: "preelSIZE" },
    { title: "preelWeight"},
    { title: "pnote" },
  ],
  data: dataSet2,
});
}

function createTableInsideDiv(tcon,example) {
    var targetDiv = document.getElementById(tcon);
    var tableElement = document.createElement('table');
    tableElement.id = example;
    tableElement.className = 'display';
    tableElement.width = '100%';
    targetDiv.appendChild(tableElement);
}

function pdelete(){
  dataSet2.pop()
  pcreateTable()
}

function oSubmit(){
document.getElementById('table').innerHTML = ""
  let ids = ["partyName","oreelGSM","oreelSIZE","oreelWeight","oreelNumber","oactEST","ocutSize","ocolor","odesign","onote"]
for(let i = 0 ; i < ids.length; i++){
    let value = document.getElementById(ids[i]).value = "" 
}

google.script.run.sendOData(setData)
}

function pSubmit(){
      google.script.run.sendPData(setData2)
}
function hideUnhide(bid) {
  let ids = ["order", "purchase", "reelOrder", "reelPurchase"]
  ids.map((id) => {
    document.getElementById(id).classList.toggle("d-none")
  })
document.getElementById('table').innerHTML = ""
}

function getSize(id){
  console.log(id)
  let gsmid = document.getElementById(id)
  let value = gsmid.value
  let dataList = document.getElementById('reelSIZEs')
  dataList.innerHTML = ""
  google.script.run.withSuccessHandler((sizes)=>{
    let allSize = sizes.split(',')
    console.log(allSize)
        allSize.map(m=>{
          let opt1 = document.createElement('option');
          opt1.value = m;
          dataList.appendChild(opt1);
    })
}).getSize(value)
}

</script>

*/
