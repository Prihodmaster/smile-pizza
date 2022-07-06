import ContentHeader from '../components/ContentHeader';
import ContentItems from '../components/ContentItems';

function Drinkpage({items}) {
    return (
      <>
        <ContentHeader title="Напитки" />
        <ContentItems items={items} selectorVisible={true} />
      </>
    );
  }
  
  export default Drinkpage;