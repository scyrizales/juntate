package com.jdk.jonnathan.juntateapp.dao;


import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.jdk.jonnathan.juntateapp.entidades.Profile;
import com.jdk.jonnathan.juntateapp.manejadores.Memoria;

public class ProfileDA {

    public static final String TABLA_NOMBRE = "Profiles";
    public static final String COLUMNA_ID = "ProfileId";
    public static final String COLUMNA_NOMBRES = "ProfileName";
    public static final String COLUMNA_CUENTA = "BankAccount";
    public static final String COLUMNA_EMAIL = "Email";
    public static final String COLUMNA_PASSWORD = "Password";

    public static final String SQL_CREAR = "create table "
            + TABLA_NOMBRE + "("
            + COLUMNA_ID + " INTEGER NOT NULL PRIMARY KEY, "
            + COLUMNA_NOMBRES + " TEXT NOT NULL, "
            + COLUMNA_CUENTA + " TEXT NOT NULL, "
            + COLUMNA_EMAIL + " TEXT NOT NULL, "
            + COLUMNA_PASSWORD + " TEXT NOT NULL"
            + ");";

    public static final String SQL_REMOVER = "drop table "
            + TABLA_NOMBRE;

    public static final String SQL_SELECT = "select  "
            + COLUMNA_ID + ","
            + COLUMNA_NOMBRES + ","
            + COLUMNA_CUENTA + ","
            + COLUMNA_EMAIL + ","
            + COLUMNA_PASSWORD
            + " FROM " + TABLA_NOMBRE
            + " ORDER BY " + COLUMNA_NOMBRES;

    public ProfileDA() {
    }

    public Profile login(String email, String password) {

        Profile o = new Profile();
        SQLiteDatabase handle;
        Cursor cursor = null;
        StringBuilder sqlLoin = new StringBuilder(100);
        String query;

        try {
            handle = Memoria.getConexionDB().getReadableDatabase();
            sqlLoin.append("select * from ");
            sqlLoin.append(TABLA_NOMBRE);
            sqlLoin.append(" Where ");
            sqlLoin.append(COLUMNA_EMAIL);
            sqlLoin.append(" = ? and ");
            sqlLoin.append(COLUMNA_PASSWORD);
            sqlLoin.append(" = ?");
            query = sqlLoin.toString();

            cursor = handle.rawQuery(query, new String[]{email, password});

            if (cursor.moveToFirst()) {
                do {
                    o = new Profile();
                    o.setId(cursor.getInt(cursor.getColumnIndex(COLUMNA_ID)));
                    o.setNombre(cursor.getString(cursor.getColumnIndex(COLUMNA_NOMBRES)));
                    o.setCuentabancaria(cursor.getString(cursor.getColumnIndex(COLUMNA_CUENTA)));
                    o.setEmail(cursor.getString(cursor.getColumnIndex(COLUMNA_EMAIL)));
                    o.setPassword(cursor.getString(cursor.getColumnIndex(COLUMNA_PASSWORD)));
                    break;
                } while (cursor.moveToNext());
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        } finally {
            if (cursor != null) {
                try {
                    cursor.close();
                    cursor = null;
                } catch (Exception e) {
                }
            }
        }
        handle = null;
        query = null;

        return o;
    }

    public boolean adicionar(Profile o) {

        boolean success = true;
        SQLiteDatabase handle;
        long tally = 0;

        try {
            handle = Memoria.getConexionDB().getWritableDatabase();
            if (handle.isOpen()) {

                ContentValues values = new ContentValues();
                values.put(COLUMNA_ID, o.getId());
                values.put(COLUMNA_NOMBRES, o.getNombre());
                values.put(COLUMNA_CUENTA, o.getCuentabancaria());
                values.put(COLUMNA_EMAIL, o.getEmail());
                values.put(COLUMNA_PASSWORD, o.getPassword());

                tally = handle.insert(TABLA_NOMBRE, (String) null, values);
                success = tally > 0L;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
            success = false;
        } finally {
        }

        return success;
    }

    public boolean actualizar(Profile o) {
        boolean success = true;
        SQLiteDatabase handle;
        long tally = 0;

        try {
            handle = Memoria.getConexionDB().getWritableDatabase();
            if (handle.isOpen()) {
                ContentValues values = new ContentValues();
                values.put(COLUMNA_ID, o.getId());
                values.put(COLUMNA_NOMBRES, o.getNombre());
                values.put(COLUMNA_CUENTA, o.getCuentabancaria());
                values.put(COLUMNA_EMAIL, o.getEmail());
                values.put(COLUMNA_PASSWORD, o.getPassword());

                tally = handle.update(TABLA_NOMBRE, values, COLUMNA_ID + " = ?", new String[]{o.getId() + ""});
                success = tally > 0L;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
            success = false;
        } finally {
        }

        return success;
    }

}
