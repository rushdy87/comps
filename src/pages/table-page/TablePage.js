import Table from '../../components/table/Table';

const TablePage = () => {
  const keyFn = (hero) => hero.name;

  return (
    <div>
      <Table data={HEROES_DATA} config={CONFIG} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;

const HEROES_DATA = [
  { name: 'Messi', color: 'bg-blue-700', score: 10 },
  { name: 'Superman', color: 'bg-red-700', score: 4 },
  { name: 'Wonder Woman', color: 'bg-gray-700', score: 5 },
  { name: 'Joker', color: 'bg-yellow-700', score: 9 },
  { name: 'Thor', color: 'bg-amber-600', score: 6 },
];

const CONFIG = [
  { label: 'Name', render: (hero) => hero.name },
  {
    label: 'Color',
    render: (hero) => <div className={`p-3 m-2 ${hero.color}`} />,
  },
  { label: 'Score', render: (hero) => hero.score },
  { label: 'Sample', render: (hero) => hero.name[0] },
];
