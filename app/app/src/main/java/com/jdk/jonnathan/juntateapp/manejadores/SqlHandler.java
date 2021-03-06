package com.jdk.jonnathan.juntateapp.manejadores;

import android.content.Context;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import com.jdk.jonnathan.juntateapp.dao.JuntaDA;
import com.jdk.jonnathan.juntateapp.dao.UsuarioDA;

public class SqlHandler extends SQLiteOpenHelper {

    public static final String APP_DATABASE = "juntate.db";
    public static final int APP_DATABASE_VERSION = 6;

    public SqlHandler(Context context) {
        super(context, APP_DATABASE, null, APP_DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

        try {
            //db.execSQL(ProfileDA.SQL_CREAR);


        } catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        try {

            if (newVersion == 3) {
                db.execSQL(UsuarioDA.SQL_CREAR);
            } else if (newVersion == 5) {
                db.execSQL(JuntaDA.SQL_CREAR);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
    }

}
