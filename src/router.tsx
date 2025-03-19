import {createBrowserRouter} from "react-router";
import App from "./App.tsx";
import {UsersPage} from "./pages/UsersPage.tsx";
import {PostsPage} from "./pages/PostsPage.tsx";
import {CommentsPage} from "./pages/CommentsPage.tsx";
import {ProductsPage} from "./pages/ProductsPage.tsx";

export const routes = createBrowserRouter(
    [
        {
            path: '/', element: <App/>, children: [
                {index: true, element: <div>hello default element</div>},
                {path: 'users', element: <UsersPage/>},
                {path: 'posts', element: <PostsPage/>},
                {path: 'comments', element: <CommentsPage/>},
                {path: 'products', element: <ProductsPage/>}
            ]
        },
    ]
);
