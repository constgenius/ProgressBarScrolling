import Styles from "./page.module.css";
import Navigation from "./Components/Navigation/Navigation";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

export default function Home() {
    return (
        <div>
            <ProgressBar/>
            <main className={Styles.main}>
                <Navigation />
            </main>
            <section className={Styles.section}>
                <h1 className={Styles.h1}>featured collections</h1>
                <Section
                    title="Urban Landscapes"
                    tagTitle="Architecture"
                    tagTitleTwo="City"
                    cta="View Gallery"
                    icon={true}
                />
                <Section
                    title="Oceanic Horizons"
                    tagTitle="Nature"
                    tagTitleTwo="Seascapes"
                    cta="View Gallery"
                    icon={true}
                />
            </section>
            <section className={Styles.section}>
                <h1 className={Styles.h1}>upcoming exhibitions</h1>
                <Section
                    title="Moments in Motion"
                    tagTitle="Street"
                    tagTitleTwo="Documentary"
                    cta="Opening in June"
                    icon={false}
                />
                <Section
                    title="Ethereal Light Studies"
                    tagTitle="Abstract"
                    tagTitleTwo="Minimalist"
                    cta="Opening in August"
                    icon={false}
                />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}