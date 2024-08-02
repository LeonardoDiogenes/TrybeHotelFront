import styles from '../css/Footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <footer className={styles.wrapper}>
            <p>Leonardo Diógenes</p>
            <a href="https://github.com/LeonardoDiogenes" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large"></GitHubIcon>
            </a>
            <a href="https://linkedin.com/in/jose-leonardo-diogenes" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="large"></LinkedInIcon>
            </a>
        </footer>
    )
}

export default Footer;