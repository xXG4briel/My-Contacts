import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "../../context/ThemeContext"
import Button from "../Button";
import { Title } from "./styles";
// import styles from './Header.scss'
Title

export default function Header(props) {

    const { onToggleTheme } = useContext(ThemeContext);
    return (
        <>
            <Title>{props.title}</Title>
            {/* <h1 className={styles.title}>{props.title}</h1> */}
            <Button onClick={onToggleTheme}>
                Mudar Tema
            </Button>
            {props.children}
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

Header.defaultProps = {
    title: 'JStack Blog'
}