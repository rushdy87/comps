import Sidebar from './components/sidebar/Sidebar';
import Route from './components/route/Route';
import AccordionPage from './pages/accordion-page/AccordionPage';
import DropdownPage from './pages/dropdown-page/DropdownPage';
import ButtonPage from './pages/button-page/ButtonPage';
import ModalPage from './pages/modal-page/ModalPage';
import TablePage from './pages/table-page/TablePage';
import CounterPage from './pages/counter-page/CounterPage';

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
};

export default App;
