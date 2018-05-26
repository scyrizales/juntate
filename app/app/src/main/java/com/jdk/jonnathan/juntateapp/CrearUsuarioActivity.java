package com.jdk.jonnathan.juntateapp;

import android.content.Intent;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.jdk.jonnathan.juntateapp.dao.ProfileDA;
import com.jdk.jonnathan.juntateapp.entidades.Profile;
import com.jdk.jonnathan.juntateapp.manejadores.Memoria;
import com.jdk.jonnathan.juntateapp.manejadores.SqlHandler;

import java.util.Date;
import java.util.regex.Pattern;

public class CrearUsuarioActivity extends AppCompatActivity implements View.OnClickListener {

    EditText etNombres, etCuenta, etEmail, etPassword;
    Button btnRegistrar;
    String accion;
    Profile currentData;
    SqlHandler handler;
    Toolbar toolbar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_crear_usuario);

        toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        etNombres = findViewById(R.id.ProfileName);
        etCuenta = findViewById(R.id.ProfileAccount);
        etEmail = findViewById(R.id.ProfileEmail);
        etPassword = findViewById(R.id.Password);
        btnRegistrar = findViewById(R.id.btnRegistrarProfile);
        btnRegistrar.setOnClickListener(this);

        Memoria.setManejadorBaseDatos(getApplicationContext());
    }

    private boolean isEmailValid(String email) {
        Pattern pattern = Patterns.EMAIL_ADDRESS;
        return pattern.matcher(email).matches();
    }

    private boolean isPasswordValid(String password) {
        //TODO: Replace this with your own logic
        return password.length() > 4;
    }

    protected void registrarUsuario() {

        ProfileDA profileDA = new ProfileDA();
        currentData = new Profile();

        currentData.setNombre(etNombres.getText().toString());
        currentData.setCuentabancaria(etCuenta.getText().toString());
        currentData.setEmail(etEmail.getText().toString());
        currentData.setPassword(etPassword.getText().toString());

        Date d = new Date();
        int id = (d.getYear() + d.getMonth() + d.getDate() + d.getDay() + d.getHours() + d.getMinutes() + d.getSeconds());

        currentData.setId(id);
        profileDA.adicionar(currentData);

        Snackbar.make(toolbar, "Usuario Creado", Snackbar.LENGTH_LONG).show();

        Intent intent = new Intent();
        intent.setClass(this, MainActivity.class);
        intent.putExtra("profile", currentData);
        startActivity(intent);
    }


    @Override
    public void onClick(View v) {

        switch (v.getId()) {

            case R.id.btnRegistrarProfile:
                registrarUsuario();
                break;
        }

    }
}
