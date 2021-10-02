import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Contact from './Contact';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SearchBlog from './Search';
import Announcer from './Announcer';
import { useState } from 'react';



const posts = [
  { id: '1', name: 'Este es un ejemplo de cadena usando React' },
  { id: '2', name: 'Se escribe React y no Preact' },
  { id: '3', name: 'Tercer ejemplo de cadena' },
  { id: '4', name: 'Cuarta y última cadena' },
];

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};

function App() {

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);



  return (

      <Router>
        <div className="App">
          <NavBar />
                 
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="/search">
                <div className="search">
                  <Announcer
                        message={`${filteredPosts.length} filtrados / ${posts.length} totales`}
                  />
                    <SearchBlog

                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                    />
                    <ul>
                        {filteredPosts.map((post) => (
                            <li key={post.id}>{post.name}</li>
                        ))}
                    </ul>
                </div>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

  );
}

export default App;
