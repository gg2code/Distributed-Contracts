var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var x = "1001"
var query = ({
    "land_id": x
}); 



var prevdeedFunc = async function(query)  {
var db
var client
try {
  client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db('prevdeed');
  return await db.collection('prevdeedusers').find(query).toArray();
} finally {
  client.close();
}
}


 prevdeedFunc(query).then(res =>{

	prevdeed_land_id = res[0].land_id;
	prevdeed_name = res[0].name;
	prevdeed_email = res[0].email;
	prevdeed_adhar_number = res[0].adhar_number;
	prevdeed_gender = res[0].gender;
	prevdeed_phone = res[0].phone;
	prevdeed_coordinate_one = res[0].coordinate_one;
	prevdeed_coordinate_two = res[0].coordinate_two;
	prevdeed_area = res[0].area;

	console.log(prevdeed_land_id);
	console.log(prevdeed_name);
	console.log(prevdeed_email);
	console.log(prevdeed_adhar_number);
	console.log(prevdeed_gender);
	console.log(prevdeed_phone);
	console.log(prevdeed_coordinate_one);
	console.log(prevdeed_coordinate_two);
	console.log(prevdeed_area);
 })

