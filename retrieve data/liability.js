var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var x = "1001"
var query = ({
    "land_id": x
}); 



var liabFunc = async function(query)  {
var db
var client
try {
  client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db('liability');
  return await db.collection('liabilities').find(query).toArray();
} finally {
  client.close();
}
}


 liabFunc(query).then(res =>{

	liab_land_id = res[0].land_id;
	liab_coordinate_one = res[0].coordinate_one;
	liab_coordinate_two = res[0].coordinate_two;
	liab_area = res[0].area;
        liab_liability_status = res[0].liability_status;
	liab_present_liab_type = res[0].present_liability_type;
	liab_liab_history = res[0].liability_history;
	liab_prev_liability_type = res[0].prev_liability_type;



	console.log(liab_land_id);
	console.log(liab_coordinate_one);
	console.log(liab_coordinate_two);
	console.log(liab_area);
	console.log(liab_liability_status);
	console.log(liab_present_liab_type);
	console.log(liab_liab_history);
	console.log(liab_prev_liability_type);
 })

