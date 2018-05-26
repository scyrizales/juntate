package com.jdk.jonnathan.juntateapp.manejadores;

import android.content.Context;

public class Memoria {

    private static SqlHandler conexion;

    public static void setManejadorBaseDatos(Context context) {
        conexion = new SqlHandler(context);
    }

    public static SqlHandler getConexionDB() {
        return conexion;
    }
}
