import style from './index.module.css'

export default function NotFound() {
    return (
        <>
        <section className={style["not-found-container"]}>
            <h1 className={style["not-found-header"]}>404</h1>
            <div className={style.cloak__wrapper}>
                <div className={style.cloak__container}>
                    <div className={style.cloak}></div>
                </div>
            </div>
            <div className={style.info}>
                <h2>We can't find that page</h2>
                <p className={style["not-found-p"]}>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
                <a className={style["not-found-a"]} href="/" rel="noreferrer noopener">Home</a>
            </div>
            </section>
        </>
    );
}