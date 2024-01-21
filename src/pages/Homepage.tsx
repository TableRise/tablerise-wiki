import Overview from 'src/components/overview';
import Sidebar from 'src/components/Sidebar';
import 'src/pages/styles/Homepage.css';

export default function Homepage(): JSX.Element {
    return (
        <section className="homepage-page">
            <Sidebar />
            <Overview />
        </section>
    )
}
