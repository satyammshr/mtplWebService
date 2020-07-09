// const connection = require("../../../resources/config/dev-setup.json")
// const pgp = require("pg-promise")()

// const db = pgp(connection)

const db = require ('../../mongomodels/index')


const operations = {}

const provinces = [
    {
        "pname": "Blagoevgrad"
    },
    {
        "pname": "Burgas"
    },
    {
        "pname": "Dobrich"
    },
    {
        "pname": "Gabrovo"
    },
    {
        "pname": "Haskovo"
    },
    {
        "pname": "Kardzhali"
    },
    {
        "pname": "Kyustendil"
    },
    {
        "pname": "Lovech"
    },
    {
        "pname": "Montana"
    },
    {
        "pname": "Pazardzhik"
    },
    {
        "pname": "Pernik"
    },
    {
        "pname": "Pleven"
    },
    {
        "pname": "Plovdiv"
    },
    {
        "pname": "Razgrad"
    },
    {
        "pname": "Ruse"
    },
    {
        "pname": "Shumen"
    },
    {
        "pname": "Silistra"
    },
    {
        "pname": "Sliven"
    },
    {
        "pname": "Smolyan"
    },
    {
        "pname": "Sofia-grad"
    },
    {
        "pname": "Sofia (province)"
    },
    {
        "pname": "Stara Zagora"
    },
    {
        "pname": "Targovishte"
    },
    {
        "pname": "Varna"
    },
    {
        "pname": "Veliko Tarnovo"
    },
    {
        "pname": "Vidin"
    },
    {
        "pname": "Vratsa"
    },
    {
        "pname": "Yambol"
    }
]

// const cs = new pgp.helpers.ColumnSet(['pname'], { table: 'provinces' })
// const query = () => pgp.helpers.insert(provinces, cs);
// const createUsersTable = "CREATE TABLE users (id SERIAL PRIMARY KEY,email VARCHAR(50) UNIQUE NOT NULL,password VARCHAR(1000) NOT NULL,createdAt TIMESTAMP,updatedAt TIMESTAMP,mobile VARCHAR(10) UNIQUE NOT NULL);"

// const operations = {}

// operations.setupDb = (req,res) => {
//     return db.any('drop schema public cascade; create schema public').then(data=>{
//     return db.any('CREATE TABLE provinces (pname text)')
//         .then(data => {
//             return db.any(createUsersTable).then(data => {
//                 return db.any("CREATE TABLE mtplcalculator (id text primary key, vehicleinfo json,insuringparty json,policy json,installment json,additionalcovers json)").then(data => {
//                     return db.any("CREATE TABLE purchasepolicy (id text primary key,contactinformation json,deliveryinformation json,personalinformation json,vehicleownerinformation json)").then(data => {
//                         return db.any(query).then(data => {
//                             res.status(200).send({data:"Insertion Successfull"})
//                         })
//                     })
//                 })
//             })
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     })
// }


operations.setupdb = () =>{
    
    return db.provinces().then((details)=>{
        return details.deleteMany().then(()=>{
            return details.insertMany(provinces).then((data)=>{
            if(data){
                console.log(data)
                return "DB setup Succcessful"
            }
            else{
                let err=new Error("DB setup Failed");
                err.status=400;
                throw err;
            }
        })})
    })

              
}

module.exports = operations;

