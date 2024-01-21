import 'src/components/overview/styles/Overview.css';
import Newsletter from './Newsletter';

export default function Overview(): JSX.Element {
    return (
        <section className="overview-page">
            <header>
                <h1>Overview</h1>
            </header>
            <Newsletter />
        </section>
    )
}
