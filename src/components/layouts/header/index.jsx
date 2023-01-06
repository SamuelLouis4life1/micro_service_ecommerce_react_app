import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { BsCart3, BsPhone } from "react-icons/bs";
import { RiUserShared2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./index.module.css";


export default function Header() {
    const { t } = useTranslation('header');

    const activeUrl = "#";
    const loginUrl = "#";

    return (
        <>
            <div className={styles.headerTop}>
                <Container fluid="xxl" className={styles.headerTopCointainer}>
                        <div>
                           {t('headerTop.text')} <Link to='/'>{t('headerTop.link')}</Link>
                        </div>
                        <div>  
                            <Link to={activeUrl}>{t('headerTop.active')} <BsPhone /></Link>
                            <Link to={loginUrl}>{t('headerTop.login')} <RiUserShared2Line/></Link>
                        </div>

                </Container>
            </div>
            <Navbar className={styles.headerMain} expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand className={styles.logo} href="/"><img src="imgs/telecall-logo.svg" alt="Telecall"/></Navbar.Brand>
                    <Navbar.Collapse className={styles.collapseArea} id="basic-navbar-nav">
                        <Nav className={styles.navCenter}>
                            <Nav.Link href="#home">{t("link.mobility")}</Nav.Link>
                            <Nav.Link href="#link">{t("link.telephone")}</Nav.Link>
                            <Nav.Link href="#link">{t("link.solutions")}</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title={t("dropdownHelp.title")} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">{t("dropdownHelp.item1")}</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className={styles.navTopHiddenLinks}>
                            <NavDropdown.Divider />
                            <Nav.Link to={activeUrl}>{t('headerTop.active')} <BsPhone /></Nav.Link>
                            <Nav.Link to={loginUrl}>{t('headerTop.login')} <RiUserShared2Line/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to='#' className={styles.linkIcon}>
                        <BsCart3 size="1.5rem" />
                    </Link>
                </Container>
            </Navbar>
        </>
    );
}