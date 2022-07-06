import ContentHeader from '../components/ContentHeader';
import ContentItems from '../components/ContentItems';

function Chickenpage({items}) {
    return (
      <>
        <ContentHeader title="Курица" />
        <ContentItems items={items} selectorVisible={false} />
      </>
    );
  }
  
  export default Chickenpage;