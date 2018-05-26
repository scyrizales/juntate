exports.evaluacion = (req, res)=>{
    var dni = req.body.dni;
        if (err) {
            res.json(err);
            return;
        }
      
       
        if (dni=='12345671') {
            res.json({ monto: '2000' });
            return;
        }
        if (dni=='12345672') {
            res.json({ monto: '5000' });
            return;
        }
        if (dni=='12345673') {
            res.json({ monto: '10000'});
            return;
        }
        if (dni=='12345674') {
            res.json({ monto: '12000'});
            return;
        }
        if (dni=='12345675') {
            res.json({ message: 'Lo sentimos! Usted no puede aperturar ninguna juntaFavor de comunicarce con un asesor bancario' });
            return;
        }
 
}