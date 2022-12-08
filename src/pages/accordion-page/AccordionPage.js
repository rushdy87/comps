import Accordion from '../../components/accordion/Accordion';

const AccordionPage = () => {
  return (
    <div>
      <Accordion items={ITEMS} />
    </div>
  );
};

export default AccordionPage;

const ITEMS = [
  {
    id: 1,
    lable: 'What are the features of React?',
    content:
      'JSX, Components, Virtual DOM, One-way data-binding, and High performance',
  },
  {
    id: 2,
    lable: 'What is JSX?',
    content:
      'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
  },
  {
    id: 3,
    lable: 'What is the virtual DOM?',
    content:
      'React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.',
  },
  {
    id: 4,
    lable: 'What is an event in React?',
    content:
      'An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.',
  },
];
