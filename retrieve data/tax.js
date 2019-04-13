var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var x = "1002"
var query = ({
    "land_id": x
}); 



var taxFunc = async function(query)  {
var db
var client
try {
  client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db('tax');
  return await db.collection('taxusers').find(query).toArray();
} finally {
  client.close();
}
}


 taxFunc(query).then(res =>{

	tax_land_id = res[0].land_id;
	tax_name = res[0].name;
	tax_email = res[0].email;
	tax_adhar_number = res[0].adhar_number;
	tax_gender = res[0].gender;
	tax_phone = res[0].phone;
	tax_coordinate_one = res[0].coordinate_one;
	tax_coordinate_two = res[0].coordinate_two;
	tax_area = res[0].area;
	tax_tax_amt = res[0].tax_amt;
	tax_state = res[0].status;
	tax_date_paid = res[0].date_paid;

	console.log(tax_land_id);
	console.log(tax_name);
	console.log(tax_email);
	console.log(tax_adhar_number);
	console.log(tax_gender);
	console.log(tax_phone);
	console.log(tax_coordinate_one);
	console.log(tax_coordinate_two);
	console.log(tax_area);
	console.log(tax_tax_amt);
	console.log(tax_state);
	console.log(tax_date_paid);
 })

