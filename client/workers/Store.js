import IndexDB from "idb";

function Store() {
    this.dbPromise = IndexDB.open('keyval-store', 1, upgradeDB => {
        upgradeDB.createObjectStore('keyval');
    });
}


Store.prototype.get = function(key) {
    return this.dbPromise.then(db => {
        return db.transaction('keyval')
            .objectStore('keyval').get(key);
    });
};

Store.prototype.set = function(key, val) {
    return this.dbPromise.then(db => {
        const tx = db.transaction('keyval', 'readwrite');
        tx.objectStore('keyval').put(val, key);
        return tx.complete;
    });
};

Store.prototype.delete = function(key) {
    return this.dbPromise.then(db => {
        const tx = db.transaction('keyval', 'readwrite');
        tx.objectStore('keyval').delete(key);
        return tx.complete;
    });
};

Store.prototype.clear = function() {
    return this.dbPromise.then(db => {
        const tx = db.transaction('keyval', 'readwrite');
        tx.objectStore('keyval').clear();
        return tx.complete;
    });
};

Store.prototype.keys = function() {
    return this.dbPromise.then(db => {
        const tx = db.transaction('keyval');
        const keys = [];
        const store = tx.objectStore('keyval');

        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // openKeyCursor isn't supported by Safari, so we fall back
        (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
            if (!cursor) return;
            keys.push(cursor.key);
            cursor.continue();
        });

        return tx.complete.then(() => keys);
    });
};


export { Store };