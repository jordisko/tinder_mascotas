import "./FotoyDescripcion.css";
function Menu1() {
  let resultado = (
    <div className="Row">
      <nav  className="containerconfotobackground rounded">
        <div className="containerdetexto p-4">
            <div className="containerFotoDePerfil border-0 pb-0">
                <div className="image-lg mx-auto" >
                    <img src="https://ui.glass/generator/static/profile-picture-3-b701fcb37cb1fef6a7e720dccd16e4c0.jpg" class="rounded-circle border border-1 p-3" alt="Foto Perfil" ></img>
                </div>
            </div>
        
            <div className="card-body" >
                <h3 className="h5 card-title mb-3">Nombre De La Persona</h3>
                <p className= "card-text text-muted">Un ejemplo de lo que sería la descripción</p>
            </div>
        </div>
        
        
        
      </nav>
    </div>

  );
  return resultado;
}
export default Menu1;