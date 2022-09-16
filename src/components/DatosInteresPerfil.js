import "./DatosInteresPerfil.css"
function DatosInteres() {
  let resultado3 = (
    <form class="formulario">
      <div class="container">
        <div class="row">
          <div class="form-group col-5">
            <label for="inputNombre"> Nombre : </label>
          </div>
          <div class="form-group col-5">
            <input type="nombre" class="form-control" id="inputNombre" defaultValue={/*(persona.nombre)|*/""} placeholder="Nuevo Nombre" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-5">
            <label for="inputApellido">Apellido : </label>
          </div>
          <div class="form-group col-6">
            <input type="apellido" class="form-control" id="inputApellido" defaultValue={/*(persona.apellido)|*/""} placeholder="Nuevo Apellido" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-5">
            <label for="inputDescripcion">Descripción : </label>
          </div>
          <div class="form-group col-6">
            <input type="descripcion" class="form-control" id="inputDescripcion" defaultValue={/*(persona.descripcion)|*/""} placeholder="Nueva Descripcion" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-5">
            <label for="inputTelefono">Número de telefono : </label>
          </div>
          <div class="form-group col-6">
            <input type="telefono" class="form-control" id="inputTelefono" defaultValue={/*(persona.numtelefono)|*/""} placeholder="Nuevo número" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-5">
            <label for="inputFechaDeNacimiento">Fecha de nacimiento : </label>
          </div>
          <div class="form-group col-6">
            <input type="text" class="form-control" id="inputFechaDeNacimiento" defaultValue={/*(persona.fechanacimiento)|*/""} placeholder="Nueva Fecha Ex:2002/09/28" />
          </div>
        </div>

        <div class="row">
          <div class="form-group col-5">
            <label for="inputDireccion">Dirección : </label>
          </div>
          <div class="form-group col-6">
            <input type="text" class="form-control" id="inputDireccion" defaultValue={/*(persona.direccion)|*/""} placeholder="Nueva Dirección" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-5">
            <label for="inputCodigoPostal">Codigo Postal : </label>
          </div>
          <div class="form-group col-6">
            <input type="text" class="form-control" id="inputCodigoPostal" defaultValue={/*(persona.codigopostal)|*/""} placeholder="Ex:08032" />
          </div>
        </div>
        <div class="row">
          <label for="inputState">Cómo será tu siguiente mascota?</label>
        </div>
        <div class="row">
          <label for="inputEtiqueta1">Edad :</label>
          <select id="inputState" class="form-control">
            <option selected>0-2 años</option>
            <option>2-10 años</option>
            <option>10+ años</option>
          </select>
          <label for="inputEtiqueta2">Energía : </label>
          <select id="inputState" class="form-control">
            <option selected>Activo</option>
            <option>Tranquilo</option>
          </select>
          <label for="inputEtiqueta1">Personalidad : </label>
          <select id="inputState" class="form-control">
            <option selected>Sociable</option>
            <option>No sociable</option>
          </select>
        </div>

        <div class="row">
          Qué razas te gustaría que te mostráramos?
        </div>
        <div class="row">
          <input type="checkbox" class="raza-control-input" id="beagleControlInline" />
          <label class="custom-control-label" for="customControlInline">Beagle</label>
          <input type="checkbox" class="raza-control-input" id="bulldogControlInline" />
          <label class="custom-control-label" for="customControlInline">Bulldog</label>
          <input type="checkbox" class="raza-control-input" id="bulldoFrancesControlInline" />
          <label class="custom-control-label" for="customControlInline">Bulldog Francés</label>
          <input type="checkbox" class="raza-control-input" id="canicheControlInline" />
          <label class="custom-control-label" for="customControlInline">Caniche</label>
        </div>
        <div class="row">
          <input type="checkbox" class="raza-control-input" id="chihuahuaControlInline" />
          <label class="custom-control-label" for="customControlInline">Chihuahua</label>
          <input type="checkbox" class="raza-control-input" id="goldenRetrieverControlInline" />
          <label class="custom-control-label" for="customControlInline">Golden retriever</label>
          <input type="checkbox" class="raza-control-input" id="labradorControlInline" />
          <label class="custom-control-label" for="customControlInline">Labrador</label>
          <input type="checkbox" class="raza-control-input" id="labradorRetrieverControlInline" />
          <label class="custom-control-label" for="customControlInline">Labrador retriever</label>
        </div>
        <div class="row">
          <input type="checkbox" class="raza-control-input" id="pastorAlemanControlInline" />
          <label class="custom-control-label" for="customControlInline">Pastor alemán</label>
          <input type="checkbox" class="raza-control-input" id="rottweilerControlInline" />
          <label class="custom-control-label" for="customControlInline">Rottweiler</label>
        </div>


        <div class="row">Tus fotos :
          <img /*src={persona.fotos}*/ alt="No tienes fotos"></img>
        </div>
        <div class="row">
          Sube una Foto :
          <input type="file" class="custom-file-input" id="validatedCustomFile" />
          <label class="custom-file-label"></label>
        </div>
        <div class="row">
          <button type="submit" class="btn btn-primary">Guardar los cambios</button>
        </div>
      </div>

    </form>

  );
  return resultado3;
}
export default DatosInteres;
