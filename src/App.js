import { Routes, Route } from "react-router-dom";
import Index from './routes';
import { horizontalListSortingStrategy, rectSortingStrategy } from '@dnd-kit/sortable';
import Dashboard from './components/Dashboard';
import TransactionTable from './components/TransactionsTable';
import Sortable from './components/dnd-kit/Sortable/Sortable';
import List from './components/dnd-kit/List/List';
import MultipleContainers from './components/dnd-kit/multiple-dnd/MultipleContainers';
import PlaidLink from "./components/PlaidLink";

function App() {
  const horizontalProps = {
    Container: (props) => <List horizontal {...props} />,
    style: {
      margin: '0 auto',
      overflow: 'auto',
    },
    itemCount: 50,
    getItemStyles: () => ({
      height: 50,
      width: 100,
    }),
    strategy: horizontalListSortingStrategy,
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<TransactionTable />} />
          <Route path="plaid-accounts" element={<PlaidLink />} />
          <Route path="reconcilations" element={
            <main className='flex flex-1 flex-wrap'>
              <Sortable {...horizontalProps} />
              <MultipleContainers trashable
                columns={2}
                strategy={rectSortingStrategy}
                wrapperStyle={() => ({
                  width: 150,
                  height: 150,
                })} />
            </main>
          } />
        </Route>
      </Routes>

      {/* <SlideOver open={open} setOpen={setOpen} /> */}

    </>
  );
}

export default App;
