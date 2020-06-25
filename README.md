Contains all apis

prerequisite: postgresql should be there on the machine.

Steps to use :

clone the repo

use "npm install" to install dependencies

then run "npm start" to run the application

Use following postman collection: https://www.getpostman.com/collections/06934cd792ca750d18e9


#1. Setup Db:

get

http://localhost:4000/setupDb/all

will create tables accordingly.

response-> 

{
    "data": "Insertion Successfull"
}


#2. SignUp:

post

http://localhost:4000/user/signup

need request body in following format:

{
    "email" : "abc123",
    "mobile" : "9462852666",
    "password" : "abc123",
    "confirmPassword" : "abc123"
}

response->
{
    "id": 6,
    "token": "joxNTkzNzIxNDg4fQ.WhSSeOeZX8bRMj5Sy63NmJZpTBecfNf7OwDuJT4Yfko",
    "email": "abc123"
}

#3. Login:

post

http://localhost:4000/user/login

need request body in following format:

{
    "email" : "abc123",
    "password" : "abc123"
}

response->

{
    "id": 6,
    "email": "abc123",
    "token": "cxMywiZXhwIjoxNTkzNzIxNTEzfQ.vZ9Wm5I7pnxkXAmrINukSL6KFfzKTChEnhGM26riano"
}


#4. get provinces list:

get

http://localhost:4000/provinces/getProvincesList

response-> 

[
    {
        "pname": "Blagoevgrad"
    },
    {
        "pname": "Burgas"
    }
]


$5.get installment options:

get

http://localhost:4000/mtpl/getInstallmentOptions

response-> 

[
    {
        "title": "Single Payment",
        "subtitle": "Best value",
        "amount": 4039999,
        "saving": 60497,
        "installmentsCount": 1,
        "discounts": [],
        "installments": []
    },
    {
        "title": "Two Payments",
        "subtitle": "Every 6 months",
        "amount": 4060098,
        "saving": 40398,
        "installmentsCount": 2,
        "discounts": 0,
        "installments": [
            2030049,
            2030049
        ]
    },
    {
        "title": "Four Payments",
        "subtitle": "Every 3 months",
        "amount": 4100496,
        "saving": 0,
        "installmentsCount": 4,
        "discounts": 0,
        "installments": [
            1025124,
            1025124,
            1025124,
            1025124
        ]
    }
]


#6. post purchase policy data

post

http://localhost:4000/mtpl/postPurchasePolicy

need request body in following format:

{
        "id": "8",
        "contactinformation": {
            "abc": "abc"
        },
        "deliveryinformation": {
            "abc": "abc"
        },
        "personalinformation": {
            "abc": "abc"
        },
        "vehicleownerinformation": {
            "abc": "abc"
        }
}

response->

{
    "data": "Data uploaded"
}


#7. post mtpl calculator data:

post

http://localhost:4000/mtpl/postmtplCalculator

need request body in following format:

{
        "id": "7",
        "vehicleinfo":{
            "abc":"abc"
        },
        "insuringparty":{
            "abc":"abc"
        },
        "policy":{
            "abc":"abc"
        },
        "installment":{
            "abc":"abc"
        },
        "additionalcovers":{
            "abc":"abc"
        }
}

response->

{
    "data": "data uploaded"
}


#8. get purchase policy

post

http://localhost:4000/mtpl/getPurchasePolicy

need request body in following format:

{
    "id":"6"
}

response ->

{
    "data": {
        "id": "6",
        "contactinformation": {
            "a": "b"
        },
        "deliveryinformation": {
            "e": "f"
        },
        "personalinformation": {
            "c": "d"
        },
        "vehicleownerinformation": {
            "q": "r"
        }
    }
}

#9. get mtpl calculator

post

http://localhost:4000/mtpl/getmtplCalculator

need request body in following format:

{
    "id":"6"
}

response->

{
    "data": {
        "id": "6",
        "vehicleinfo": {
            "abc": "abc"
        },
        "insuringparty": {
            "abc": "abc"
        },
        "policy": {
            "abc": "abc"
        },
        "installment": {
            "abc": "abc"
        },
        "additionalcovers": {
            "abc": "abc"
        }
    }
}