package com.jdk.jonnathan.juntateapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.jdk.jonnathan.juntateapp.adapters.JuntaAdapter;
import com.jdk.jonnathan.juntateapp.dao.JuntaDA;
import com.jdk.jonnathan.juntateapp.entidades.Junta;

import java.util.ArrayList;

public class ListarJuntaActivity extends AppCompatActivity {

    Toolbar toolbar;
    JuntaDA juntaDA = new JuntaDA();
    ArrayList<Junta> listaJuntas = new ArrayList<>();
    RecyclerView rvJunta;
    ImageView ivSinJunta;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_listar_junta);

        toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        listaJuntas = juntaDA.listar();

        ivSinJunta = findViewById(R.id.imageViewSD);

        rvJunta = findViewById(R.id.lista_junta);
        rvJunta.setHasFixedSize(true);
        rvJunta.setLayoutManager(new LinearLayoutManager(this));

        if (listaJuntas.size() == 0) {
            ivSinJunta.setVisibility(View.VISIBLE);
        } else {
            ivSinJunta.setVisibility(View.GONE);
        }

        JuntaAdapter adapter = new JuntaAdapter(this, listaJuntas);
        rvJunta.setAdapter(adapter);
    }
}
