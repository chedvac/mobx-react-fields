
import BaseStoreValue  from '../../core/BaseStoreValue'

const validationProps = props => {
    if ( !props.field || !props.field.type==='BaseStoreValue'){
        throw new Error('Field should get a field parameter of BaseStoreValue type');
    }
}
export default validationProps;