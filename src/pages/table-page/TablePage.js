import Table from '../../components/table/Table';

const TablePage = () => {
  return (
    <div>
      <Table data={HEROES_Data} />
    </div>
  );
};

export default TablePage;

const HEROES_Data = [
  { name: 'Messi', color: 'bg-blue-700', score: 10 },
  { name: 'Soperman', color: 'bg-red-700', score: 4 },
  { name: 'Spaiderman', color: 'bg-gray-700', score: 5 },
  { name: 'Joker', color: 'bg-yellow-700', score: 9 },
  { name: 'Thor', color: 'bg-amber-600', score: 6 },
];
