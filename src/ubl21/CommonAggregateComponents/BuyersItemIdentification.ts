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
class BuyersItemIdentification extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:BuyersItemIdentification');
  }
}

export { BuyersItemIdentification, AllowedParams as BuyersItemIdentificationParams };
