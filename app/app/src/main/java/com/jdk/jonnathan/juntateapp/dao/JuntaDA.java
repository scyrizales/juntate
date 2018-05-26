package com.jdk.jonnathan.juntateapp.dao;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.jdk.jonnathan.juntateapp.entidades.Junta;
import com.jdk.jonnathan.juntateapp.entidades.Profile;
import com.jdk.jonnathan.juntateapp.manejadores.Memoria;

import java.util.ArrayList;

public class JuntaDA {

    public static final String TABLA_NOMBRE = "Juntas";
    public static final String COLUMNA_ALIAS = "JuntaAlias";
    public static final String COLUMNA_MONTO_JUNTA = "MontoJunta";
    public static final String COLUMNA_NUM_INTEGRANTES = "NumIntegrantes";
    public static final String COLUMNA_FRECUENCIA = "FrecuenciaPago";
    public static final String COLUMNA_MONTO_PAGO = "MontoPago";
    public static final String COLUMNA_DURACION = "DuracionJunta";

    public static final String SQL_CREAR = "create table "
            + TABLA_NOMBRE + "("
            + COLUMNA_ALIAS + " TEXT NOT NULL PRIMARY KEY, "
            + COLUMNA_MONTO_JUNTA + " TEXT NOT NULL, "
            + COLUMNA_NUM_INTEGRANTES + " TEXT NOT NULL, "
            + COLUMNA_FRECUENCIA + " TEXT NOT NULL, "
            + COLUMNA_MONTO_PAGO + " TEXT, "
            + COLUMNA_DURACION + " TEXT"
            + ");";

    public static final String SQL_REMOVER = "drop table "
            + TABLA_NOMBRE;

    public static final String SQL_SELECT = "select  "
            + COLUMNA_ALIAS + ","
            + COLUMNA_MONTO_JUNTA + ","
            + COLUMNA_NUM_INTEGRANTES + ","
            + COLUMNA_FRECUENCIA + ","
            + COLUMNA_MONTO_PAGO + ","
            + COLUMNA_DURACION
            + " FROM " + TABLA_NOMBRE
            + " ORDER BY " + COLUMNA_ALIAS;

    public JuntaDA() {
    }

    public ArrayList<Junta> listar() {
        ArrayList<Junta> lista = new ArrayList<>();
        SQLiteDatabase handle;
        Cursor cursor = null;
        String query = SQL_SELECT;

        try {
            handle = Memoria.getConexionDB().getReadableDatabase();
            cursor = handle.rawQuery(query, null);

            if (cursor.moveToFirst()) {
                do {
                    Junta o = new Junta();
                    o.setAlias(cursor.getString(cursor.getColumnIndex(COLUMNA_ALIAS)));
                    o.setMontoJunta(cursor.getString(cursor.getColumnIndex(COLUMNA_MONTO_JUNTA)));
                    o.setNumeroIntegrantes(cursor.getInt(cursor.getColumnIndex(COLUMNA_NUM_INTEGRANTES)));
                    o.setFrecuenciaPago(cursor.getString(cursor.getColumnIndex(COLUMNA_FRECUENCIA)));
                    o.setMontoPago(cursor.getString(cursor.getColumnIndex(COLUMNA_MONTO_PAGO)));
                    o.setDuracionJunta(cursor.getString(cursor.getColumnIndex(COLUMNA_DURACION)));
                    lista.add(o);
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

        return lista;
    }

    public boolean adicionar(Junta o) {

        boolean success = true;
        SQLiteDatabase handle;
        long tally = 0;

        try {
            handle = Memoria.getConexionDB().getWritableDatabase();
            if (handle.isOpen()) {

                ContentValues values = new ContentValues();
                values.put(COLUMNA_ALIAS, o.getAlias());
                values.put(COLUMNA_MONTO_JUNTA, o.getMontoJunta());
                values.put(COLUMNA_NUM_INTEGRANTES, o.getNumeroIntegrantes());
                values.put(COLUMNA_FRECUENCIA, o.getFrecuenciaPago());
                values.put(COLUMNA_MONTO_PAGO, o.getMontoPago());
                values.put(COLUMNA_DURACION, o.getDuracionJunta());

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

}
