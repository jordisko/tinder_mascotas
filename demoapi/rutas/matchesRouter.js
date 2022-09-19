import express from 'express'; 
import { DataTypes } from "sequelize"; 
import sequelize from "../loadSequelize.js";

//DEFINICION DEL MODELO 

const Match = sequelize.define('likes', { 
usuarioid1: DataTypes.INTEGER,
usuarioid2: DataTypes.INTEGER,
estado: DataTypes.TINYINT


}, { tableName: 'likes', timestamps: false }); 
const router = express.Router(); 
// GET lista de todos los likess 
// vinculamos la ruta /api/likess a la función declarada 
// si todo ok devolveremos un objeto tipo: 
// {ok: true, data: [lista_de_objetos_alumne...]} 
// si se produce un error: 
// {ok: false, error: mensaje_de_error} 
router.get('/', function (req, res, next) { 
sequelize.sync().then(() => { 
Match.findAll() 
.then(Match => res.json({ 
ok: true, 
data: Match 
})) 
.catch(error => res.json({ 
ok: false, 
error: error 
})) 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error 
}) 
}); 
}); 
// GET de un solo alumne 
router.get('/:id', function (req, res, next) {

sequelize.sync().then(() => { 
Match.findOne({ where: { id: req.params.id } }) 
// .then(Alumne => Alumne.get({plain: true})) 
.then(Match => res.json({ 
ok: true, 
data: Match 
})) 
.catch(error => res.json({ 
ok: false, 
error: error 
})) 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error 
}) 
}); 
}); 
// POST, creació de un nuev like 
router.post('/', function (req, res, next) { 
sequelize.sync().then(() => { 
Match.create(req.body) 
.then((item) => res.json({ ok: true, data: item })) 
.catch((error) => res.json({ ok: false, error })) 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error 
}) 
}); 
}); 
// put modificació de una likes 
router.put('/:id', function (req, res, next) { 
sequelize.sync().then(() => { 
Match.findOne({ where: { id: req.params.id } }) 
.then((al) => 
al.update(req.body) 
) 
.then((ret) => res.json({ 
ok: true, 
data: ret 
})) 
.catch(error => res.json({ 
ok: false, 
error: error 
})); 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error
}) 
}); 
}); 
// DELETE elimina Like id 
router.delete('/:id', function (req, res, next) { 
sequelize.sync().then(() => { 
Match.destroy({ where: { id: req.params.id } }) 
.then((data) => res.json({ ok: true, data })) 
.catch((error) => res.json({ ok: false, error })) 
}).catch((error) => { 
res.json({ 
ok: false, 
error: error 
}) 
}); 
}); 
export default router;