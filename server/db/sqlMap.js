var sqlMap = {
    parcel: {
        getList: 'select id, name, size from parcel',
        getParcelTanks:'SELECT gpc_manager.tank.id, gpc_manager.tank.name, gpc_manager.tank.slotId '+
        'FROM gpc_manager.tank '+
        'where gpc_manager.tank.parcelId = ? and gpc_manager.tank.isExported = 0',
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
        edit: "UPDATE `gpc_manager`.`tank` SET name=?, parcelId=?, slotId=?, manufacturerId = ?, capacityId = ?, ownerId = ?, valveId = ?, pin = ?, productionYear = ?, comment = ?, workComment = ? WHERE id = ?",
        export:"UPDATE `gpc_manager`.`tank` SET isExported = ?, city = ?, street = ? WHERE id = ?",
        deliver:"UPDATE `gpc_manager`.`tank` SET isDelivered = 1 WHERE id = ?",
        get:"select * from gpc_manager.tank where gpc_manager.tank.id = ?"
    },
    onTheRoad: {
        getList: 'select id, name, city, street from tank where isExported = 1 and isDelivered = 0',
    },
    history: {
        getList: 'select * from tank where isDelivered = 1',
    }
}
module.exports = sqlMap;