const { Op, Model } = require("sequelize");
const { Op2 } = require("sequelize");

Model.findAllMatchesfrom(id){
    attributes: ['usuarioid2']
    where: {
        [Op.and]: [
            {estado: 1},
            {usuarioid2: Model.findAllMatches2from(id){
                attributes:['usuarioid2']
                where:{
                    [Op2.and]:[
                        {estado:1},
                        {usuarioid1}
                    ]
                }
            } }]
    }


  };