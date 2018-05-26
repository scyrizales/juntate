package com.jdk.jonnathan.juntateapp.entidades;

public class Junta {

    private String alias;
    private String montoJunta;
    private int numeroIntegrantes;
    private String frecuenciaPago;
    private String montoPago;
    private String duracionJunta;

    public Junta() {
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getMontoJunta() {
        return montoJunta;
    }

    public void setMontoJunta(String montoJunta) {
        this.montoJunta = montoJunta;
    }

    public int getNumeroIntegrantes() {
        return numeroIntegrantes;
    }

    public void setNumeroIntegrantes(int numeroIntegrantes) {
        this.numeroIntegrantes = numeroIntegrantes;
    }

    public String getFrecuenciaPago() {
        return frecuenciaPago;
    }

    public void setFrecuenciaPago(String frecuenciaPago) {
        this.frecuenciaPago = frecuenciaPago;
    }

    public String getMontoPago() {
        return montoPago;
    }

    public void setMontoPago(String montoPago) {
        this.montoPago = montoPago;
    }

    public String getDuracionJunta() {
        return duracionJunta;
    }

    public void setDuracionJunta(String duracionJunta) {
        this.duracionJunta = duracionJunta;
    }
}
