var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var x = "1001"
var query = ({
    "land_id": x
}); 



var deedFunc = async function(query)  {
var db
var client
try {
  client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db('deed');
  return await db.collection('deedusers').find(query).toArray();
} finally {
  client.close();
}
}


 deedFunc(query).then(res =>{

	deed_land_id = res[0].land_id;
	deed_name = res[0].name;
	deed_email = res[0].email;
	deed_adhar_number = res[0].adhar_number;
	deed_gender = res[0].gender;
	deed_phone = res[0].phone;
	deed_coordinate_one = res[0].coordinate_one;
	deed_coordinate_two = res[0].coordinate_two;
	deed_area = res[0].area;

	console.log(deed_land_id);
	console.log(deed_name);
	console.log(deed_email);
	console.log(deed_adhar_number);
	console.log(deed_gender);
	console.log(deed_phone);
	console.log(deed_coordinate_one);
	console.log(deed_coordinate_two);
	console.log(deed_area);
 })

