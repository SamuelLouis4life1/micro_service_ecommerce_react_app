import styles from './index.module.css';
import { Card } from 'react-bootstrap'

export default function Home(params) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Home</Card.Title>
                <Card.Text>
                    This is the home page.
                    <p className={styles.big}>Using modules</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}