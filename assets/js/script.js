//definicion del objeto paciente
function Patient(name, age, rut, diagnose) {
    this._name = name;
    this._age = age;
    this._rut = rut;
    this._diagnose = diagnose;
}

//Funcion Consultorio con setters y getters abreviados
//Son Propiedades
function Consultorio(name, patients) {
    let _name = name
    let _patients = patients || []

    Object.defineProperty(this, 'Name', {
        get: function() { return _name },
        set: function(name) { return _name = name } 
    })
   
    Object.defineProperty(this, 'Patients', {
        get: function() { return _patients },
        set: function(patients) { return _patients = patients } 
    })
   
}

//Metodos solicitados, agregar paciente y buscar paciente
Consultorio.prototype.addPatient = function (paciente) {
  return this.Patients.push(paciente);
};
Consultorio.prototype.searchPatient = function(name) {
    console.table(this.Patients.filter(patient => patient._name == name));
}

//datos de prueba
let consultorio = new Consultorio("Centro medico Ñuñoa", [
    new Patient("Juan", 25, "12345678-1", "diabetes"),
    new Patient ("Pedro", 30 , "12225554-7", "Lupus"),
    new Patient ("Pedro", 30 , "12225554-7", "Covid-19"),
    new Patient ("Julián", 30 , "12225554-7", "Gonorrea"),
    new Patient ("Cristóbal", 30 , "12225554-7", ["Sífilis", "Gonorrea"]),
    new Patient ("Ignacio", 30 , "12225554-7", "Ladilla"),
])


//f(x)'s de prueba
consultorio.searchPatient("Cristóbal")
consultorio.name="nombre Consultorio";
console.log(consultorio.Name)



console.log(consultorio.addPatient(new Patient("Nicolás", 24, "12345678-1", "Acné")))
consultorio._nombre = 'hola'
console.log(consultorio.Name)


