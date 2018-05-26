package com.jdk.jonnathan.juntateapp;

import android.content.Intent;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Patterns;
import android.view.View;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RelativeLayout;

import com.jdk.jonnathan.juntateapp.dao.ProfileDA;
import com.jdk.jonnathan.juntateapp.entidades.Profile;
import com.jdk.jonnathan.juntateapp.manejadores.Memoria;

import java.util.regex.Pattern;

public class LoginActivity extends AppCompatActivity implements View.OnClickListener {

    AutoCompleteTextView mEmailView;
    EditText mPasswordView;
    Button mEmailSignInButton, btnRegistrar;
    RelativeLayout rlayout;
    Profile profile;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        rlayout = findViewById(R.id.rlayout);

        mEmailView = findViewById(R.id.email);
        mPasswordView = findViewById(R.id.password);
        mEmailSignInButton = findViewById(R.id.btnIniciarSesion);
        btnRegistrar = findViewById(R.id.btnRegistrarse);

        mEmailSignInButton.setOnClickListener(this);
        btnRegistrar.setOnClickListener(this);
    }

    private boolean isEmailValid(String email) {
        Pattern pattern = Patterns.EMAIL_ADDRESS;
        return pattern.matcher(email).matches();
    }

    private boolean isPasswordValid(String password) {
        //TODO: Replace this with your own logic
        return password.length() > 4;
    }

    protected void login() {
        if (mEmailView.getText().toString().isEmpty() ||
                mPasswordView.getText().toString().isEmpty()) {
            Snackbar.make(rlayout, "Login incompleto", Snackbar.LENGTH_LONG).show();
        } else if (isPasswordValid(mPasswordView.getText().toString())) {
            Snackbar.make(rlayout, "Ingresar Password correctamente", Snackbar.LENGTH_LONG).show();
        } else {
            Memoria.setManejadorBaseDatos(getApplicationContext());
            ProfileDA profileDA = new ProfileDA();
            profile = profileDA.login(mEmailView.getText().toString(),
                    mPasswordView.getText().toString());

            if (profile.getDni().length() == 0)
                Snackbar.make(rlayout, "Login Incorrecto", Snackbar.LENGTH_LONG).show();
            else {
                //prefs = PreferenceManager.getDefaultSharedPreferences(getContext());
                //prefs = getContext().getSharedPreferences("Login", Context.MODE_WORLD_WRITEABLE);
                //SharedPreferences.Editor editor = prefs.edit();
                //editor.putBoolean("registered", true);
                //editor.commit();

                Intent intent = new Intent();
                intent.setClass(this, MainActivity.class);
                intent.putExtra("profile", profile);
                startActivity(intent);
            }
        }
    }

    @Override
    public void onClick(View v) {

        switch (v.getId()) {
            case R.id.btnIniciarSesion:
                login();
                break;
            case R.id.btnRegistrarse:
                Intent intent = new Intent();
                intent.setClass(this, CrearUsuarioActivity.class);
                startActivity(intent);
                break;
        }


    }
}
