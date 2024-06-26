import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier } from '../types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
};

type AllowedParams = {
  id: string | UdtIdentifier;
};

/**
 *
 */
class StandardItemIdentification extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:StandardItemIdentification');
  }
}

export { StandardItemIdentification, AllowedParams as StandardItemIdentificationParams };
