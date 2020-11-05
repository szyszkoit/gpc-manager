var sqlMap = {
    parcel: {
        getList: 'select id, name, size from parcel',
        getParcelTanks:'SELECT id, name, slotId, backgroundColor FROM tank where parcelId = ? and isExported = 0',
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
        add:"INSERT INTO tank(name, parcelId, slotId, manufacturerId, capacityId, ownerId, valveId, pin, productionYear, comment, workComment, backgroundColor, invoice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        edit: "UPDATE tank SET name=?, parcelId=?, slotId=?, manufacturerId = ?, capacityId = ?, ownerId = ?, valveId = ?, pin = ?, productionYear = ?, comment = ?, workComment = ?, backgroundColor = ?, invoice = ? WHERE id = ?",
        export:"UPDATE tank SET isExported = ?, city = ?, street = ?, exportDate = ? WHERE id = ?",
        deliver:"UPDATE tank SET isDelivered = 1 WHERE id = ?",
        get:"select * from tank where tank.id = ?"
    },
    onTheRoad: {
        getLis: 'select id, name, city, street from tank where isExported = 1 and isDelivered = 0',
        getList:
        'SELECT t.id, '+
        't.name, '+
        't.city, '+
        't.street, '+
        't.exportDate, '+
        'dm.name as manufacturer '+
        'FROM tank t '+
        'LEFT JOIN dictionary_manufacturer dm ON dm.id = t.manufacturerId '+
        'WHERE t.isExported = 1 and t.isDelivered = 0',
    },
    history: {
        getList: 'select * from tank where isDelivered = 1',
    }
}
module.exports = sqlMap;