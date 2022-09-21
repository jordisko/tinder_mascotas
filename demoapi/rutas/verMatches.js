// const { Op, Model } = require("sequelize");
// const { Op2 } = require("sequelize");

// Model.findAll(id){
//     attributes: ['usuarioid2']
//     where: {
//         [Op.and]: [
//             {estado: 1},
//             {usuarioid2: Model.findAllMatches2from(id){
//                 attributes:['usuarioid2']
//                 where:{
//                     [Op2.and]:[
//                         {estado:1},
//                         {usuarioid1}
//                     ]
//                 }
//             } }]
//     }
// };

const { QueryTypes } = require('sequelize');
const users = await sequelize.query("SELECT usuarioid2 from likes where estado=1 AND usuarioid2 IN (SELECT usuarioid2 FROM likes WHERE usuarioid1 = id AND estado=1)", { type: QueryTypes.SELECT });