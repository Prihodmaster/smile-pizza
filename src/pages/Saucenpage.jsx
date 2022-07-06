import ContentHeader from '../components/ContentHeader';
import ContentItems from '../components/ContentItems';

function Saucenpage({items}) {
    return (
      <>
        <ContentHeader title="Соусы" />
        <ContentItems items={items} selectorVisible={false} />
      </>
    );
  }
  
  export default Saucenpage;