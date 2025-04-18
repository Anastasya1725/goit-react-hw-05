import { Routes, Route } from "react-router-dom";
import { Suspense, lazy} from "react";
import Navigation from "./components/Navigation";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MoviesDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MovieReviews = lazy(() => import("./components/MovieReviews"));
const MovieCast = lazy(() => import("./components/MovieCast"))



const App = () => {
return(
<>
<Navigation/>
<Suspense fallback={<div>Loading...</div>}>
<Routes>
 <Route path="/" element={<HomePage/>} />
 <Route path="/movies" element={<MoviesPage/>} />
 <Route path="/movies/:movieId" element={<MoviesDetailsPage/>} /> 
 <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
 <Route path="/movies/:movieId/cast" element={<MovieCast />} />
 <Route path="*" element={<NotFoundPage/>} /> 
 </Routes>
 </Suspense>
 </>
)
}

export default App;
