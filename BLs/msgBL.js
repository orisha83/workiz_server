const sendMsgDAL = require('../DALs/send');
const rcvMsgDAL = require('../DALs/receive');

const getNextMsg = function(id)
{
    console.log('getNextMsg')
    return new Promise((resolve, reject) =>
    {
        rcvMsgDAL.getMsg(id,function(err,msg)
        {
            if(err)
            {
                reject(err)      
            }
            else
            {
                resolve(msg)
            }
        })
    })
}

const addMsg = function(id, obj)
{
    return new Promise((resolve, reject) =>
    {
        sendMsgDAL.sendMsg(id,obj,function(err,msg)
        {
            if(err)
            {
                reject(err)      
            }
            else
            {
                resolve(msg)
            }
        })
    })
}

module.exports = {getNextMsg, addMsg}