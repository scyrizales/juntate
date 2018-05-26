package com.jdk.jonnathan.juntateapp;

import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;

import com.jdk.jonnathan.juntateapp.dao.JuntaDA;
import com.jdk.jonnathan.juntateapp.entidades.Junta;

public class CrearJuntaActivity extends AppCompatActivity implements View.OnClickListener {

    //Spinner spinnerNumIntegrantes, spinnerFrecuenciaPago;
    EditText etAlias, etMonto, etMontoPagoCuota, etFrecuencia, etNumIntegrantes;
    Button btnAperturar;
    Junta objJunta;
    Toolbar toolbar;
    JuntaDA juntaDA = new JuntaDA();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_crear_junta);

        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        //spinnerNumIntegrantes = findViewById(R.id.spinnerNumIntegrantes);
        //spinnerFrecuenciaPago = findViewById(R.id.spinnerFrecuenciaPago);
/*
        String[] arregloNumIntegrantes = {"6" , "8", "10", "12", "14", "16", "18", "20", "22", "24"};
        spinnerNumIntegrantes.setAdapter(new ArrayAdapter<String>(getApplicationContext(),
                android.R.layout.simple_spinner_item, arregloNumIntegrantes));

        String[] arregloFrecuenciaPago = {"Semanal" , "Quincenal", "Mensual"};
        spinnerFrecuenciaPago.setAdapter(new ArrayAdapter<String>(getApplicationContext(),
                android.R.layout.simple_spinner_item, arregloFrecuenciaPago));

        */

        etFrecuencia = findViewById(R.id.FrecuenciaPago);
        etNumIntegrantes = findViewById(R.id.NumIntegrantes);

        etAlias = findViewById(R.id.NombreJunta);
        etMonto = findViewById(R.id.MontoJunta);
        etMontoPagoCuota = findViewById(R.id.MontoPago);

        btnAperturar = findViewById(R.id.btnAperturar);
        btnAperturar.setOnClickListener(this);
    }

    public boolean validarIngreso() {
        boolean pasovalidacion = true;

        if (etAlias.getText().toString().trim().length() == 0 ||
                etMonto.getText().toString().trim().length() == 0 ||
                etFrecuencia.getText().toString().trim().length() == 0 ||
                etNumIntegrantes.getText().toString().trim().length() == 0)
            pasovalidacion = false;

        return pasovalidacion;
    }

    private void guardarValores() {

        objJunta = obtenerValores();

        if (objJunta != null) {
            juntaDA.adicionar(objJunta);
            Snackbar.make(toolbar, "Junta Registrada exitósamente",
                    Snackbar.LENGTH_SHORT).show();
        } else {
            Snackbar.make(toolbar, "Ingresar datos obligatorios de la Junta",
                    Snackbar.LENGTH_SHORT).show();
            return;
        }
    }

    public Junta obtenerValores() {

        objJunta = new Junta();

        if (!validarIngreso()) {
            return null;
        }

        objJunta.setAlias(etAlias.getText().toString().trim());
        objJunta.setMontoJunta(etMonto.getText().toString());
        objJunta.setNumeroIntegrantes(Integer.parseInt(etNumIntegrantes.getText().toString()));
        objJunta.setFrecuenciaPago(etFrecuencia.getText().toString());

        double montoPagoCuota = Double.parseDouble(objJunta.getMontoJunta()) / objJunta.getNumeroIntegrantes();
        objJunta.setMontoPago(String.valueOf(montoPagoCuota));

        return objJunta;
    }

    @Override
    public void onClick(View v) {

        switch (v.getId()) {

            case R.id.btnAperturar:
                guardarValores();
                break;
        }

    }
}
