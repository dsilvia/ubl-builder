import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtCode } from '../types/UnqualifiedDataTypes';

/*
1 cbc:NatureCode [0..1]    A code defined by a specific maintenance agency signifying the high-level nature of the commodity.
2 cbc:CargoTypeCode [0..1]    A mutually agreed code signifying the type of cargo for purposes of commodity classification.
3 cbc:CommodityCode [0..1]    The harmonized international commodity code for cross border and regulatory (customs and trade statistics) purposes.
4 cbc:ItemClassificationCode [0..1]    A code signifying the trade classification of the commodity.
*/


const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
    itemClassificationCode: {
        order: 4,
        attributeName: 'cbc:ItemClassificationCode',
        min: 0,
        max: 1,
        classRef: UdtCode,
    },
};

type AllowedParams = {
    itemClassificationCode?: UdtCode;
};

/**
 *
 */
class CommodityClassification extends GenericAggregateComponent {
    constructor(content: AllowedParams) {
        super(content, ParamsMap, 'cac:CommodityClassification');
    }
}

export { CommodityClassification, AllowedParams as CommodityClassificationParams };
