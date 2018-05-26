package com.jdk.jonnathan.juntateapp.adapters;

import android.content.Context;
import android.support.v4.content.ContextCompat;
import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.jdk.jonnathan.juntateapp.R;
import com.jdk.jonnathan.juntateapp.entidades.Junta;

import java.util.List;

public class JuntaAdapter extends RecyclerView.Adapter<JuntaAdapter.JuntaViewHolder> {

    private Context mCtx;
    LayoutInflater inflater;
    private List<Junta> lista;

    public JuntaAdapter(Context mCtx, List<Junta> lista) {
        this.mCtx = mCtx;
        this.lista = lista;
    }

    @Override
    public JuntaViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        inflater = LayoutInflater.from(mCtx);
        View view = inflater.inflate(R.layout.row_item, null);
        return new JuntaViewHolder(view);
    }

    @Override
    public void onBindViewHolder(JuntaViewHolder holder, int position) {
        Junta junta = lista.get(position);

        holder.alias.setText(junta.getAlias());
        holder.montoJunta.setText(junta.getMontoJunta());
        holder.frecuenciaJunta.setText(junta.getFrecuenciaPago());
        holder.nroIntegrantes.setText(junta.getNumeroIntegrantes());
        holder.montoCuota.setText(junta.getMontoPago());

        if (position % 2 == 0) {
            holder.rowView.setBackgroundColor(ContextCompat.getColor(mCtx, R.color.gray));
            holder.cvDosimetria.setBackgroundColor(ContextCompat.getColor(mCtx, R.color.colorNavIcon2));
        } else {
            holder.rowView.setBackgroundColor(ContextCompat.getColor(mCtx, R.color.smoke));
            holder.cvDosimetria.setBackgroundColor(ContextCompat.getColor(mCtx, R.color.colorNavIcon));
        }
    }

    @Override
    public int getItemCount() {
        return lista.size();
    }

    class JuntaViewHolder extends RecyclerView.ViewHolder {

        protected View rowView;
        TextView alias, montoJunta, frecuenciaJunta, nroIntegrantes, montoCuota;
        CardView cvDosimetria;

        public JuntaViewHolder(View itemView) {
            super(itemView);

            alias = itemView.findViewById(R.id.tvAlias);
            montoJunta = itemView.findViewById(R.id.textViewMonto);
            frecuenciaJunta = itemView.findViewById(R.id.textViewFrecuencia);
            nroIntegrantes = itemView.findViewById(R.id.textViewNroIntegrantes);
            montoCuota = itemView.findViewById(R.id.textViewMontoCuota);
            cvDosimetria = itemView.findViewById(R.id.cvJunta);
            this.rowView = itemView;
        }
    }
}
