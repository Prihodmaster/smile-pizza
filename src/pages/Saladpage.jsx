import ContentHeader from '../components/ContentHeader';
import ContentItems from '../components/ContentItems';

function Saladpage({items}) {
    return (
      <>
        <ContentHeader title="Салаты" />
        <ContentItems items={items} selectorVisible={false} />
      </>
    );
  }
  
  export default Saladpage;