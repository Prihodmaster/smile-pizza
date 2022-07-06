import ContentHeader from '../components/ContentHeader';
import ContentItems from '../components/ContentItems';

function Dessertpage({items}) {
  return (
    <>
      <ContentHeader title="Десерты" />
      <ContentItems items={items} selectorVisible={false} />
    </>
  );
}
  
  export default Dessertpage;