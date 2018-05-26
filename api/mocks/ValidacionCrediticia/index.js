exports.evaluacion = (dni, cb)=>{
    if (dni=='12345671') {
        return { cuota: 100, valid: true };
    }
    if (dni=='12345672') {
        return { cuota: 500, valid: true };
    }
    if (dni=='12345673') {
        return { cuota: 1000, valid: true};
    }
    if (dni=='12345674') {
        return { cuota: 2000, valid: true};
    }
    if (dni=='12345675') {
        return { 
            cuota: 0,
            message: 'Lo sentimos! Usted no puede aperturar ninguna juntaFavor de comunicarce con un asesor bancario', 
            valid: false 
        };
    }
    return {
        cuota: 10000,
        valid: true
    }
}