// const sqlite3 = require('sqlite3').verbose();
// const express = require('express');

//  const db = new sqlite3.Database('./explore.db' );

//  const app = express();

//  app.get('/read', (req, res) => {
//     const query = `SELECT ${req?.body?.field} FROM ${req?.body?.table};`;
//     db.all(query, [], (err, rows) => {
//         if (err) {
//             // msg = err.message
//             return res.status(400).json(err);
//         } else {
//             return res.status(200).json(rows);
//         }
//     });
// });