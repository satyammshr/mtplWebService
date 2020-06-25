module.exports = {
    getInstallmentOptions : function getInstallmentOptions(req,res) {
        let data = [
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
        res.status(200).send(data)
    }
}