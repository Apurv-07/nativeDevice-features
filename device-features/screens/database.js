import * as SQLite from 'expo-sqlite';
import React from 'react'

const database=SQLite.openDatabase('places.db'); //If exists then open it, if not creating one and open it
export function init(){ //Needs to run atleast once for the structure defining
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
            )`,
            [],
            ()=>{
                resolve();
            },
            (_,error)=>{
                reject();
            },
          );
        });
    })
    return promise;
}
export function insertPlace(place){
    const promise=new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`INSERT INTO places (title, imageUri) VALUES (?, ?)`, [place.title, place.imageUri],
            (_,result)=>{
                console.log(result);
                resolve(result);
            },
            (_, error)=>{
                reject(error)
            }
            
            )
        });
    })
    return promise;
}