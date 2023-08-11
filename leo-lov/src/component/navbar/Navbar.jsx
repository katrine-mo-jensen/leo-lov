import style from './navbar.module.scss'

export function Navbar(){
    return (
        <section>
            <nav>
                <ul>
                    <li><a href="#">Hjem</a></li>
                    <li><a href="#">Advokaterne</a></li>
                    <li><a href="#">Om LeoLov</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
            <img src="#" alt="LeoLov logo" />
        </section>
    )
}