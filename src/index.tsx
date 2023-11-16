// react
import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// redux
import { Provider } from 'react-redux';
import { store } from './app/store';

// react router dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootPage } from './routes/RootPage';
import { SinglePostPage } from './routes/SinglePostPage';
import { EditPostPage } from './routes/EditPostPage';
import { NewPost } from './routes/NewPost';
import { NotFoundPage } from './routes/NotFoundPage';

// styles
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RootPage />, 
        children: [
            {
                path: 'posts/', 
                element: <h1>Posts page</h1>, 
            }, 
            {
                path: 'posts/:postId', 
                element: <SinglePostPage />, 
            }, 
            {
                path: 'posts/:postId/edit', 
                element: <EditPostPage />
            }, 
            {
                path: 'posts/new', 
                element: <NewPost />, 
            }, 
        ], 
    }, 
    {
        path: '*', 
        element: <NotFoundPage />, 
    }
]);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
        <RouterProvider router={router}/>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();