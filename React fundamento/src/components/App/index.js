import React, { useState } from "react";
import Post from "../Post";
import Header from "../Header";

import { ThemeProvider } from "../../context/ThemeContext"

import styles from './App.scss'

function App() {
    // const { onToggleTheme }= useContext(ThemeContext);
    
    const [posts, setPosts] = useState([
        { id: Math.random(), title: "Title#001", subtitle: "Subtitle#001", likes: 10, read: false, removed: false },
        { id: Math.random(), title: "Title#002", subtitle: "Subtitle#002", likes: 20, read: true, removed: true },
        { id: Math.random(), title: "Title#003", subtitle: "Subtitle#003", likes: 30, read: false, removed: false },
        { id: Math.random(), title: "Title#004", subtitle: "Subtitle#004", likes: 40, read: false, removed: false },
    ]);
    function handleRefresh(){
        setPosts((prevState) => {
            return prevState.concat({
                id: Math.random(),
                title: `Title#0${prevState.length + 1}`,
                subtitle: `Subtitle#0${prevState.length + 1}`,
                likes: 30,
            })
        });
    }
    function handleRemove(postId) {
        // setPosts((prevState) => prevState.filter( ({id}) => id !== postId));
        setPosts((prevState) => prevState.map((post) => (
            post.id == postId ? { ...post, removed: true } : post
        )))
    }

    return (
        <ThemeProvider>
            <Header>
                <h2 className={styles.title}>Posts da semana</h2>
                <button onClick={handleRefresh}>Atualizar</button>
            </Header>

            <hr />

            {posts.map(post => (
                <Post
                    key={post.title}
                    likes={post.likes}
                    post={post}
                    onRemove={handleRemove}
                />
            ))}
        </ThemeProvider>
    );
}

export default App;