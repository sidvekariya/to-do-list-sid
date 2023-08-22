import Todo from "@/components/Todo";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Todo />
            <Component {...pageProps} />
        </div>
    );
}
