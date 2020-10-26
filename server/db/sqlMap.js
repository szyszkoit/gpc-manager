var sqlMap = {
    parcel: {
        getList: 'select id, name, size from parcel'
    },
    user: {
        add: 'insert into goods(id, name, price) values (0, ?, ?)'
    },
    manufacturer: {
        getList: 'select id, name from dictionary_manufacturer where deleted = 0'
    },
    capacity: {
        getList: 'select id, name from dictionary_capacity where deleted = 0'
    },
    owner: {
        getList: 'select id, name from dictionary_owner where deleted = 0'
    },
    valve: {
        getList: 'select id, name from dictionary_valve where deleted = 0'
    }
}
module.exports = sqlMap;