var sqlMap = {
    parcel: {
        getList: 'select id, name, size from parcel',
        getParcelTanks:'SELECT gpc_manager.tank.id, gpc_manager.tank.name, gpc_manager.tank.slotId '+
        'FROM gpc_manager.tank '+
        'where gpc_manager.tank.parcelId = ?',
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
    },
    tank: {
        add:"INSERT INTO `gpc_manager`.`tank` (`name`, `parcelId`, `slotId`, `manufacturerId`, `capacityId`, `ownerId`, `valveId`, `pin`, `productionYear`, `comment`, `workComment`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        get:"select * from gpc_manager.tank where gpc_manager.tank.id = ?"
    }
}
module.exports = sqlMap;