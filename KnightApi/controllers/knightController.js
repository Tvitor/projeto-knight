let knightController = function (Knight) {

    let get = function (req, res) {

        Knight.find(function (err, knights) {
            knights.forEach(knight => {
                if (knight.name == "Quigon") {
                    knight.name = "Vitor"
                }
            });
            if (err) {
                res.status(500)
                res.send("internal error")
            } else {
                res.status(200)

                res.send(knights)
            }
        })
    }

    let add = function (req, res) {

        let knight = new Knight(req.body)

        knight.save(function (err) {
            if (err) {
                res.status(500);
                res.send('Error : failed...');
            } else {
                res.status(201);
                res.send(knight);
            }
        })
    };

    let getById = function (req, res) {
        Knight.findById(req.params.id, function (err, knight) {
            if (err) {
                res.status(404);
                res.send("knight not found")
            } else {
                res.status(200)
                res.send(knight)
            }
        })
    }

    let update = function (req, res) {

        Knight.findById(req.params.id, function (err, knight) {
            if (err) {
                res.status(404)
                res.send("Knight Not found")
            } else {
                knight.name = req.body.name;
                knight.nickname = req.body.nickname;
                knight.birthday = req.body.birthday;
                knight.weapons = req.body.weapons;
                knight.attributes = req.body.attributes;
                knight.keyAttribute = req.body.keyAttribute;

                knight.save(function (err) {
                    if (!err) {
                        res.status(200)
                        res.send(knight)
                    } else {
                        res.status(500);
                        res.send('Error on update')

                    }
                })
            }
        })
    }

    let del = function (req, res) {
        Knight.findById(req.params.id, function (err, knight) {
            knight.remove(function (err) {
                if (!err) {
                    res.status(204)
                    res.send('knight deleted')
                }
            })
        })
    }

    return {
        add: add,
        get: get,
        getById: getById,
        update: update,
        del: del
    }
}
module.exports = knightController