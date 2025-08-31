import * as SQLite from 'expo-sqlite'


class sqliteDB {
    constructor(tableName) {
        this.tableName = tableName
    }

    init = async () => {
        try {
            const db = await SQLite.openDatabaseAsync('./database.db')
            
            await db.execAsync(`CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER); 
                INSERT INTO test (value, intValue) VALUES ('test1', 123);
                INSERT INTO test (value, intValue) VALUES ('test2', 456);
                INSERT INTO test (value, intValue) VALUES ('test3', 789);
                `)
        } catch (error) {
            console.log('ERROR:', error)
        }
    }

    getAll = async () => {
        try {
            const db = await SQLite.openDatabaseAsync('./database.db')
            const allRows = await db.getAllAsync('SELECT * FROM test')

            console.log('\nTable values:')

            for (const row of allRows) {
                console.log(`[${row.id}] ${row.value} = ${row.intValue}`);
            }
        } catch (error) {
            console.log('ERROR:', error)
        }
    }

    deleteAll = async () => {
        const db = await SQLite.openDatabaseAsync('./database.db')

        try {
            await db.execAsync(`DELETE FROM test`)
        } catch (error) {
            console.log('ERROR:', error)
        }
    }
}

export const appConfigDB = new sqliteDB("appConfig")