import TableRiseDarkLogo from 'src/assets/svgs/tablerise-dark-logo.svg';
import 'src/components/styles/Sidebar.css';

export default function Sidebar(): JSX.Element {
    return(
        <section className="sidebar-component">
            <header>
                <img src={TableRiseDarkLogo} alt="Logotipo do projeto tablerise" />
                <h1>Tablerise</h1>
            </header>
        </section>
    )
}
