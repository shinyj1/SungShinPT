const db = require("../dbconnection"),
getScdl1Params = body => {
    return {
        wage : body.wage,
        startTime : body.startTime,
        endTime : body.endTime,
        isCovered : body.isCovered,
        rest : body.rest
    };
},
getScdl2Params = body => {
    return {
        overPay : body.overPay,
        night : body.night,
        holiday : body.holiday,
        extra : body.extra
    };
};


/*
exports.showscdl1 = (req, res) => {
    let sql = 'SELECT * FROM parttime where ptMemberId=2';
    let [rows, fields] = await db.query(sql);
    //console.log(rows);
    res.render("schedule1", { pt: rows });
    res.render("schedule1");
};
*/
exports.showscdl2 = (req, res) => {
    res.render("schedule2");
};


exports.testScdl = async (req, res) => {
    let sql = 'SELECT * FROM parttime where ptMemberId=2';
    let [rows, fields] = await db.query(sql);
    //console.log(rows);
    res.render("schedule1", { pt: rows });
};
/*
module.exports = {
    testScdl : async (req, res, next) => {
        let sql = 'SELECT * FROM parttime where ptMemberId=2';
        let [rows, fields] = await db.query(sql);
        //console.log(rows);
        res.render("schedule1", { pt: rows });
        next();
    },
    saveScdl1 : async (req, res, next) => {
        let scdl1Params = await getScdl1Params(req.body);
        res.locals.wage = parseInt(scdl1Params.wage);
        res.locals.startTime = scdl1Params.startTime;
        res.locals.endTime = scdl1Params.endTime;
        res.locals.isCovered = parseInt(scdl1Params.isCovered);
        res.locals.rest = parseInt(scdl1Params.rest);
        res.render("schedule2");
        next();
    },
    addSchedule : async (req, res, next) => {
        let scdl2Params = getScdl2Params(req.body);
        let sql =
        "INSERT INTO schedule(scdlMemId, scdlPtId, isCovered, startTime, endTime, holiday, overPay, rest, night, extra, wage) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        let params = [2, 1, res.locals.isCovered, res.locals.startTime, res.locals.endTime, scdl2Params.holiday, scdl2Params.overPay, res.locals.rest, scdl2Params.night, scdl2Params.extra, res.locals.wage];
        await db.query(sql, params);
        res.render("submit");
    }
}
*/