import styled from 'styled-components';
import styles from '../styles/Home.module.scss';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Title className={styles.red}>My page</Title>
}
