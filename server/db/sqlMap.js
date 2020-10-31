var sqlMap = {
    parcel: {
        getList: 'select id, name, size from parcel',
        getParcelTanks:'SELECT tank.id, tank.name, tank.slotId '+
        'FROM tank '+
        'where tank.parcelId = ? and tank.isExported = 0',
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
        add:"INSERT INTO tank (name, parcelId, slotId, manufacturerId, capacityId, ownerId, valveId, pin, productionYear, comment, workComment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        edit: "UPDATE tank SET name=?, parcelId=?, slotId=?, manufacturerId = ?, capacityId = ?, ownerId = ?, valveId = ?, pin = ?, productionYear = ?, comment = ?, workComment = ? WHERE id = ?",
        export:"UPDATE tank SET isExported = ?, city = ?, street = ? WHERE id = ?",
        deliver:"UPDATE tank SET isDelivered = 1 WHERE id = ?",
        get:"select * from tank where tank.id = ?"
    },
    onTheRoad: {
        getList: 'select id, name, city, street from tank where isExported = 1 and isDelivered = 0',
    },
    history: {
        getList: 'select * from tank where isDelivered = 1',
    }
}
module.exports = sqlMap;