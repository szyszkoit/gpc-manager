var sqlMap = {
    // user
    parcel: {
        getList: 'select id, name from parcel'
    },
    user: {
        add: 'insert into goods(id, name, price) values (0, ?, ?)'
    }
}
module.exports = sqlMap;