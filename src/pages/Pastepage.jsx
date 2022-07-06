import ContentHeader from '../components/ContentHeader';
import ContentItems from '../components/ContentItems';

function Pastepage({items}) {
    return (
      <>
        <ContentHeader title="Паста" />
        <ContentItems items={items} selectorVisible={false} />
      </>
    );
  }
  
  export default Pastepage;