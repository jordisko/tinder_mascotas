
//Index.js by Hector Ramirez Garcia
//Imports
import './Index.css';
//Bootstrap Import ↧
//import 'bootstrap/dist/css/bootstrap.css';


//function for load index
function Index() {

    return (

    <body className='Index'>
        {
        //Class Nav
        }
        
        <header className='Nav'>
            {
            //Class LogButton
            }
            <button type="submit" className='LogButton'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/30px-OOjs_UI_icon_userAvatar.svg.png" width="25" height="25" />
                <div class="dropdown-content">
                    <p>Conecta con lo que buscas!</p>
                    <button className='LogMove'>Iniciar Session</button>
                    <button className='RegMove'>Registrarte</button>
                </div>
            </button>
            <h4>Nombre web</h4>
            
        </header>
        
        {
        //Class Footer
        }

        <section className='Main'>
           <button className='Logo_Main'></button>
           <h3>Nombre Web</h3>
           <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book.
           </p>
           <button className='ButtonSection'>Unete!</button>

           <section className='Steps'>
                <h2>¿Lorem Ipsum is simply dummy text of the printing?</h2>
                <table>
                    <tr>
                        <th><h3>orem Ipsum</h3></th>
                        <th><h3>text ever since the 1500s, when an unknown</h3></th>
                    </tr>
                    <tr>
                        <td><p>Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book</p></td>
                        <td><p>is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard</p></td>
                    </tr>
                </table>

           </section>

        </section>
        
        <footer className='Footer'>
            <ul>
                <li>
                    <h4>Copyright © 2022. All right reserved</h4>
                </li>
                <li>
                    <p></p>
                    <a href='#'>About US</a>
                    <a href='#'>Write For US</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Adversiting</a>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </footer>
    </body>
    ); //END return

} //END fuction

export default Index;