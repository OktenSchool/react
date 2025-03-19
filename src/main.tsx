import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {UsersPage} from "./pages/UsersPage.tsx";
import {PostsPage} from "./pages/PostsPage.tsx";
import {CommentsPage} from "./pages/CommentsPage.tsx";
import {ProductsPage} from "./pages/ProductsPage.tsx";
import App from "./App.tsx";

const routes = createBrowserRouter(
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

// /users
// /posts
// /comments
// /products


createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>);
